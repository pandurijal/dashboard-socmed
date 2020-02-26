import Dashboard from './../@pages/Dashboard';
import UserPost from './../@pages/UserPost';
import Albums from './../@pages/Albums';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/:id/posts', component: UserPost },
  { path: '/:id/albums', component: Albums }
];

export default routes;
