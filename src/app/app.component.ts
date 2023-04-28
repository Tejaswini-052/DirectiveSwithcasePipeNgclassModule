import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManyTask';
  choice:number=1;
  num1:number=20;
  num2:number=10;
  add(){
    return this.num1+this.num2;
  }
  sub(){
    return this.num1-this.num2;
  }
  multiply(){
    return this.num1*this.num2;
  }
}
