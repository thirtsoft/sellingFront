import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';
import { CategoryService } from 'src/app/module/category/services/category.service';
import { SubcategoryService } from '../../services/subcategory.service';

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
              private toastr: ToastrService,
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
        console.log(error.message);
      }    
    );
  }

  getSubCategoryById(id: number) {
    this.subCatService.getSubCategoryById(id).subscribe(
      (response: Subcategory) => {
        this.subCategoryData = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  onAddSubCategory() {
    this.subCatService.addSubCategory(this.subCategoryData).subscribe(
      (response: Subcategory) => {
        this.toastr.success('avec succès','La sous categorie est ajoutée', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        
        this.router.navigateByUrl("/subcategorie/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onUpdateSubCategory() {
    this.subCatService.updateSubCategory(this.subCategoryData.id, this.subCategoryData).subscribe(
      (response: Subcategory) => {
        this.toastr.warning('avec succès','La sous categorie est modifiée', {
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

  goBack() {
    this.router.navigateByUrl("subcategorie/list")
  }

}
