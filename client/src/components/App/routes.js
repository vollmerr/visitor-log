import HomePage from '../HomePage';
import HelpPage from '../HelpPage';
import AdminPage from '../AdminPage';

// order here determines order in navigation menu
export const routesByKey = {
  home: {
    key: 'home',
    name: 'Home',
    path: '/',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: HomePage,
  },
  help: {
    key: 'help',
    name: 'Help',
    path: '/help',
    exact: true,
    icon: 'ca-gov-icon-question-line',
    component: HelpPage,
  },
  admin: {
    key: 'admin',
    name: 'Admin',
    path: '/admin',
    icon: 'ca-gov-icon-question-line',
    component: AdminPage,
  },
};

export default Object.values(routesByKey);
