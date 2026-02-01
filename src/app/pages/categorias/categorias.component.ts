import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Categoria = {
  titulo: string;
  slug: string;
  subtitulo: string;
  imagen: string; // opcional (si no existe, se verá el fallback)
};

@Component({
  selector: 'app-productos-categorias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent {
  // IMPORTANTE:
  // - slug debe coincidir con lo que usás en tu ruta /productos/:categoria
  // - imagen: usá un jpg que tengas en /public (si no, cambiá por uno real)
  categorias: Categoria[] = [
    { titulo: 'Cocinas', slug: 'cocinas', subtitulo: 'Diseños a medida y funcionales.', imagen: 'COCINA MADERA 3.jpg' },
    { titulo: 'Placards', slug: 'placards', subtitulo: 'Interiores y frentes personalizados.', imagen: 'PlacardHome.jpg' },
    { titulo: 'Baño', slug: 'banio', subtitulo: 'Muebles de baño y vanitorys.', imagen: 'MUEBLE DE BAÑO DE DISEÑO LAQUEADO 1.jpg' },
    { titulo: 'Lavaderos', slug: 'lavaderos', subtitulo: 'Soluciones resistentes y prácticas.', imagen: 'LAVADERO 5.jpg' },
    { titulo: 'Living / TV', slug: 'living', subtitulo: 'Rack TV, bibliotecas y guardado.', imagen: 'RACK TV MELAMINA.jpg' },
    { titulo: 'Dormitorios', slug: 'dormitorios', subtitulo: 'Placares, respaldos y guardado.', imagen: 'DORMITORIO COMPLETO MADERA LUSTRADA Y MELAMINA.jpg' },
    { titulo: 'Infantiles', slug: 'infantiles', subtitulo: 'Muebles pensados para chicos.', imagen: 'EscritorioHome.jpg' },
    { titulo: 'Bibliotecas', slug: 'bibliotecas', subtitulo: 'Bibliotecas a medida y estantes.', imagen: 'RACK TV-BIBLIOTECA MADERA LUSTRAD Y LAQUEADO BLANCO.jpg' },
    { titulo: 'Escaleras y Bajoescaleras', slug: 'escaleras', subtitulo: 'Aprovechá cada espacio.', imagen: 'DIVISORIO ESCALERA CON PUERTITA MADERA.jpg' },
    { titulo: 'Oficinas', slug: 'oficinas', subtitulo: 'Escritorios, guardado y más.', imagen: 'ESCRITORIOS DE MELAMINA Y CAÑO.jpg' },
    { titulo: 'Locales Comerciales', slug: 'locales', subtitulo: 'Mostradores, exhibidores, etc.', imagen: 'MUEBLE DE LIVING LAQUEADO GRIS GRAFITO.jpg' },
    { titulo: 'Puertas', slug: 'puertas', subtitulo: 'Puertas a medida y terminaciones.', imagen: 'PUERTA CORREDIZA MADERA INCIENZO.jpg' },
  ];

  onImgError(ev: Event) {
    // fallback si alguna imagen no existe
    (ev.target as HTMLImageElement).src = 'logo.jpg';
  }
}
