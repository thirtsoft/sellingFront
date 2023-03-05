import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Subcategory } from 'src/app/models/subcategory';
import { ProductService } from 'src/app/services/product.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  productData: Product = {};

  paramId :any = 0;

  constructor(private productService: ProductService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getProductById(this.paramId);
    }
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

  goBack() {
    this.router.navigateByUrl("product/list")
  }
  
}
