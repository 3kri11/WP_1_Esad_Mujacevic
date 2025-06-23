import { Component,Input,input } from '@angular/core';

@Component({
  selector: 'app-app-card',
  imports: [],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.css'
})
export class AppCardComponent {
  @Input() naslovNovosti!: string;
  @Input() urlNovosti!: string;
  @Input() textNovosti!: string;
  @Input() brojNovosti!: number;
}
