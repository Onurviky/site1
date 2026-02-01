import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  formulario = {
    nombre: '',
    email: '',
    mensaje: ''
  };

isLoading = false;
enviadoOk = false;
errorEnvio = false;

  contactos = [
    {
      nombre: 'Adrián Chamorro',
      email: 'adrianchamorro@loscerezosamoblamientos.com.ar',
      telefono: '3415420382'
    },

  ];

  instagram = {
    usuario: '@loscerezos_amoblamientos',
    url: 'https://www.instagram.com/loscerezos_amoblamientos'
  };

  async onSubmit() {
    this.enviadoOk = false;
    this.errorEnvio = false;

    try {
      const formData = new FormData();
      formData.append('nombre', this.formulario.nombre);
      formData.append('email', this.formulario.email);
      formData.append('mensaje', this.formulario.mensaje);

      formData.append('_subject', `Consulta web - ${this.formulario.nombre}`);

      const res = await fetch('https://formspree.io/f/xovgoned', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!res.ok) throw new Error('No se pudo enviar');

      this.enviadoOk = true;
      this.formulario = { nombre: '', email: '', mensaje: '' };
    } catch (e) {
      this.errorEnvio = true;
    } finally {
      this.isLoading = false;
    }
  }
}

