// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { CartItem, Product } from './models/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'cartItems';
  items: CartItem[] = [];

  constructor() {
    const storedItems = localStorage.getItem(this.cartKey);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  addToCart(item: CartItem): void {
    const existingItem = this.items.find(i => i.product.id === item.product.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }

  removeFromCart(product: Product): void {
    this.items = this.items.filter(item => item.product.id !== product.id);
  }

  clearCart(): void {
    this.items = [];
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  

  getCartItems(): CartItem[] {
    return this.items;
  }

  decrementQuantity(item: CartItem): void {
    const existingItem = this.items.find(i => i.product.id === item.product.id);
    if (existingItem) {
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        this.removeFromCart(existingItem.product);
      }
    }
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }

  incrementQuantity(item: CartItem): void {
    const existingItem = this.items.find(i => i.product.id === item.product.id);
    if (existingItem) {
      existingItem.quantity++;
    }
    localStorage.setItem(this.cartKey, JSON.stringify(this.items));
  }
  
}
