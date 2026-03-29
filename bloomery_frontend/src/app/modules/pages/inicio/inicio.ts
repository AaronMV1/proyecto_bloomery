
import { Banner } from '../../../models/banner';
import { Categoria } from '../../../models/categoria';
import { Categorias } from '../../../data/categorias';


import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';


@Component({
    selector: 'app-inicio',
    imports: [CommonModule],
    templateUrl: './inicio.html',
    styleUrl: './inicio.css',
})


export class Inicio implements OnInit, OnDestroy {


    banners: Banner[] = Banner;
    categorias: Categoria[] = Categorias;


    precio: boolean = true;
    autoPlayInterval = 4000;


    @ViewChild('productosContainer')
    private productosContainer?: ElementRef<HTMLElement>;



    ngOnInit(): void {
        this.startAuto();
    }

    ngOnDestroy(): void {
        this.stopAuto();
    }


    //  #region      CATEGORIAS         


    selectedCategoriaIndex = signal(0);
    selectedCategoria = computed(() => this.categorias[this.selectedCategoriaIndex()]);


    onCategoriaClick(index: number): void {

        this.selectedCategoriaIndex.set(index);

        // Scroll hacia productos
        this.productosContainer?.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }


    //  #endregion


    //  #region      BANNER             


    currentIndex = signal(0);
    private intervalId: ReturnType<typeof setInterval> | null = null;


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


    // #endregion


}
