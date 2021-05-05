import Route from '@ember/routing/route';
import {products} from '../data/product';
import { inject as service } from '@ember/service';

export default class ProductRoute extends Route {

  @service
    store;

  model(){
    return this.store.peekAll("product");   
  }

}
