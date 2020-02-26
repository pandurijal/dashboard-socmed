import Dashboard from './../@pages/Dashboard';
import Posts from './../@pages/Posts';
import Comments from './../@pages/Comments';
import Albums from './../@pages/Albums';
import Photos from './../@pages/Photos';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/:id/posts', component: Posts },
  { path: '/:id/comments', component: Comments },
  { path: '/:id/albums', component: Albums },
  { path: '/:id/photos', component: Photos }
];

export default routes;
