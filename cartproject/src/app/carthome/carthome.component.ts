import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
//import { CartItem, Product, product } from '../models/products';
import { CartItem, Product } from '../models/products';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-carthome',
  templateUrl: './carthome.component.html',
  styleUrls: ['./carthome.component.css']
})
export class CarthomeComponent implements OnInit {

 products: Product[] = [];
cartItems: CartItem[] = [];

constructor(
  private productService: ProductService,
  private cartService: CartService
) { }

ngOnInit(): void {
  this.productService.getProducts().subscribe(products => {
    this.products = products;
  });
  this.cartItems = this.cartService.getCartItems();
}

addToCart(product: Product): void {
  const item: CartItem = {
    product: product,
    quantity: 1
  };
  this.cartService.addToCart(item);
  this.cartItems = this.cartService.getCartItems();
}

incrementQuantity(product: Product): void {
  const item: CartItem = {
    product: product,
    quantity: 1
  };
  this.cartService.incrementQuantity(item);
  this.cartItems = this.cartService.getCartItems();
}

decrementQuantity(product: Product): void {
  const item: CartItem = {
    product: product,
    quantity: 1
  };
  this.cartService.decrementQuantity(item);
  this.cartItems = this.cartService.getCartItems();
}

getCartQuantity(product: Product): number {
  const item = this.cartItems.find(item => item.product.id === product.id);
  return item ? item.quantity : 0;
}

isInCart(product: Product): boolean {
  return this.cartItems.some(item => item.product.id === product.id);
}
  }






