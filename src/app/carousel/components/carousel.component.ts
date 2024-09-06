import {Component} from '@angular/core';
import {CarouselService} from '../services/carousel.service';

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
    public prev: number = 0;
    public active: number = 1;
    public next: number = 2;

    constructor(private carouselService: CarouselService) {}

    ngOnInit() {
        this.carouselService.getImages().then(data => this.images = data);
        setInterval(() => {
            this.prev = this.active;
            this.active = this.next;
            this.next = (this.active + 1) % this.images.length;

        }, 3000);
    }
}
