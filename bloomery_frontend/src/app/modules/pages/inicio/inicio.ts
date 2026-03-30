

import { Banner } from '../../../models/banner';
import { Categoria } from '../../../models/categoria';
import { Categorias } from '../../../data/categorias';


import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { tablerCircleArrowUp, tablerMoon, tablerSun } from '@ng-icons/tabler-icons';


@Component({
    selector: 'app-inicio',
    imports: [CommonModule, NgIconsModule],
    viewProviders: [provideIcons({ tablerSun, tablerMoon, tablerCircleArrowUp })],
    templateUrl: './inicio.html',
    styleUrl: './inicio.css',
})


export class Inicio implements OnInit, OnDestroy {


    banners: Banner[] = Banner;
    categorias: Categoria[] = Categorias;


    precio: boolean = true;
    autoPlayInterval = 4000;
    isDarkMode = signal(false);

    private readonly darkModeStorageKey = 'bloomery-dark-mode';


    ngOnInit(): void {
        const savedDarkMode = localStorage.getItem(this.darkModeStorageKey) === 'true';
        this.isDarkMode.set(savedDarkMode);
        this.applyDarkMode(savedDarkMode);
        this.startAuto();
    }

    ngOnDestroy(): void {
        this.stopAuto();
    }


    // @ViewChild('productosContainer')
    // private productosContainer?: ElementRef<HTMLElement>;


    @ViewChild('categoriasContainer')
    private categoriasContainer?: ElementRef<HTMLElement>;


    //  #region      CATEGORIAS


    selectedCategoriaIndex = signal(0);
    selectedCategoria = computed(() => this.categorias[this.selectedCategoriaIndex()]);


    onCategoriaClick(index: number): void {

        this.selectedCategoriaIndex.set(index);

        // Scroll hacia productos
        this.categoriasContainer?.nativeElement.scrollIntoView({
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

    //  #region      WHATSAPP


    whatsappNumber = '51933216749';
    whatsappMessage = 'Hola! Estoy interesado(a) en el producto ';


    getWhatsAppUrl(productName: string): string {
        const message = encodeURIComponent(`${this.whatsappMessage}${productName}`);
        return `https://wa.me/${this.whatsappNumber}?text=${message}`;
    }


    //  #endregion

    //  #region      MODO NOCHE

    toggleDarkMode(): void {
        const nextMode = !this.isDarkMode();

        this.isDarkMode.set(nextMode);
        this.applyDarkMode(nextMode);
        localStorage.setItem(this.darkModeStorageKey, String(nextMode));
    }

    private applyDarkMode(enabled: boolean): void {
        document.body.classList.toggle('dark-mode', enabled);
    }

    //  #endregion

    //  #region      BOTÓN REGRESAR ARRIBA

    scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }


    //  #endregion

    //  #region      SIMULADOR


    plantasSimulador = this.categorias.flatMap(categoria =>
        categoria.productos.map(producto => ({
            name: producto.name,
            imageUrl: producto.imageUrl
        }))
    );

    macetasSimulador = [
        {
            name: 'Maceta Terracota',
            imageUrl: this.buildMacetaSvg('#ba6b35', '#d48753')
        },
        {
            name: 'Maceta Arena',
            imageUrl: this.buildMacetaSvg('#c59b74', '#dcb28b')
        },
        {
            name: 'Maceta Grafito',
            imageUrl: this.buildMacetaSvg('#52565c', '#737a82')
        },
        {
            name: 'Maceta Perla',
            imageUrl: this.buildMacetaSvg('#e7e3dc', '#f5f2ec')
        }
    ];


    selectedPlantaIndex = signal(0);
    selectedMacetaIndex = signal(0);

    selectedPlanta = computed(() => this.plantasSimulador[this.selectedPlantaIndex()]);
    selectedMaceta = computed(() => this.macetasSimulador[this.selectedMacetaIndex()]);


    onPlantaSelect(event: Event): void {
        const value = Number((event.target as HTMLSelectElement).value);
        this.selectedPlantaIndex.set(Number.isNaN(value) ? 0 : value);
    }

    onMacetaSelect(event: Event): void {
        const value = Number((event.target as HTMLSelectElement).value);
        this.selectedMacetaIndex.set(Number.isNaN(value) ? 0 : value);
    }

    private buildMacetaSvg(bodyColor: string, rimColor: string): string {
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200">
            <defs>
                <linearGradient id="body" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stop-color="${rimColor}"/>
                    <stop offset="100%" stop-color="${bodyColor}"/>
                </linearGradient>
            </defs>
            <ellipse cx="160" cy="35" rx="95" ry="16" fill="${rimColor}" />
            <path d="M75 40 L245 40 L220 170 Q160 198 100 170 Z" fill="url(#body)"/>
            <ellipse cx="160" cy="40" rx="85" ry="12" fill="#2f2b2b" opacity="0.35" />
            <ellipse cx="160" cy="170" rx="60" ry="10" fill="#000" opacity="0.12" />
        </svg>`;

        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }




    //  #endregion

}


