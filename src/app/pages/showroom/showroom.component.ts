import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showroom',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent {
  terminaciones = [
    
      // ================= MELAMINA =================
    {
      nombre: 'Melamina',
      imagenes: [
        { url: '/MUEBLE MELAMINA OFICINAS CACHERO Y KOZUCH.jpeg', descripcion: 'Melamina: mueble para oficinas' },
        { url: '/MUEBLE MELAMINA BLANCA PARA MAQUETAS.jpeg', descripcion: 'Melamina: mueble en melamina blanca' },
        { url: '/PANEL TV MELAMINA BLANCA.jpeg', descripcion: 'Melamina: panel TV en melamina blanca' },
        { url: '/RACK TV MELAMINA BLANCA BRILLANTE.jpg', descripcion: 'Melamina: rack TV en melamina blanca brillante' },
        { url: '/MUEBLE LIVING MELAMINA Y LAQUEADO BLANCO.jpeg', descripcion: 'Melamina: living combinando melamina y laqueado blanco' },
        { url: '/MUEBLE LIVING MELAMINA COMBINADA.jpeg', descripcion: 'Melamina: mueble living en melamina combinada' }
      ]
    },

    // ================= LAQUEADO =================
    {
      nombre: 'Laqueado',
      imagenes: [
        { url: '/COCINA LAQUEADA BLANCA BRILLANTE LA RINCONADA.jpg', descripcion: 'Laqueado: cocina laqueada blanca brillante' },
        { url: '/COCINA LAQUEADA COLOR BLNACO.jpg', descripcion: 'Laqueado: cocina laqueada color blanco' },
        { url: '/COCINA LAQUEADA GRIS OSCURO  AZAHARES DEL PARANÀ.jpg', descripcion: 'Laqueado: cocina laqueada gris oscuro' },
        { url: '/RACK TV LAQUEADO BLANCO.jpg', descripcion: 'Laqueado: rack TV laqueado blanco' },
        { url: '/PUERTA GRANERO MADERA LAQUEADA BLANCA.jpg', descripcion: 'Laqueado: puerta granero con terminación laqueada' },
        { url: '/PUERTAS TABLERO LAQUEADAS BLANCAS.jpg', descripcion: 'Laqueado: puertas laqueadas blancas' }
      ]
    },

    // ================= MADERA =================
    {
      nombre: 'Madera',
      imagenes: [
        { url: '/COCINA MADERA 3.jpg', descripcion: 'Madera: cocina con presencia de madera' },
        { url: '/DOBLE PUERTA GRANERO MADERA CON VIDRIO.jpg', descripcion: 'Madera: doble puerta granero con vidrio' },
        { url: '/PUERTA INTERIOR MADERA LUSTRADA.jpg', descripcion: 'Madera: puerta interior lustrada' },
        { url: '/PUERTA MACIZA MADERA CON VISOR VERTICAL.jpg', descripcion: 'Madera: puerta maciza con visor vertical' },
        { url: '/PUERTA MADERA CON TABLAS VERTICALES.jpg', descripcion: 'Madera: puerta con tablas verticales' },
        { url: '/DIVISORIO ESCALERA MADERA LUSTRADA.jpg', descripcion: 'Madera: divisorios de escalera en madera lustrada' }
      ]
    },

    // ================= PVC =================
    {
      nombre: 'PVC',
      imagenes: [
        { url: '/COCINA PVC MESADA DE MADERA AZAHARES DEL PARANÀ.jpg', descripcion: 'PVC: cocina en PVC con mesada de madera' },
        { url: '/COCINA PVC TERMOFORMADO 4.jpg', descripcion: 'PVC: cocina termoformada (PVC)' },
        { url: '/COCINA PVC TERMOFORMADO BLANCO.jpg', descripcion: 'PVC: cocina termoformada blanca' }
      ]
    },

    // ================= COMBINADAS =================
    {
      nombre: 'Combinadas',
      imagenes: [
        { url: '/COCINA COMBINADA MADERA Y MELAMINA BLANCA.jpg', descripcion: 'Combinadas: cocina madera + melamina' },
        { url: '/COCINA MELAMINA COLOR COMBINADO.jpg', descripcion: 'Combinadas: cocina en melamina combinada' },
        { url: '/RACK TV MELAMINA SIMIL MADERA Y BLANCA.jpg', descripcion: 'Combinadas: rack TV simil madera + blanco' },
        { url: '/RACK TV Y MESA RATONA MELAMINA COMBINADA.jpg', descripcion: 'Combinadas: rack TV + mesa ratona combinada' },
        { url: '/VESTIDOR MELAMINA COMBINADA.jpg', descripcion: 'Combinadas: vestidor en melamina combinada' },
        { url: '/VESTIDOR MELAMINA SIMIL MADERA KENTUCKY.jpg', descripcion: 'Combinadas: vestidor simil madera (Kentucky)' }
      ]
    },

    // ================= ESPECIALES =================
    {
      nombre: 'Especiales',
      imagenes: [
        { url: '/DIVISORIO MADERA CON TABLAS VERTICALES GIRATORIAS.jpg', descripcion: 'Especiales: divisorios de madera con tablas verticales' },
        { url: '/DIVISORIO MADERA PARA MONOAMBIENTE.jpg', descripcion: 'Especiales: divisorios de madera para monoambiente' },
        { url: '/DIVISORIO PARA LUZ DE MADERA.jpg', descripcion: 'Especiales: divisorio para paso de luz en madera' },
        { url: '/REVESTIMIENTO VARILLADO MADERA AZAHARES DEL PARANÀ.jpg', descripcion: 'Especiales: revestimiento varillado de madera' },
        { url: '/REVESTIMIENTO FENÒLICO GUATAMBÙ OFICINAS CACHERO Y KOZUCH.jpg', descripcion: 'Especiales: revestimiento fenólico guatambú natural' },
        { url: '/REVESTIMIETO FENÒLICO LUSTRE NATURAL.jpg', descripcion: 'Especiales: revestimiento fenólico lustre natural' }
      ]
    }

  ];
}

