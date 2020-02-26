import Dashboard from './../@pages/Dashboard';
import Posts from './../@pages/Posts';
import Comments from './../@pages/Comments';
import Albums from './../@pages/Albums';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/:id/posts', component: Posts },
  { path: '/:id/comments', component: Comments },
  { path: '/:id/albums', component: Albums }
];

export default routes;
