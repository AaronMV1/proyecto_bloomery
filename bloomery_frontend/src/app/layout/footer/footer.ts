

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { NgIcon, NgIconsModule, provideIcons } from '@ng-icons/core';
import { tablerAccessible, tablerBrandFacebook, tablerBrandInstagram, tablerBrandTiktok, tablerBrandTwitter, tablerBrandWhatsapp } from '@ng-icons/tabler-icons';


@Component({
    standalone: true,
    selector: 'app-footer',
    imports: [CommonModule, NgIconsModule],
    viewProviders: [provideIcons({ tablerBrandFacebook, tablerBrandInstagram, tablerBrandTiktok, tablerBrandTwitter, tablerBrandWhatsapp })],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})


export class Footer {

    anno: number = new Date().getFullYear();

}

