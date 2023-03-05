import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {

  stocksList: Product[] = [];
  val = 25;

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(private productService: ProductService
    //          private toastr: ToastrService
  ){ }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'simple_numbers',
    //  pageLength: 5,
      processing: true,
      autoWidth: true,
      order: [[0, 'desc']]
    };
    this.getStocksList();
  }

  getStocksList() {
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.stocksList = response;
        console.log(this.stocksList);
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
