import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ViewCartRoute extends Route {

  @service
    shoppingCart;

  model(data){
    return  this.shoppingCart.addCartDetails;
  }
  
}
