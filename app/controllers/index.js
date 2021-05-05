import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';
// import EmberValidations from 'ember-validations';

// export default class EmberValidations extends EmberValidations{
  
// } 

export default class IndexController extends Controller {
  
  @service 
    store;
  
  @tracked
    idcount=0;

  @tracked
    userDeatilModel=[];

  adduser(){
    let userDeatil=this.store.createRecord('user')
    userDeatil.id=this.idcount++;
    userDeatil.name=this.name;
    userDeatil.email=this.email;
    userDeatil.number=this.number;
    this.userDeatilModel.push(this.userDeatil);
    this.set("name","");
    this.set("number","")
    this.set("email","")
    this.transitionToRoute("products"); 
  }

  @action
  checkUserData(){
    let regName = /^[a-zA-Z ]{2,30}$/;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let number = /^[0-9]+$/;
    
    if(!(regName.test(this.name)&&mailformat.test(this.email))){

      if(regName.test(this.name)&& this.name!=undefined){
        console.log(this.name)
      }else{
        this.set("name","")
        alert("give a proper name");
      }

      if(number.test(this.number)){
        console.log("test");
      }else{
        this.set("number","")
        alert("give a correct number")
      }

      if(mailformat.test(this.email)){
        console.log(this.email)
      }else{
        this.set("email","")
        alert("give a proper email")
      }

    }else{
      this.adduser()
    }
  }
}
