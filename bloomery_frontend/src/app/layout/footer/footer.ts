

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


import { NgIcon, NgIconsModule } from '@ng-icons/core';
import { tablerAccessible } from '@ng-icons/tabler-icons';


@Component({
    standalone: true,
    selector: 'app-footer',
    // imports: [CommonModule, NgIconsModule],
    templateUrl: './footer.html',
    styleUrl: './footer.css',
})


export class Footer {

    anno: number = new Date().getFullYear();

}

