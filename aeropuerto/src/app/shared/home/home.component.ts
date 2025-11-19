import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCart = false;
  
  toggleCart() {
    this.showCart = !this.showCart;
  }
}
