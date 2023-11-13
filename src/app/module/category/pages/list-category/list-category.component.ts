import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categoriesList: Category[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(private categoryService: CategoryService,
              private toastr: ToastrService,
              private router: Router
             
  ){
   
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'simple_numbers',
    //  pageLength: 5,
      processing: true,
      autoWidth: true,
      order: [[0, 'desc']]
    };
    this.getCategoriesList();
  }

  getCategoriesList() {
    this.categoryService.getAllCategories().subscribe(
      response => {
        this.categoriesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onDeleteCategory(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette Categorie ?')) {
      this.categoryService.deleteCategory(id).subscribe(data => {
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("/categorie/list").then(() => {
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
