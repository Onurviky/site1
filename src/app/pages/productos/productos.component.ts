
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

interface Producto {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
}

@Component({
  selector: 'app-productos',
   standalone: true,
  imports: [RouterLink, ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  categoriaActual: string = 'todas';


  productos: Producto[] = [
     { id: 1, categoria: 'cocinas', titulo: 'Cocina enchapada', descripcion: 'Cocina enchapada en incienso con acabado lustrado.', imagen: '/COCINA  ENCHAPADA EN INCIENZO LUSTRADA AGUADAS.jpg' },
  { id: 2, categoria: 'cocinas', titulo: 'Cocina negra', descripcion: 'Cocina en negro con mesada de Silestone.', imagen: '/COCINA COLOR NEGRO CON MESADA DE SILESTONE.jpg' },
  { id: 3, categoria: 'cocinas', titulo: 'Cocina combinada', descripcion: 'Combinación de madera y melamina.', imagen: '/COCINA COMBINADA MADERA Y MELAMINA BLANCA.jpg' },
  { id: 4, categoria: 'cocinas', titulo: 'Cocina laqueada', descripcion: 'Laqueado blanco brillante de estilo moderno.', imagen: '/COCINA LAQUEADA BLANCA BRILLANTE LA RINCONADA.jpg' },

  // ===== PLACARDS (4) =====
  { id: 5, categoria: 'placards', titulo: 'Placard moderno', descripcion: 'Placard en melamina blanca con escritorio.', imagen: '/PLACARD MELAMINA BLANCA CON ESCRITORIO.jpg' },
  { id: 6, categoria: 'placards', titulo: 'Placard corredizo', descripcion: 'Placard en melamina con espejo incluido.', imagen: '/PLACARD MELAMINA ESPEJO-5 (2).jpg' },
  { id: 7, categoria: 'placards', titulo: 'Placard lustrado', descripcion: 'Placard en melamina combinada a dos colores.', imagen: '/PLACARD MELAMINA DOS COLORES.jpg' },
  { id: 8, categoria: 'placards', titulo: 'Placard rústico', descripcion: 'Placard con puertas vidriadas.', imagen: '/PLACARD PUERTAS VIDRIADAS BS AS.jpg' },

  // ===== BAÑO (4) =====
  { id: 9, categoria: 'banio', titulo: 'Baño melamina', descripcion: 'Mueble de baño de madera lustrada.', imagen: '/MUEBLE DE BAÑO DE MADERA LUSTRADA.jpg' },
  { id: 10, categoria: 'banio', titulo: 'Baño minimal', descripcion: 'Mueble de baño en madera paraìso.', imagen: '/MUEBLE DE BAÑO MADERA PARAÌSO LUSTRADO BARRIO EL GOLF FUNES.jpeg' },
  { id: 11, categoria: 'banio', titulo: 'Baño recto', descripcion: 'Mueble de baño en melamina.', imagen: '/MUEBLE DE BAÑO MELAMINA BARRIO VIDA.jpeg' },
  { id: 12, categoria: 'banio', titulo: 'Baño combinado', descripcion: 'Mueble de baño con diseño laqueado.', imagen: '/MUEBLE DE BAÑO DE DISEÑO LAQUEADO 1.jpg' },

  // ===== PUERTAS (4) =====
  { id: 13, categoria: 'puertas', titulo: 'Puerta granero', descripcion: 'Puerta granero de melamina.', imagen: '/PUERTA GRANERO MELAMINA.jpg' },
  { id: 14, categoria: 'puertas', titulo: 'Puerta interior', descripcion: 'Puerta interior de madera lustrada.', imagen: '/PUERTA INTERIOR MADERA LUSTRADA.jpg' },
  { id: 15, categoria: 'puertas', titulo: 'Puerta maciza', descripcion: 'Puerta maciza con visor vertical.', imagen: '/PUERTA MACIZA MADERA CON VISOR VERTICAL.jpg' },
  { id: 16, categoria: 'puertas', titulo: 'Puerta tablas', descripcion: 'Puerta con tablas verticales.', imagen: '/PUERTA MADERA CON TABLAS VERTICALES.jpg' },

  // ===== LIVING / TV (4) =====
  { id: 17, categoria: 'living', titulo: 'Living laqueado', descripcion: 'Mueble de living laqueado gris.', imagen: '/MUEBLE DE LIVING LAQUEADO GRIS GRAFITO.jpg' },
  { id: 18, categoria: 'living', titulo: 'Living madera', descripcion: 'Living en madera lustrada.', imagen: '/MUEBLE DE LIVING MADERA LUSTRADA.jpg' },
  { id: 19, categoria: 'living', titulo: 'Living melamina', descripcion: 'Living en melamina combinada.', imagen: '/MUEBLE LIVING MELAMINA COMBINADA.jpeg' },
  { id: 20, categoria: 'living', titulo: 'Panel TV', descripcion: 'Panel TV en melamina blanca.', imagen: '/PANEL TV MELAMINA BLANCA.jpeg' },

  // ===== LAVADEROS (4) ===== no tengo fotos 
  { id: 21, categoria: 'lavaderos', titulo: 'Lavadero blanco', descripcion: 'Lavadero funcional en melamina blanca.', imagen: '/LAVADERO 2.jpg' },
  { id: 22, categoria: 'lavaderos', titulo: 'Lavadero madera', descripcion: 'Lavadero con detalles en madera.', imagen: '/LAVADERO 3.jpg' },
  { id: 23, categoria: 'lavaderos', titulo: 'Lavadero moderno', descripcion: 'Diseño moderno y práctico.', imagen: '/LAVADERO 1.jpg' },
  { id: 24, categoria: 'lavaderos', titulo: 'Lavadero compacto', descripcion: 'Optimizado para espacios chicos.', imagen: '/LAVADERO 5.jpg' },

  // ===== DORMITORIOS (4) =====
  { id: 25, categoria: 'dormitorios', titulo: 'Dormitorio madera', descripcion: 'Dormitorio en madera lustrada.', imagen: '/DORMITORIO COMPLETO MADERA LUSTRADA Y LAQUEADO.jpg' },
  { id: 26, categoria: 'dormitorios', titulo: 'Dormitorio melamina', descripcion: 'Dormitorio en melamina blanca.', imagen: '/CAMA CON RESPALDO Y MESAS DE LUZ MELAMINA A DOS COLORES.jpg' },
  { id: 27, categoria: 'dormitorios', titulo: 'Dormitorio combinado', descripcion: 'Dormitorio combinado laqueados en blanco y negro.', imagen: '/CAMA CON RESPALDO Y MESAS DE LUZ LAQUEDOS BLANCOS.jpg' },
  { id: 28, categoria: 'dormitorios', titulo: 'Dormitorio moderno', descripcion: 'Diseño moderno y funcional.', imagen: '/DORMITORIO COMPLETO MADERA LUSTRADA Y MELAMINA.jpg' },

  // ===== INFANTILES (4) =====
  { id: 29, categoria: 'infantiles', titulo: 'Infantil dormitorio', descripcion: 'Dormitorio infantil en melamina blanca.', imagen: '/PLACARD CON ESCRITORIO.jpg' },
  { id: 30, categoria: 'infantiles', titulo: 'Infantil marinera', descripcion: 'Cama marinera con cajones de madera.', imagen: '/CAMA NIDO CON CAJONES Y MARINERA.jpg' },
  { id: 31, categoria: 'infantiles', titulo: 'Mesa de luz en madera', descripcion: 'Mesa de luz adaptable doble cajonera.', imagen: '/MESA DE LUZ MADERA DOS CAJONES.jpeg' },
  { id: 32, categoria: 'infantiles', titulo: 'Mesa de luz Infantil', descripcion: 'Mesa de luz en madera.', imagen: '/MESA LUZ MADERA.jpeg' },

  // ===== BIBLIOTECAS (4) =====
  { id: 33, categoria: 'bibliotecas', titulo: 'Biblioteca madera', descripcion: 'Biblioteca de madera lustrada.', imagen: '/RACK TV-BIBLIOTECA MADERA LUSTRAD Y LAQUEADO BLANCO.jpg' },
  { id: 34, categoria: 'bibliotecas', titulo: 'Biblioteca moderna', descripcion: 'Diseño moderno en melamina.', imagen: '/RACK TV MELAMINA.jpg' },
  { id: 35, categoria: 'bibliotecas', titulo: 'Biblioteca combinada', descripcion: 'Melamina y madera.', imagen: '/RACK TV MELAMINA COMBINADA.jpg' },
  { id: 36, categoria: 'bibliotecas', titulo: 'Biblioteca oficina', descripcion: 'Uso profesional.', imagen: '/RACK TV Y ESCRITORIO MELAMINA.jpg' },

  // ===== ESCALERAS (4) =====
  { id: 37, categoria: 'escaleras', titulo: 'Escalera madera', descripcion: 'Escalera con estructura de madera clara.', imagen: '/ESCALERA MADERA CLARA.jpg' },
  { id: 38, categoria: 'escaleras', titulo: 'Escalera divisor', descripcion: 'División funcional con escalera.', imagen: '/DIVISORIO ESCALERA CON PUERTITA MADERA.jpg' },
  { id: 39, categoria: 'escaleras', titulo: 'Bajo escalera', descripcion: 'Escalera con madera oscura.', imagen: '/ESCALERA MADERA OSCURA.jpg' },
  { id: 40, categoria: 'escaleras', titulo: 'Escalera con baranda', descripcion: 'Diseño escalera con baranda en madera.', imagen: '/ESCALERA MADERA CON BARANDA.jpg' },

  // ===== OFICINAS (4) =====
  { id: 41, categoria: 'oficinas', titulo: 'Mueble oficina en melamina', descripcion: 'Muebles para oficina de melamina.', imagen: '/MUEBLES DE GUARDADO MELAMINA.jpg' },
  { id: 42, categoria: 'oficinas', titulo: 'Escritorio', descripcion: 'Escritorio funcional.', imagen: '/EscritorioHome.jpg' },
  { id: 43, categoria: 'oficinas', titulo: 'Escritorio en melamina', descripcion: 'Escritorio en caño y melamina.', imagen: '/ESCRITORIOS DE MELAMINA Y CAÑO.jpg' },
  { id: 44, categoria: 'oficinas', titulo: 'Rack oficina', descripcion: 'Rack TV y escritorio para oficina.', imagen: '/ESCRITORIO Y RACK TV MELAMINA COMBINADA.jpg' },

  // ===== LOCALES (4) =====
  { id: 45, categoria: 'locales', titulo: 'Local showroom Acindar', descripcion: 'Mobiliario para locales.', imagen: '/LOCAL SHOWROOM ACINDAR MUEBLES OSB.jpeg' },
  { id: 46, categoria: 'locales', titulo: 'Mostrador', descripcion: 'Mostrador en melamina.', imagen: '/FARMACIA GALVEZ AL 2500 A.jpg' },
  { id: 47, categoria: 'locales', titulo: 'Estantería', descripcion: 'Estantería comercial.', imagen: '/ESTANTERIA LOCAL CENTRO DE ROSARIO.jpg' },
  { id: 48, categoria: 'locales', titulo: 'Showroom Acindar express', descripcion: 'Mobiliario a medida.', imagen: '/LOCAL SHOWROOM ACINDAR EXPRESS.jpeg' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoriaActual = params.get('categoria') ?? 'todas';
    });
  }

  productosFiltrados(): Producto[] {
    if (this.categoriaActual === 'todas') {
      // si querés "todas", podrías mostrar más, pero acá lo dejo mostrando todo
      return this.productos;
    }

    // SOLO 4 productos de la categoría
    return this.productos
      .filter(p => p.categoria === this.categoriaActual)
      .slice(0, 4);
  }

  tituloCategoria(): string {
    if (this.categoriaActual === 'todas') return 'Todos los productos';

    const map: Record<string, string> = {
      cocinas: 'Cocinas',
      placards: 'Placards',
      banio: 'Muebles de Baño',
      lavaderos: 'Lavaderos',
      living: 'Muebles de Living / TV',
      dormitorios: 'Dormitorios',
      infantiles: 'Dormitorios Infantiles',
      bibliotecas: 'Bibliotecas',
      escaleras: 'Escaleras y Bajoescaleras',
      oficinas: 'Muebles para Oficinas',
      locales: 'Locales Comerciales',
      puertas: 'Puertas'
    };

    return map[this.categoriaActual] ?? this.categoriaActual;
  }
}
