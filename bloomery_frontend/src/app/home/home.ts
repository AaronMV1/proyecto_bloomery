import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy {

  banners = [
    {
      imageUrl: 'https://fastly.picsum.photos/id/575/800/300.jpg?hmac=2IIWYe2mglnPKHLg-vswlhaELUJCxABhbGUWqM0wzRU',
      url: 'https://google.com'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/100/800/300.jpg?hmac=K7M342X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6',
      url: 'https://youtube.com'
    },
    {
      imageUrl: 'https://fastly.picsum.photos/id/100/800/300.jpg?hmac=K7M342X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6',
      url: 'https://facebook.com'
    }
  ];

  currentIndex = 0;
  bannerInterval = 3000;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextBanner();
    }, this.bannerInterval);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextBanner() {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }
}