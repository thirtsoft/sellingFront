import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Subcategory } from 'src/app/models/subcategory';
import { SubcategoryService } from '../../services/subcategory.service';

@Component({
  selector: 'app-list-sub-category',
  templateUrl: './list-sub-category.component.html',
  styleUrls: ['./list-sub-category.component.css']
})
export class ListSubCategoryComponent implements OnInit {

  subCategoriesList: Subcategory[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public subCatService: SubcategoryService,
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
    this.getSubCategoriesList();
  }

  getSubCategoriesList() {
    this.subCatService.getAllSubCategories().subscribe(
      (response: Subcategory[]) => {
        this.subCategoriesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onDeleteSubCategory(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette sous categorie ?')) {
      this.subCatService.deleteSubCategory(id).subscribe(data => {
        this.toastr.error('avec succès','La sous categorie est supprimée', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("subcategorie/list").then(() => {
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
