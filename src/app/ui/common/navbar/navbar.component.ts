import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navItems = [
    { label: 'Home', icon: 'fas fa-home', link: '/', external: false },
    { label: 'About Me', icon: 'fas fa-user', link: '/about-me', external: false },
    { label: 'Projects', icon: 'fas fa-briefcase', link: '/projects', external: false },
    { label: 'LinkedIn', icon: 'fab fa-linkedin-in', link: 'https://linkedin.com/in/tusharrai818', external: true },
    { label: 'Instagram', icon: 'fab fa-instagram', link: 'https://instagram.com/tongbadaju', external: true },
    { label: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/tongbadaju', external: true },
  ];

}
