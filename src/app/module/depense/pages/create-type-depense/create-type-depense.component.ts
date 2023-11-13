import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeDepense } from 'src/app/models/type-depense';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TypeDepenseService } from '../../services/type-depense.service';

@Component({
  selector: 'app-create-type-depense',
  templateUrl: './create-type-depense.component.html',
  styleUrls: ['./create-type-depense.component.css']
})
export class CreateTypeDepenseComponent implements OnInit {

  typeDepenseData: TypeDepense = new TypeDepense(); 

  paramId :any = 0;

  constructor(private typeDepenseService: TypeDepenseService,
              private toastr: ToastrService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getTypeDepenseById(this.paramId);
    }
  }

  getTypeDepenseById(id: number) {
    this.typeDepenseService.getTypeDepenseById(id).subscribe(
      (response: TypeDepense) => {
        this.typeDepenseData = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  onAddTypeDepense() {
    this.typeDepenseService.addTypeDepense(this.typeDepenseData).subscribe(
      (response: TypeDepense) => {
        this.toastr.success('avec succès','Le type de dépense est ajouté', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("/depense/type-depense/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onUpdateTypeDepense() {
    this.typeDepenseService.updateTypeDepense(this.typeDepenseData.id, this.typeDepenseData).subscribe(
      (response: TypeDepense) => {
        this.toastr.warning('avec succès','Le type de dépense est modifié', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("depense/type-depense/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("depense/type-depense/list")
  }



}
