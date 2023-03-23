import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  // fashionItems = [
  //   {
  //     id: 1,
  //     name: 'Leather Jacket',
  //     description: 'A stylish leather jacket for any occasion.',
  //     price: 149.99,
  //     imageUrl: 'https://th.bing.com/th/id/R.9e145c2380b9f2c5cc298800e4a9f9fc?rik=VGukEC4xm2WESA&riu=http%3a%2f%2fwww.jackets.co.in%2fwp-content%2fuploads%2f2015%2f11%2fBrown-Leather-Jacket.jpg&ehk=P2BbMX9Lrqfdvkl%2f5E5BkdKqx1I1mhgmmgMHiiyYVJQ%3d&risl=&pid=ImgRaw&r=0'
  //   },
  //   {
  //     id: 2,
  //     name: 'Sneakers',
  //     description: 'Comfortable and durable sneakers for everyday wear.',
  //     price: 69.99,
  //     imageUrl: 'https://th.bing.com/th/id/OIP.aKQE7uBUHwzHP8eOdAg8awHaHa?pid=ImgDet&rs=1'
  //   },
  // ];


  fashionItems  = [
    {
      id: 1.1,
      name: 'Fossil Watch',
      description: 'Give your wrist the perfect blend of style and comfort by wearing this mens analog watch from the Enticer collection by Fossil',
      price: 8997,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgJ504-ApLWZ21lYqkOWq1wGhoI1YBFD6WwlgRPpdp5DA4OOaLnlWf2sjuZ2LCbRu3HlcuPh94I6QxhARdznzGiBHAaGqt-AupQuAuF2kgO_w_91A&usqp=CAE',
      category: 'Watches'
    },
    {
      id: 1.2,
      name: 'Titan Watch',
      description: 'Give your wrist the perfect blend of style and comfort by wearing this mens analog watch from the Enticer collection by Titan',
      price: 16495,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQa_vMN8rjWWoYGJ_C-83VXlvELmWAFAlruw93reng6cC2HH3AM6Fj77kf-IEHDly_gKNJXAzp4cxmqKW7ej8iQmONMWuSsAmjDLv-kbakXfDHqxQEXnBPrPwic-FA&usqp=CAE',
      category: 'Watches'
    },
    {
      id: 1.3,
      name: 'Casio Watch',
      description: 'Give your wrist the perfect blend of style and comfort by wearing this mens analog watch from the Enticer collection by Casio',
      price: 7295,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRz8JS6Pw2hpxA1OvfIuDgySCMS8yfwUA03tgnecH30zh_bz3bdoJVAqkgUl8N3I4XMGFd0EriOzN0v4AtRuCull4boO-RRtMatzxhxW-o_jeTA0xE1JrJN5dtNqJ81&usqp=CAE',
      category: 'Watches'
    },
    {
      id: 2.1,
      name: 'Crossbody Handbags',
      description: 'Durable and fashionable handbags',
      price: 1999,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0549/3040/7633/products/A4C0AE4DD65E0620E0A1E8D255DDAD9F.jpg?v=1630594437',
      category: 'Handbags'
    },
    {
      id: 2.2,
      name: 'Handbags',
      description: 'Durable and fashionable handbags',
      price: 1500,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfwImX3nb4oqv54Hz1j8LyRZ0lxoDIuxluVBBwyaG1rE9cCL_lkUlaVm-o4JqCsm-_ZOFbctEZJg4muThnDGOq9bKTkvdj-9CCfSs-Uq_JaMBwEFVc-mLmZOU2-S4&usqp=CAE',
      category: 'Handbags'
    },
    {
      id: 2.3,
      name: 'White crossbody Handbags ',
      description: 'Durable and fashionable handbags',
      price: 599,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTR9RWEm7XLjszyujPXHa61LwM48A_Zt9JwbSiMWTPiX2pNmkmQDTpKTXz7YUXc19HhM59XhfIQvBXdro0bP8yNZkaAUmfWiz_WreDFs1yaMKAeCGg&usqp=CAE',
      category: 'Handbags'
    },
    {
      id: 3.1,
      name: 'Vogue Sunglasses',
      description: 'Vogue UV Protected Sunglasses',
      price: 6650,
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZSKkF5BWa_juHuqAZ-eL5dz_h4Y-2_rcpOl1GyTF6uxXfPyhieGinJFiF3RYC0n7dpXQNXQcDPEaEYq15eJiOrd7yTrbloFuCf8MSwMYLl2Gfn4r9GUNZMb6tddfC',
      category: 'Sunglasses'
    },
    {
      id: 3.2,
      name: 'Rayban Sunglasses',
      description: 'RAYBAN BLACK SQUARE FULL RIM SUNGLASSES',
      price: 8237,
      imageUrl: 'https://cdn.shopify.com/s/files/1/0621/9317/2644/products/713132581124_1_720x.jpg?v=1664346210',
      category: 'Sunglasses'
    },
    {
      id: 3.3,
      name: 'Fossil Sunglasses',
      description: 'Fossil UV Protected Sunglassese',
      price: 6400,
      imageUrl: 'https://fossil.scene7.com/is/image/FossilPartners/FOS3102G001Q_main?$sfcc_fos_hi-res$',
      category: 'Sunglasses'
    },
   
  ];
  constructor() { }

  getFashionItems() {
    return this.fashionItems;
  }

  getFashionItem(id: string) {
    return this.fashionItems.find(item => item.id === +id);
  }


  getProductsByCategory(category: string) {
    return this.fashionItems.filter(product => product.category === category);
  }

  
}
