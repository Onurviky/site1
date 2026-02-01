// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent,FooterComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'los-cerezos';
// }
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './services/seo.service';
import {
  CATEGORIA_LABEL,
  CATEGORIA_DESCRIPTION,
  schemaBusiness,
  schemaCategoriasItemList,
  CategoriaSlug
} from './app.seo';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent, WhatsappButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        // ✅ Obtenemos el snapshot REAL del último hijo
        const snapshot = this.getDeepestSnapshot(this.route);

        const path = snapshot.routeConfig?.path || '';
        let schema: object | null = schemaBusiness();

        // Home
        if (path === '') {
          this.seo.setAll({
            title: 'Los Cerezos Amoblamientos | Muebles a medida en Rosario',
            description:
              'Diseñamos y fabricamos muebles a medida en Rosario: cocinas, placards, baños, oficinas y más. Calidad artesanal y terminaciones a elección.',
            keywords:
              'muebles a medida, amoblamientos, cocinas a medida, placards, baños, Rosario, Santa Fe',
            schema
          });
          return;
        }

        // /productos
        if (path === 'productos') {
          schema = schemaCategoriasItemList();
          this.seo.setAll({
            title: 'Productos | Categorías de muebles a medida | Los Cerezos',
            description:
              'Explorá nuestras categorías de muebles a medida: cocinas, placards, baños, lavaderos, living/TV, dormitorios, infantiles, bibliotecas, escaleras, oficinas, locales y puertas.',
            keywords:
              'categorías, productos, muebles a medida, cocinas, placards, baños, Rosario',
            schema
          });
          return;
        }

        // /productos/:categoria
        if (path === 'productos/:categoria') {
          // ✅ ESTE get() ahora es válido porque snapshot.paramMap ES ParamMap (no Observable)
          const slug = snapshot.paramMap.get('categoria') as CategoriaSlug | null;

          if (slug && CATEGORIA_LABEL[slug]) {
            this.seo.setAll({
              title: `${CATEGORIA_LABEL[slug]} a medida | Los Cerezos Amoblamientos`,
              description: `${CATEGORIA_DESCRIPTION[slug]} Fabricación en Rosario.`,
              keywords: `${CATEGORIA_LABEL[slug].toLowerCase()}, muebles a medida, amoblamientos, Rosario, Santa Fe`,
              schema
            });
          } else {
            this.seo.setAll({
              title: 'Productos a medida | Los Cerezos Amoblamientos',
              description:
                'Muebles a medida en Rosario: cocinas, placards, baños, oficinas, locales comerciales y puertas.',
              keywords: 'muebles a medida, amoblamientos, Rosario',
              schema
            });
          }
          return;
        }

        // fallback
        this.seo.setAll({
          title: 'Los Cerezos Amoblamientos | Muebles a medida en Rosario',
          description:
            'Diseño y fabricación de muebles a medida en Rosario. Cocinas, placards, baños, oficinas y puertas.',
          keywords: 'muebles a medida, Rosario, amoblamientos',
          schema
        });
      });
  }

  // ✅ Devuelve ActivatedRouteSnapshot (no Observable)
  private getDeepestSnapshot(route: ActivatedRoute) {
    let snapshot = route.snapshot;
    while (snapshot.firstChild) snapshot = snapshot.firstChild;
    return snapshot;
  }
}
