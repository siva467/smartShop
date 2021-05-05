import Route from '@ember/routing/route';

export default class BuypageRoute extends Route {
  
  model(para){
    const{id}=para;
    let product=this.store.peekRecord("product", id);
    return product;
  }
  
}
