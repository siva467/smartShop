import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class BoughtProductsRoute extends Route {

  @service
    store

  @service
    shoppingCart;

  model(){
    let user=this.store.peekRecord("user",0);
    return user;
  }
}
