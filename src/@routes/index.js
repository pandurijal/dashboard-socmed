import Dashboard from './../@pages/Dashboard';
import Posts from './../@pages/Posts';
import Albums from './../@pages/Albums';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/:id/posts', component: Posts },
  { path: '/:id/albums', component: Albums }
];

export default routes;
