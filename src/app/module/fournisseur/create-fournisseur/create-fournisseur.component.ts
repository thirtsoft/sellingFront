import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.css']
})
export class CreateFournisseurComponent implements OnInit {

  fournisseurData: Fournisseur = new Fournisseur(); 

  paramId :any = 0;

  constructor(private fournisseurService: FournisseurService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getFournisseur(this.paramId);
    }
  }

  getFournisseur(id: number) {
    this.fournisseurService.getFournisseurById(id).subscribe(
      (response: Fournisseur) => {
        this.fournisseurData = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  onAddFournisseur() {
    this.fournisseurService.addFournisseur(this.fournisseurData).subscribe(
      (response: Fournisseur) => {
        /*
        this.toastr.success('avec succès','Category Ajoutée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        */
        this.router.navigateByUrl("/fournisseur/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onUpdateFournisseur() {
    this.fournisseurService.updateFournisseur(this.fournisseurData.id, this.fournisseurData).subscribe(
      (response: Fournisseur) => {
        /*
        this.toastr.warning('avec succès','Category Modifiée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });
        */
        this.router.navigateByUrl("fournisseur/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("fournisseur/list")
  }


}
