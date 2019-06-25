import AdminPage from '../AdminPage';
import HelpPage from '../HelpPage';
import NewVisitPage from '../NewVisitPage';
import VisitPage from '../VisitPage';
import VisitsPage from '../VisitsPage';

// order here determines order in navigation menu
export const routesByKey = {
  home: {
    key: 'home',
    name: 'Home',
    path: '/',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: VisitsPage,
  },
  newVisit: {
    key: 'newVisit',
    name: 'New',
    path: '/visits/new',
    icon: 'ca-gov-icon-plus-line',
    component: NewVisitPage,
  },
  visitById: {
    hidden: true,
    key: 'visitById',
    name: 'visitById',
    path: '/visits/:id',
    component: VisitPage,
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
    icon: 'ca-gov-icon-lock',
    component: AdminPage,
  },
};

export default Object.values(routesByKey);
