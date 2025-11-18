import { Component } from '@angular/core';
import { CartComponent } from 'src/app/cliente/cart/cart.component';

@Component({
  selector: 'app-header',
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  showCart = false;
  
  toggleCart() {
    this.showCart = !this.showCart;
  }
}
