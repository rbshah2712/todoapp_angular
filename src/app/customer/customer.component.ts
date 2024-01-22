import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  constructor(){

  }

  ngOnInit() : void{

  }

firstname1:string = '';
lastname1:string = '';
dateofbirth1:string = '';

fetch(firstname:string,lastname:string,dateofbirth:string){
  console.log("Your Data:" +dateofbirth);
  console.log(firstname);
  console.log(lastname);
  this.firstname1 = firstname;
  this.lastname1 = lastname;
  this.dateofbirth1 = dateofbirth;
}

}
