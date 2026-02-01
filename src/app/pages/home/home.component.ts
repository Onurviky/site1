import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type HeroSlide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

  type ProductoDestacado = {
  img: string;
  nombre: string;
  link: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
      heroSlides: HeroSlide[] = [
    {
      src: '/HomeBarra.jpg',
      alt: 'Muebles a medida',
      title: 'Diseño y calidad para tu hogar',
      subtitle: 'Muebles 100% personalizados',
    },
    {
      src: '/CocinaHome.jpg',
      alt: 'Cocinas a medida',
      title: 'Cocinas a medida',
      subtitle: 'Funcionales, modernas y duraderas',
    },
    {
      src: '/PLACARD CON ESCRITORIO.jpg',
      alt: 'Placards a medida',
      title: 'Placards que aprovechan cada espacio',
      subtitle: 'Diseño, orden y terminaciones premium',
    },
  ];
    activeIndex = 0;
  isAnimating = false;
  private intervalId: any = null;
  private readonly intervalMs = 7500;

    productosDestacados: ProductoDestacado[] = [
    { img: '/COCINA MADERA 3.jpg', nombre: 'Cocinas', link: '/productos/cocinas' },
    { img: '/PlacardHome.jpg', nombre: 'Placards', link: '/productos/placards' },
    { img: '/MUEBLE LIVING MELAMINA COMBINADA.jpeg', nombre: 'Living / TV', link: '/productos/living' },
  ];

ngOnInit(): void {
    this.startAuto();
  }

  ngOnDestroy(): void {
    this.stopAuto();
  }

  next(): void {
    this.animateChange(() => {
      this.activeIndex = (this.activeIndex + 1) % this.heroSlides.length;
    });
  }

  prev(): void {
    this.animateChange(() => {
      this.activeIndex =
        (this.activeIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
    });
  }

  goTo(i: number): void {
    if (i === this.activeIndex) return;
    this.animateChange(() => {
      this.activeIndex = i;
    });
  }

  pause(): void {
    this.stopAuto();
  }

  resume(): void {
    this.startAuto();
  }

  private startAuto(): void {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => this.next(), this.intervalMs);
  }

  private stopAuto(): void {
    if (!this.intervalId) return;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  private animateChange(changeFn: () => void): void {
    // dispara clase CSS de animación
    this.isAnimating = true;

    // pequeña espera para que se vea el fade
    setTimeout(() => {
      changeFn();
      // apaga animación después de que el CSS termine
      setTimeout(() => (this.isAnimating = false), 450);
    }, 120);
  }
}
