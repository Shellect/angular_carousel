import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/components/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Радость жизни';
}
