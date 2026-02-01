import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
phone = '5493415410382'; // ← tu número real
  message = 'Hola! Quiero consultar por muebles 😊';

  get whatsappUrl(): string {
return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
