import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titles = [
    'Fullstack Developer',
    'Frontend Developer',
    'UI/UX Designer',
    'Learner'
  ];
  displayedText = '';
  private titleIndex = 0;
  private charIndex = 0;
  private typing = true;

  ngOnInit(): void {
    this.typeCycle();
  }

  typeCycle() {
    const currentTitle = this.titles[this.titleIndex];

    if (this.typing) {
      if (this.charIndex < currentTitle.length) {
        this.displayedText += currentTitle[this.charIndex];
        this.charIndex++;
        setTimeout(() => this.typeCycle(), 100);
      } else {
        this.typing = false;
        setTimeout(() => this.typeCycle(), 2000); // Pause before erasing
      }
    } else {
      if (this.charIndex > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
        this.charIndex--;
        setTimeout(() => this.typeCycle(), 50);
      } else {
        this.typing = true;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        setTimeout(() => this.typeCycle(), 300);
      }
    }
  }
}
