import EmberRouter from '@ember/routing/router';
import config from 'smart-shop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('products', function() {});
  this.route('product-details',{path:"/:id/details"});
  this.route('buypage',{path:"/buy/:id"});
  this.route('viewCart',{path:"viewcart"});
  this.route('bought-products',{path:"bought"});
});
