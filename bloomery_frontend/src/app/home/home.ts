

import { Component, OnInit, OnDestroy, signal } from '@angular/core';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})


export class Home implements OnInit, OnDestroy {


    autoPlayInterval = 5000;


    banners = [
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
            url: 'https://google.com'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
            url: 'https://youtube.com'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
            url: 'https://facebook.com'
        }
    ];





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