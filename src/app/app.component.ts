import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/common/navbar/navbar.component';
import { initialBlobityOptions } from './utils/blobity.config';

declare var Blobity: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    blobityInstance: any;

  ngAfterViewInit(): void {
    // Wait a bit for DOM to stabilize
    setTimeout(() => {
      this.blobityInstance = new Blobity(initialBlobityOptions);

      // Setup color inversion on elements with .blobity-invert class
      const invertElements = document.querySelectorAll('.blobity-invert');

      invertElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          this.blobityInstance.updateOptions({
            color: '#08233b',
            dotColor: '#E3D3BE',
          });
        });

        el.addEventListener('mouseleave', () => {
          this.blobityInstance.updateOptions({
            color: initialBlobityOptions.color,
            dotColor: initialBlobityOptions.dotColor,
          });
        });
      });
    }, 300); // Small delay to ensure DOM is ready
  }
}
