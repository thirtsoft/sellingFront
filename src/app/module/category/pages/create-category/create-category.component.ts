import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  formDataCategoryDTO: Category = new Category();

  data:any;
  paramId :any = 0;
  mySubscription: any;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService,
            //  public dialog: MatDialog,
              private actRoute: ActivatedRoute,
  ){
     //--for reload componant
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.mySubscription = this.router.events.subscribe((event) => {
       if (event instanceof NavigationEnd) {
         // Trick the Router into believing it's last link wasn't previously loaded
         this.router.navigated = false;
       }
     });
  }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getCategoryDTOById(this.paramId);
    }
  }

  getCategoryDTOById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(
      (response: Category) => {
        console.log('data--', response);
        this.formDataCategoryDTO = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  onAddCategory() {
    this.categoryService.addCategory(this.formDataCategoryDTO).subscribe(
      (response: Category) => {
        this.toastr.success('avec succès','Category Ajoutée', {
          timeOut: 3000,
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

  onUpdateCategory() {
    this.categoryService.updateCategory(this.formDataCategoryDTO.id, this.formDataCategoryDTO).subscribe(
      (response: Category) => {
        this.toastr.warning('avec succès','Category Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("categorie/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("categorie/list")
  }

}
