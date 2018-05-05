import { Component } from '@angular/core';


@Component({
    selector:'app-binding',
    templateUrl:'./TwowayBinding.component.html',

})

export class TwowayBindingComponent{

    UserName:string="My Name is: Chandan";
    name=true;
    
    onClickText(){
   this.name=true;
    }
  
   }