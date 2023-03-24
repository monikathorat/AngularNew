import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { cart, product } from './models/products';
import { cart, Product } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private apiUrl = 'http://localhost:3000/products';

  // constructor(private http: HttpClient) {}

  // public getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

  // cartData = new EventEmitter<product[] | []>();
  // constructor(private http: HttpClient) { }
  // addProduct(data: product) {
  //   return this.http.post('http://localhost:3000/products', data);
  // }
  // productList() {
  //   return this.http.get<product[]>('http://localhost:3000/products');
  // }

  // deleteProduct(id: number) {
  //   return this.http.delete(`http://localhost:3000/products/${id}`);
  // }

  // getProduct(id: string) {
  //   return this.http.get<product>(`http://localhost:3000/products/${id}`);
  // }

  // updateProduct(product: product) {
  //   return this.http.put<product>(
  //     `http://localhost:3000/products/${product.id}`,
  //     product
  //   );
  // }
  // popularProducts() {
  //   return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  // }

  // trendyProducts() {
  //   return this.http.get<product[]>('http://localhost:3000/products?_limit=8');
  // }

  // searchProduct(query: string) {
  //   return this.http.get<product[]>(
  //     `http://localhost:3000/products?q=${query}`
  //   );
  // }

  // localAddToCart(data: product) {
  //   let cartData = [];
  //   let localCart = localStorage.getItem('localCart');
  //   if (!localCart) {
  //     localStorage.setItem('localCart', JSON.stringify([data]));
  //     this.cartData.emit([data]);
  //   } else {
  //     cartData = JSON.parse(localCart);
  //     cartData.push(data);
  //     localStorage.setItem('localCart', JSON.stringify(cartData));
  //     this.cartData.emit(cartData);
  //   }
  // }

  // removeItemFromCart(productId: number) {
  //   let cartData = localStorage.getItem('localCart');
  //   if (cartData) {
  //     let items: product[] = JSON.parse(cartData);
  //     items = items.filter((item: product) => productId !== item.id);
  //     localStorage.setItem('localCart', JSON.stringify(items));
  //     this.cartData.emit(items);
  //   }
  // }

  // addToCart(cartData: cart) {
  //   return this.http.post('http://localhost:3000/cart', cartData);
  // }
  // getCartList(userId: number) {
  //   return this.http
  //     .get<product[]>('http://localhost:3000/cart?userId=' + userId, {
  //       observe: 'response',
  //     })
  //     .subscribe((result) => {
  //       if (result && result.body) {
  //         this.cartData.emit(result.body);
  //       }
  //     });
  // }
  // removeToCart(cartId: number) {
  //   return this.http.delete('http://localhost:3000/cart/' + cartId);
  // }
  // currentCart() {
  //   let userStore = localStorage.getItem('user');
  //   let userData = userStore && JSON.parse(userStore);
  //   return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userData.id);
  // }

  // orderNow(data: order) {
  //   return this.http.post('http://localhost:3000/orders', data);
  // }
  // orderList() {
  //   let userStore = localStorage.getItem('user');
  //   let userData = userStore && JSON.parse(userStore);
  //   return this.http.get<order[]>('http://localhost:3000/orders?userId=' + userData.id);
  // }

  // deleteCartItems(cartId: number) {
  //   return this.http.delete('http://localhost:3000/cart/' + cartId).subscribe((result) => {
  //     this.cartData.emit([]);
  //   })
  // }

  // cancelOrder(orderId:number){
  //   return this.http.delete('http://localhost:3000/orders/'+orderId)

  // }


  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // getProduct(id: number): Observable<Product> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Product>(url);
  // }

  updateProduct(product: Product): Observable<void> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<void>(url, product);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  deleteProduct(product: Product): Observable<void> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<void>(url);
  }

}
