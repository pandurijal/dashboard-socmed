import Dashboard from './../@pages/Dashboard';
import UserPost from './../@pages/UserPost';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/:id/post', component: UserPost }
];

export default routes;
