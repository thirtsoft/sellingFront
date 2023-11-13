import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productsList: Product[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public productService: ProductService,
              private toastr: ToastrService,
              private router: Router
  ){ }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'simple_numbers',
    //  pageLength: 5,
      processing: true,
      autoWidth: true,
      order: [[0, 'desc']]
    };
    this.getProductsList();
  }

  getProductsList() {
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.productsList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onDeleteProduct(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cet article ?')) {
      this.productService.deleteProduct(id).subscribe(data => {
        this.toastr.error('avec succès','L\'article est supprimé', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("product/list").then(() => {
          window.location.reload();
        });
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
    }

  }

}
