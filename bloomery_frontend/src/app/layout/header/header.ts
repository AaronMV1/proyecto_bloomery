

import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit, OnDestroy, ChangeDetectorRef  } from '@angular/core';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.html',
    styleUrls: ['./header.css'],
})


export class Header implements OnInit, OnDestroy {

    
    headerMini: boolean = true;


    ofertaVencimiento: Date = new Date('2026-05-29T23:05:00');


    horas: string = '00';
    minutos: string = '00';
    segundos: string = '00';


    intervalo: any;


    constructor(private zone: NgZone, private cd: ChangeDetectorRef) {}


    ngOnInit(): void {
        this.iniciarContador();
    }


    ngOnDestroy(): void {
        clearInterval(this.intervalo);
    }


    iniciarContador(): void {

        this.zone.runOutsideAngular(() => {
            
            this.intervalo = setInterval(() => {

                const ahora = new Date().getTime();
                const diferencia = this.ofertaVencimiento.getTime() - ahora;

                if (diferencia <= 0) {
                    this.zone.run(() => {
                        this.headerMini = false;
                    });
                    clearInterval(this.intervalo);
                    return;
                }

                const h = this.pad(Math.floor((diferencia / (1000 * 60 * 60)) % 24));
                const m = this.pad(Math.floor((diferencia / (1000 * 60)) % 60));
                const s = this.pad(Math.floor((diferencia / 1000) % 60));

                this.zone.run(() => {
                    this.horas = h;
                    this.minutos = m;
                    this.segundos = s;
                    this.cd.detectChanges();
                });

            }, 1000);
        });
    }

    pad(valor: number): string {
        return valor < 10 ? '0' + valor : valor.toString();
    }

}