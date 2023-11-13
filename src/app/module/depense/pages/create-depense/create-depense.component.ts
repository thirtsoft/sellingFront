import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Depense } from 'src/app/models/depense';
import { TypeDepense } from 'src/app/models/type-depense';
import { TypeDepenseService } from '../../services/type-depense.service';
import { DepenseService } from '../../services/depense.service';


@Component({
  selector: 'app-create-depense',
  templateUrl: './create-depense.component.html',
  styleUrls: ['./create-depense.component.css']
})
export class CreateDepenseComponent implements OnInit {

  typeDepensesListData: TypeDepense[] = [];
  depenseData: Depense = new Depense(); 

  paramId :any = 0;

  constructor(private typeDepenseService: TypeDepenseService,
              private depenseService: DepenseService,
              private toastr: ToastrService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getDepenseById(this.paramId);
    }
    this.getListOfTypeDepenses();
  }

  getDepenseById(id: number) {
    this.depenseService.getDepenseById(id).subscribe(
      (response: Depense) => {
        this.depenseData = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  getListOfTypeDepenses() {
    this.typeDepenseService.getAllTypeDepenses().subscribe(
      (data: any) => {
        this.typeDepensesListData = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }    
    );
  }


  onAddDepense() {
    this.depenseService.addDepense(this.depenseData).subscribe(
      (response: Depense) => {
        this.toastr.success('avec succès','La dépense est ajoutée', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("/depense/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onUpdateDepense() {
    this.depenseService.updateDepense(this.depenseData.id, this.depenseData).subscribe(
      (response: Depense) => {
        this.toastr.warning('avec succès','La dépense est modifiée', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("depense/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("depense/list")
  }



}
