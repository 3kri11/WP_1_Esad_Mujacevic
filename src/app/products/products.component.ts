import { Component } from '@angular/core';
import { AppCardComponent} from '../app-card/app-card.component';
import { NgFor } from '@angular/common';
import {listaNovosti} from '../data/Lists'
@Component({
  selector: 'app-products',
  imports: [AppCardComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  listaNovosti = listaNovosti;
}
