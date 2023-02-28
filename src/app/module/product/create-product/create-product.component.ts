import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Subcategory } from 'src/app/models/subcategory';
import { ProductService } from 'src/app/services/product.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  subCategoriesListData: Subcategory[] = [];
  productData: Product = new Product(); 

  paramId :any = 0;

  constructor(private subCatService: SubcategoryService,
              private productService: ProductService,
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
        alert(error.message);
      }    
    );
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      (response: Product) => {
        this.productData = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddProduct() {
    this.productService.addProduct(this.productData).subscribe(
      (response: Product) => {
        /*
        this.toastr.success('avec succès','Category Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        */
        this.router.navigateByUrl("/product/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateProduct() {
    this.productService.updateProduct(this.productData.id, this.productData).subscribe(
      (response: Product) => {
        /*
        this.toastr.warning('avec succès','Category Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        */
        this.router.navigateByUrl("product/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("product/list")
  }


}
