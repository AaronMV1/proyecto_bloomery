import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  banners = [
    {
      imageUrl: 'https://ethic.es/wp-content/uploads/2023/03/imagen-640x384.jpg',
      url: 'https://ethic.es/wp-content/uploads/2023/03/imagen-640x384.jpg'
    },
    {
      imageUrl: 'https://ethic.es/wp-content/uploads/2023/03/imagen-640x384.jpg',
      url: 'https://ethic.es/wp-content/uploads/2023/03/imagen-640x384.jpg'
    },
    {
      imageUrl: 'https://ethic.es/wp-content/uploads/2023/03/imagen-640x384.jpg',
      url: 'https://ethic.es/wp-content/uploads/2023/03/imagen-640x384.jpg'
    }
  ];

  currentIndex = 0;

  // Tiempo configurable en milisegundos (por defecto 3 segundos)
  bannerInterval: number = 3000;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    }, this.bannerInterval);
  }

  get currentImage() {
    return this.banners[this.currentIndex].imageUrl;
  }

  get currentUrl() {
    return this.banners[this.currentIndex].url;
  }
}
