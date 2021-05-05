import Model,{attr , belongsTo, hasMany  } from '@ember-data/model';

export default class UserModel extends Model {

  @hasMany ("product") product;

  @attr  name;
  @attr email;
  @attr number;

}
