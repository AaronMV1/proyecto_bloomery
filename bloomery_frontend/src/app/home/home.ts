

import { Component, ElementRef, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';


interface InteriorItem {
    name: string;
    imageUrl: string;
    price: string;
}


interface Categoria {
    name: string;
    imageUrl: string;
    interiores: InteriorItem[];
}


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})


export class Home implements OnInit, OnDestroy {


    autoPlayInterval = 2000;


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


    categorias: Categoria[] = [
        {
            name: 'Plantas de Interiores',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
            interiores: [
                {
                    name: 'Monstera Deliciosa',
                    imageUrl: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=1200&auto=format&fit=crop&q=80',
                    price: '$24.99'
                },
                {
                    name: 'Sansevieria',
                    imageUrl: 'https://images.unsplash.com/photo-1593482892290-f54927ae9f3d?w=1200&auto=format&fit=crop&q=80',
                    price: '$18.50'
                },
                {
                    name: 'Pothos N-Joy',
                    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5b14?w=1200&auto=format&fit=crop&q=80',
                    price: '$14.00'
                }
            ]
        },
        {
            name: 'Plantas de Exteriores',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
            interiores: [
                {
                    name: 'Bugambilia',
                    imageUrl: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=1200&auto=format&fit=crop&q=80',
                    price: '$21.00'
                },
                {
                    name: 'Hibisco',
                    imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&auto=format&fit=crop&q=80',
                    price: '$16.90'
                },
                {
                    name: 'Lavanda',
                    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&auto=format&fit=crop&q=80',
                    price: '$13.50'
                }
            ]
        },
        {
            name: 'Decoración y Macetas',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
            interiores: [
                {
                    name: 'Maceta de barro',
                    imageUrl: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&auto=format&fit=crop&q=80',
                    price: '$9.90'
                },
                {
                    name: 'Maceta blanca minimal',
                    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&auto=format&fit=crop&q=80',
                    price: '$12.80'
                },
                {
                    name: 'Soporte de madera',
                    imageUrl: 'https://images.unsplash.com/photo-1470165518248-ff4c3f2d7f18?w=1200&auto=format&fit=crop&q=80',
                    price: '$19.00'
                }
            ]
        },
        {
            name: 'Arreglos Funebres',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H6hOmnz3I9pKF7YtneBZjhsZ6UnT98Icmg&s',
            interiores: [
                {
                    name: 'Corona Floral Clásica',
                    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&auto=format&fit=crop&q=80',
                    price: '$75.00'
                },
                {
                    name: 'Arreglo Lirios Blancos',
                    imageUrl: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=1200&auto=format&fit=crop&q=80',
                    price: '$49.00'
                },
                {
                    name: 'Centro de Mesa Sobrio',
                    imageUrl: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&auto=format&fit=crop&q=80',
                    price: '$39.00'
                }
            ]
        }
    ];


    currentIndex = signal(0);

    selectedCategoriaIndex = signal(0);

    selectedCategoria = computed(() => this.categorias[this.selectedCategoriaIndex()]);

    @ViewChild('interioresContainer')
    private interioresContainer?: ElementRef<HTMLElement>;


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

    onCategoriaClick(index: number): void {
        this.selectedCategoriaIndex.set(index);
        this.interioresContainer?.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
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