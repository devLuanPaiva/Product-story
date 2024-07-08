import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { CardComponent } from '../../components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogService } from '../../services/confirmation-dialog.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: Product[] = [];
  productsService = inject(ProductsService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }
  onDelete(product: Product) {
    this.confirmationDialogService
    .openDialog()
    .pipe(filter((answer) => answer === true))
    .subscribe(() => {
      this.productsService.delete(product.id).subscribe(() => {
        this.productsService.getAll().subscribe((products) => {
          this.products = products;
        });
      });
    });
  }
}
