import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseursList: Fournisseur[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public fournisseurService: FournisseurService,
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
    this.getAllFournisseursList();
  }

  getAllFournisseursList() {
    this.fournisseurService.getAllFournisseurs().subscribe(
      (response: Fournisseur[]) => {
        this.fournisseursList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onDeleteFournisseur(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce Fournisseur ?')) {
      this.fournisseurService.deleteFournisseur(id).subscribe(data => {
        this.toastr.error('avec succès','Le fournisseur est supprimé', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("fournisseur/list").then(() => {
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
