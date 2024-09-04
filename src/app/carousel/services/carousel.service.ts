import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  async getImages(): Promise<string[]> {
    const response = await fetch('http://localhost:4200/api/images.json');
    return await response.json();
  }

  draft() {
    let globalData;

    const p = new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest(); // 1
      xhr.open("GET", "/api/images.json"); // 2
      xhr.onloadend = () => {
        resolve(JSON.parse(xhr.responseText));
      }; // 4 или 5 .... или 28?
      xhr.onerror = () => {
        reject("Всё пропало!")
      }
      xhr.send() // 3
    });
    p.then(data => globalData = data)
  }

  draft2() {
    let globalData;
    let p = fetch("/api/images.json")
    p.then(response => response.json())
    p.then(data => globalData = data)
  }

  async draft3() {
    let response = await fetch("/api/images.json")
    let data = await response.json()
    let globaldata = data; // yeild
  }
}
