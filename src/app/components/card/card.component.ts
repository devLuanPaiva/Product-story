import { Component, computed, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>()

  productTitle = computed(() => this.product().title)
}
