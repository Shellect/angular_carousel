import { Component } from '@angular/core';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  providers: [CarouselService],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  public images: string[] = [];
  constructor(private carouselService: CarouselService){}

  ngOnInit(){
    this.carouselService.getImages().then(data => this.images = data)
  }
}
