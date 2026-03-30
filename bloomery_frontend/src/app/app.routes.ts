

import { Routes } from '@angular/router';


import { ContentPublic } from './layout/content-public/content-public';
import { Inicio } from './modules/pages/inicio/inicio';


export const routes: Routes = [
    
    {
        path: '',
        component: ContentPublic,
        children: [
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            },
            {
                path: 'inicio',
                component: Inicio
            }
        ]
    },

    {
        path: '**',
        redirectTo: ''
    },

];