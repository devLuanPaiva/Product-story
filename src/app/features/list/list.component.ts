import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { CardComponent } from '../../components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogService } from '../../services/confirmation-dialog.service';
import { filter } from 'rxjs';
import { NoItemsComponent } from './components/no-items/no-items.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule, NoItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
<<<<<<< HEAD
  products: Product[] = [];
=======
  products = signal<Product[]>(
    inject(ActivatedRoute).snapshot.data['products']
  );
>>>>>>> 8327a43 (feat: cria componente para ser exibido quando não há produtos)
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
<<<<<<< HEAD
    .openDialog()
    .pipe(filter((answer) => answer === true))
    .subscribe(() => {
      this.productsService.delete(product.id).subscribe(() => {
        this.productsService.getAll().subscribe((products) => {
          this.products = products;
=======
      .openDialog()
      .pipe(filter((answer) => answer === true))
      .subscribe(() => {
        this.productsService.delete(product.id).subscribe(() => {
          this.productsService.getAll().subscribe((products) => {
            this.products.set(products);
          });
>>>>>>> 8327a43 (feat: cria componente para ser exibido quando não há produtos)
        });
      });
  }
}
