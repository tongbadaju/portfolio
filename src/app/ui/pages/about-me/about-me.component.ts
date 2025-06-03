import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, ContactMeComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  navItems = [
    { label: 'Angular', icon: 'assets/images/dev/angular.png', link: 'https://angular.io/' },
    { label: 'Typescript', icon: 'assets/images/dev/typescript.png', link: 'https://www.typescriptlang.org/' },
    { label: 'JavaScript', icon: 'assets/images/dev/javascript.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { label: 'Node.js', icon: 'assets/images/dev/nodejs.png', link: 'https://nodejs.org/' },
    { label: 'HTML', icon: 'assets/images/dev/html.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { label: 'CSS', icon: 'assets/images/dev/css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { label: 'TailWind CSS', icon: 'assets/images/dev/tailwindcss.png', link: 'https://tailwindcss.com/' },
    { label: 'Figma', icon: 'assets/images/dev/figma.png', link: 'https://www.figma.com/' },
    { label: 'Django', icon: 'assets/images/dev/django.png', link: 'https://www.djangoproject.com/' },
    { label: 'Python', icon: 'assets/images/dev/python.png', link: 'https://www.python.org/' },
    { label: 'PostgreSQL', icon: 'assets/images/dev/postgresql.png', link: 'https://www.postgresql.org/' },
    { label: 'Git', icon: 'assets/images/dev/git.png', link: 'https://git-scm.com/' },
    { label: 'C', icon: 'assets/images/dev/c.png', link: 'https://en.cppreference.com/w/c' }
  ]
}
