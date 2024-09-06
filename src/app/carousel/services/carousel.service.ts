import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  async getImages(): Promise<string[]> {
    const response = await fetch('http://localhost:4200/api/images.json');
    return await response.json();
  }
}
