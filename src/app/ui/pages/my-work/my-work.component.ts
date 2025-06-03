import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.css'
})
export class MyWorkComponent {
  excise = [
    { icon: 'assets/images/dev/angular.png', link: 'https://angular.io/' },
    { icon: 'assets/images/dev/django.png', link: 'https://www.djangoproject.com/' },
    { icon: 'assets/images/dev/postgresql.png', link: 'https://www.postgresql.org/' },
  ]
}
