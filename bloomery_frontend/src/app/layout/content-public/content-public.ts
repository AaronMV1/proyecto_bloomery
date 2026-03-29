

import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-content-public',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './content-public.html',
  styleUrl: './content-public.css',
})


export class ContentPublic {

}

