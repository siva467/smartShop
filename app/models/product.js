import Model,{attr, belongsTo, hasMany} from '@ember-data/model';

export default class ProductModel extends Model {
  
  @belongsTo ("user") user;

  @attr picImg;
  @attr name;
  @attr reelPrice;
  @attr realPrice;
  @attr stock;
  @attr quantity;
  @attr detail;
  @attr checkCart
 

}
