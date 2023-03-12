import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  fashionItems = [
    {
      id: 1,
      name: 'Footware',
      description: 'Comfortable and durable footware',
      price: 120.99,
      imageUrl: 'https://rukminim1.flixcart.com/image/832/832/kzblocw0/shoe/q/z/o/6-380260-6-puma-black-silver-original-imagbcrcgvzx7ghm.jpeg?q=70'
    },
    {
      id: 2,
      name: 'Watches',
      description: 'Durable watch for everyday wear.',
      price: 59.99,
      imageUrl: 'https://fossil.scene7.com/is/image/FossilPartners/ES4519_main?$sfcc_fos_hi-res$'
    },
    {
      id: 3,
      name: 'Handbags',
      description: 'Comfortable and durable handbag.',
      price: 39.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0566/3503/1692/products/SiennaDoubleZipSatchel-BA-484-Blackcosmos_2_670x.png?v=1656579976'
    },
    {
      id: 4,
      name: 'Wallets',
      description: 'Long-lasting wallet.',
      price: 29.99,
      imageUrl: 'https://fossil.scene7.com/is/image/FossilPartners/ML3729001_main?$sfcc_fos_hi-res$'
    },
    {
      id: 5,
      name: 'Sunglasses',
      description: 'Comfortable and durable sunglasses.',
      price: 39.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0661/7423/products/airplane-mode-001-right-view.jpg?v=1646645051'
    },
  ];
  constructor() { }

  
  getFashionItems() {
    return this.fashionItems;
  }

  getFashionItem(id: string) {
    return this.fashionItems.find(item => item.id === +id);
  }
}


// fashionItems = [
//   {
//     id: 1,
//     name: 'Footware',
//     description: 'Comfortable and durable footware',
//     price: 120.99,
//     category: 'Shoes',
//     imageUrl: 'https://rukminim1.flixcart.com/image/832/832/kzblocw0/shoe/q/z/o/6-380260-6-puma-black-silver-original-imagbcrcgvzx7ghm.jpeg?q=70'
//   },
//   {
//     id: 2,
//     name: 'Watches',
//     description: 'Durable watch for everyday wear.',
//     price: 59.99,
//     category: 'Accessories',
//     imageUrl: 'https://fossil.scene7.com/is/image/FossilPartners/ES4519_main?$sfcc_fos_hi-res$'
//   },
//   {
//     id: 3,
//     name: 'Handbags',
//     description: 'Comfortable and durable handbag.',
//     price: 39.99,
//     category: 'Accessories',
//     imageUrl: 'https://cdn.shopify.com/s/files/1/0566/3503/1692/products/SiennaDoubleZipSatchel-BA-484-Blackcosmos_2_670x.png?v=1656579976'
//   },
//   {
//     id: 4,
//     name: 'Wallets',
//     description: 'Long-lasting wallet.',
//     price: 29.99,
//     category: 'Accessories',
//     imageUrl: 'https://fossil.scene7.com/is/image/FossilPartners/ML3729001_main?$sfcc_fos_hi-res$'
//   },
//   {
//     id: 5,
//     name: 'Sunglasses',
//     description: 'Comfortable and durable sunglasses.',
//     price: 39.99,
//     category: 'Accessories',
//     imageUrl: 'https://cdn.shopify.com/s/files/1/0661/7423/products/airplane-mode-001-right-view.jpg?v=1646645051'
//   },
//   {
//     id: 6,
//     name: 'T-Shirts',
//     description: 'Comfortable and stylish T-shirts',
//     price: 25.99,
//     category: 'Clothing',
//     imageUrl: 'https://cdn.shopify.com/s/files/1/0456/6820/4706/products/Men-T-Shirts-And-Tops-Casual-Short-Sleeve-Summer-Print-Tees-Cotton-O-Neck-Men-s-T-shirt-Male_600x.jpg?v=1626181524'
//   },
//   {
//     id: 7,
//     name: 'Jeans',
//     description: 'High-quality and durable jeans',
//     price: 89.99,
//     category: 'Clothing',
//     imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjC5xRvBVzLrXb1l5_t1q3b5v5QZD75lhZw&usqp=CAU'
//   }
// ];

// categories = ['Shoes', 'Accessories', 'Clothing'];

// constructor() { }

// getFashionItems() {
//   return this.fashionItems;
// }

// getFashionItem(id: string) {
//   return this.fashionItems.find(item => item.id === +id);
// }

// getCategories(): string[] {
//   return ['Shoes', 'Accessories', 'Clothing'];
// }

// getFashionItemsByCategory(category: string) {
//   return this.fashionItems.filter(item => item.category === category);
// }
// }