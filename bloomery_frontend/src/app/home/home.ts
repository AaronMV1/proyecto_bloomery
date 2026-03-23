import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy {

  // ─── Configuración del banner ───────────────────────────────────────────────

  /** Tiempo en millisegundos que permanece cada slide antes de avanzar */
  autoPlayInterval = 4000;

  /** Cada objeto tiene la URL de la imagen y la URL a donde redirige al hacer clic */
  banners = [
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
      url: 'https://google.com'
    },
    {
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/701/690/non_2x/abstract-polygonal-banner-background-vector.jpg',
      url: 'https://youtube.com'
    },
    {
      imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20241213/pngtree-blue-and-white-business-banner-background-vector-image_16792366.jpg',
      url: 'https://facebook.com'
    }
  ];

  // ─── Estado interno ──────────────────────────────────────────────────────────

  currentIndex = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startAuto();
  }

  ngOnDestroy(): void {
    this.stopAuto();
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.banners.length);
    this.resetAuto();
  }

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.banners.length) % this.banners.length);
    this.resetAuto();
  }

  private startAuto(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.banners.length);
    }, this.autoPlayInterval);
  }

  private stopAuto(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private resetAuto(): void {
    this.stopAuto();
    this.startAuto();
  }
}