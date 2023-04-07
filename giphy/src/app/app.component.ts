import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // gifs: any[] = [];
  // pageSize = 10;
  // currentPage = 1;
  // totalGifs = 0;
  // query = '';

  // constructor(private giphyService: GiphyService) {
  //   this.totalGifs = 0;
  //  }

  // ngOnInit() {
  //   this.loadGifs();
  // }

  // loadGifs() {
  //   if (this.query.trim() === '') {
  //     this.giphyService.getTrendingGifs(this.pageSize, (this.currentPage - 1) * this.pageSize)
  //       .subscribe((response: any) => {
  //         this.gifs = response.data;
  //         this.totalGifs = response.pagination.total_count;
  //       });
  //   } else {
  //     this.giphyService.searchGifs(this.query, this.pageSize, (this.currentPage - 1) * this.pageSize)
  //       .subscribe((response: any) => {
  //         this.gifs = response.data;
  //         this.totalGifs = response.pagination.total_count;
  //       });
  //   }
  // }

 
  // search() {
  //   if (this.query.trim() !== '') {
  //     this.currentPage = 1; // reset to first page
  //     this.giphyService.searchGifs(this.query, this.pageSize, (this.currentPage - 1) * this.pageSize)
  //       .subscribe((response: any) => {
  //         this.gifs = response.data;
  //         this.totalGifs = response.pagination.total_count;
  //       });
  //   }
  // }
  
  

  // nextPage() {
  //   if (this.currentPage * this.pageSize < this.totalGifs) {
  //     this.currentPage++;
  //     this.loadGifs();
  //   }
  // }

  // prevPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.loadGifs();
  //   }
  // }

  //  gifs: any[] = [];
  // pageSize = 10;
  // currentPage = 1;
  // totalGifs = 0;
  // query = '';

  gifs: any[] = [];
  query: string = '';
  currentPage: number = 0;
  totalResults: number = 0;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    //this.loadGifs();
    this.getTrendingGifs();

  }

  getTrendingGifs() {
    this.giphyService.getTrendingGifs(this.currentPage).subscribe(res => {
      this.gifs = res.data;
      this.totalResults = res.pagination.total_count;
    });
  }

  searchGifs() {
    this.currentPage = 0;
    this.giphyService.searchGifs(this.query, this.currentPage).subscribe(res => {
      this.gifs = res.data;
      this.totalResults = res.pagination.total_count;
    });
  }

  loadMore() {
    this.currentPage++;
    if (this.query) {
      this.giphyService.searchGifs(this.query, this.currentPage).subscribe(res => {
        this.gifs = [...this.gifs, ...res.data];
      });
    } else {
      this.giphyService.getTrendingGifs(this.currentPage).subscribe(res => {
        this.gifs = [...this.gifs, ...res.data];
      });
    }
  }

  // loadGifs() {
  //   if (this.query.trim() === '') {
  //     this.giphyService.getTrendingGifs(this.pageSize, (this.currentPage - 1) * this.pageSize)
  //       .subscribe((response: any) => {
  //         this.gifs = response.data;
  //         this.totalGifs = response.pagination.total_count;
  //       }, error => {
  //         console.log('Error fetching trending GIFs: ', error);
  //         this.gifs = [];
  //         this.totalGifs = 0;
  //       });
  //   } else {
  //     this.giphyService.searchGifs(this.query, this.pageSize, (this.currentPage - 1) * this.pageSize)
  //       .subscribe((response: any) => {
  //         this.gifs = response.data;
  //         this.totalGifs = response.pagination.total_count;
  //       }, error => {
  //         console.log('Error searching for GIFs: ', error);
  //         this.gifs = [];
  //         this.totalGifs = 0;
  //       });
  //   }
  // }
  // loadGifs() {
  //   if (this.query.trim() === '') {
  //     this.giphyService.getTrendingGifs(this.pageSize, (this.currentPage - 1) * this.pageSize)
  //       .subscribe((response: any) => {
  //         this.gifs = response.data;
  //         this.totalGifs = response.pagination.total_count;
  //       });
  //   } else {
  //     this.giphyService.searchGifs(this.query, this.pageSize, (this.currentPage - 1) * this.pageSize)
  //       .subscribe((response: any) => {
  //         this.gifs = response.data;
  //         this.totalGifs = response.pagination.total_count;
  //       });
  //   }
  // }
  // search() {
  //   this.currentPage = 1;
  //   this.giphyService.searchGifs(this.query, this.pageSize, (this.currentPage - 1) * this.pageSize)
  //     .subscribe((response: any) => {
  //       this.gifs = response.data;
  //       this.totalGifs = response.pagination.total_count;
  //     });
  // }
  

  // search() {
  //   if (this.query.trim() !== '') {
  //     this.currentPage = 1;
  //     this.loadGifs();
  //   } else {
  //     this.gifs = [];
  //     this.totalGifs = 0;
  //   }
  // }
 
  

  // nextPage() {
  //   if (this.currentPage * this.pageSize < this.totalGifs) {
  //     this.currentPage++;
  //     this.loadGifs();
  //   }
  // }

  // prevPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.loadGifs();
  //   }
  // }

 
}







