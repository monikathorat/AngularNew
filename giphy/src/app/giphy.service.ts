import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private readonly API_URL = 'https://api.giphy.com/v1/gifs';
  private readonly API_KEY = 'jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif';
  private readonly DEFAULT_PAGE_SIZE = 10;

  constructor(private http: HttpClient) { }

  getTrendingGifs(page: number = 0): Observable<any> {
    const offset = page * this.DEFAULT_PAGE_SIZE;
    const url = `${this.API_URL}/trending?api_key=${this.API_KEY}&limit=${this.DEFAULT_PAGE_SIZE}&offset=${offset}`;
    return this.http.get(url);
  }

  searchGifs(query: string, page: number = 0): Observable<any> {
    const offset = page * this.DEFAULT_PAGE_SIZE;
    const url = `${this.API_URL}/search?q=${query}&api_key=${this.API_KEY}&limit=${this.DEFAULT_PAGE_SIZE}&offset=${offset}`;
    return this.http.get(url);
  }
















  // private apiUrl = 'https://api.giphy.com/v1/gifs/trending';
  // private apiKey = 'jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif';

  // constructor(private http: HttpClient) { }

  // getTrendingGifs(limit: number = 10, offset: number = 0) {
  //   const url = `${this.apiUrl}?api_key=${this.apiKey}&limit=${limit}&offset=${offset}`;
  //   return this.http.get(url);
  // }

  // searchGifs(query: string, limit: number = 10, offset: number = 0) {
  //   const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`;
  //   return this.http.get(url);
  // }
  // searchGifs(query: string, limit: number, offset: number) {
  //   const params = {
  //     api_key: this.apiKey,
  //     q: query,
  //     limit: limit.toString(),
  //     offset: offset.toString()
  //   };
  //   return this.http.get(this.apiUrl + 'search', { params });
  // }
  
}

