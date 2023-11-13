import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { Subcategory } from 'src/app/models/subcategory';
import { SubcategoryService } from 'src/app/module/subcategory/services/subcategory.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  subCategoriesListData: Subcategory[] = [];
  productData: Product = {};

  paramId :any = 0;

  constructor(private subCatService: SubcategoryService,
              private productService: ProductService,
              private toastr: ToastrService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getProductById(this.paramId);
    }
    this.getListOfSubCategories();
  }

  getListOfSubCategories() {
    this.subCatService.getAllSubCategories().subscribe(
      (data: any) => {
        this.subCategoriesListData = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }    
    );
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      (response: Product) => {
        this.productData = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  onAddProduct() {
    this.productService.addProduct(this.productData).subscribe(
      (response: Product) => {
        this.toastr.success('avec succès','L\'article est ajoutée', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("/product/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onUpdateProduct() {
    this.productService.updateProduct(this.productData.id!, this.productData).subscribe(
      (response: Product) => {
        this.toastr.warning('avec succès','L\'article est modifié', {
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

  goBack() {
    this.router.navigateByUrl("product/list")
  }


}
