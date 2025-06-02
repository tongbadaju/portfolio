import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  navItems = [
    { label: 'Angular', icon: 'assets/images/skills/angular.png', link: 'https://angular.io/' },
    { label: 'Typescript', icon: 'assets/images/skills/typescript.png', link: 'https://www.typescriptlang.org/' },
    { label: 'JavaScript', icon: 'assets/images/skills/javascript.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { label: 'Node.js', icon: 'assets/images/skills/nodejs.png', link: 'https://nodejs.org/' },
    { label: 'HTML', icon: 'assets/images/skills/html.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { label: 'CSS', icon: 'assets/images/skills/css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { label: 'TailWind CSS', icon: 'assets/images/skills/tailwindcss.png', link: 'https://tailwindcss.com/' },
    { label: 'Figma', icon: 'assets/images/skills/figma.png', link: 'https://www.figma.com/' },
    { label: 'Django', icon: 'assets/images/skills/django.png', link: 'https://www.djangoproject.com/' },
    { label: 'Python', icon: 'assets/images/skills/python.png', link: 'https://www.python.org/' },
    { label: 'PostgreSQL', icon: 'assets/images/skills/postgresql.png', link: 'https://www.postgresql.org/' },
    { label: 'Git', icon: 'assets/images/skills/git.png', link: 'https://git-scm.com/' },
    { label: 'C', icon: 'assets/images/skills/c.png', link: 'https://en.cppreference.com/w/c' }
  ]
}
