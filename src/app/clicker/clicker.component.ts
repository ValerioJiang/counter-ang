import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})


export class ClickerComponent {
  numero = 0;

  btnIncrement(){
    return this.numero++;
  }

  constructor() {
      
   }

}