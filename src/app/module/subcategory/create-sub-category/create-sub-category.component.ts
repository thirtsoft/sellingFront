import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {

  categoriesListData: Category[] = [];
  subCategoryData: Subcategory = new Subcategory(); 

  paramId :any = 0;

  constructor(private catService: CategoryService,
              private subCatService: SubcategoryService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getSubCategoryById(this.paramId);
    }
    this.getListOfCategories();
  }

  getListOfCategories() {
    this.catService.getAllCategories().subscribe(
      (data: any) => {
        this.categoriesListData = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }    
    );
  }

  getSubCategoryById(id: number) {
    this.subCatService.getSubCategoryById(id).subscribe(
      (response: Subcategory) => {
        this.subCategoryData = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddSubCategory() {
    this.subCatService.addSubCategory(this.subCategoryData).subscribe(
      (response: Subcategory) => {
        /*
        this.toastr.success('avec succès','Category Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        */
        this.router.navigateByUrl("/subcategorie/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateSubCategory() {
    this.subCatService.updateSubCategory(this.subCategoryData.id, this.subCategoryData).subscribe(
      (response: Subcategory) => {
        /*
        this.toastr.warning('avec succès','Category Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        */
        this.router.navigateByUrl("subcategorie/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("subcategorie/list")
  }



}
