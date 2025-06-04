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

  modalVisible: boolean = false;
  modalType: 'confirm' | 'success' | 'error' = 'confirm';
  modalMessage: string = '';

  modalConfirm!: () => void;
  modalCancel!: () => void;

  openModal(type: 'confirm' | 'success' | 'error', message: string = '') {
    this.modalType = type;
    this.modalMessage = message;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  sendEmail(e: Event) {
    e.preventDefault();
    this.confirmSend().then((confirmed) => {
      if (!confirmed) return;

      this.currentTime = new Date().toLocaleString();
      const form = e.target as HTMLFormElement;

      emailjs
        .sendForm('service_w8dlcm4', 'template_n96bp3j', form, 'gjeRf1DJm_cvYAvt7')
        .then(() => {
          this.openModal('success', 'Your message was sent successfully!');
          form.reset();
        })
        .catch((error) => {
          console.error('Email send error:', error);
          this.openModal('error', 'Failed to send message. Please try again later.');
        });
    });
  }

  confirmSend(): Promise<boolean> {
    this.openModal('confirm', 'Do you want to send this message?');
    return new Promise((resolve) => {
      const confirm = () => {
        this.closeModal();
        resolve(true);
      };
      const cancel = () => {
        this.closeModal();
        resolve(false);
      };
      this.modalConfirm = confirm;
      this.modalCancel = cancel;
    });
  }

}
