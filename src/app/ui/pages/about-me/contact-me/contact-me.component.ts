import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  currentTime: string = new Date().toLocaleString();
  
  async sendEmail(e: Event) {
    e.preventDefault();

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to send this message?',
      width: 500,
      backdrop: `
        rgba(0, 0, 0, 0.5)
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, send it!',
      confirmButtonColor: "#155dfc",
      cancelButtonText: 'Cancel',
    });

    if (!result.isConfirmed) return;

    this.currentTime = new Date().toLocaleString();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        'service_w8dlcm4',
        'template_n96bp3j',
        form,
        'gjeRf1DJm_cvYAvt7'
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Your message was sent successfully!',
          confirmButtonColor: "#155dfc",
        });
        form.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to send message. Please try again later.',
          confirmButtonColor: "#155dfc",
        });
      });
  }
}
