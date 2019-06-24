using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using API.Services;

namespace API {
  public class Program {
    public static void Main(string[] args) {
      var host = CreateWebHostBuilder(args).Build();

      using(var scope = host.Services.CreateScope()) {
        try {
          var context = scope.ServiceProvider.GetService<VisitorLogContext>();
          context.Database.Migrate();
        } catch (Exception ex) {
          var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
          logger.LogError(ex, "Failed to migrate");
        }
      }

      host.Run();
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
      WebHost.CreateDefaultBuilder(args)
      .UseStartup<Startup>();
  }
}
