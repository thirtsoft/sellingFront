import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { LigneCommande } from 'src/app/models/ligne-commande';
import { LigneCommandeService } from 'src/app/services/ligne-commande.service';

@Component({
  selector: 'app-list-ligne-commande',
  templateUrl: './list-ligne-commande.component.html',
  styleUrls: ['./list-ligne-commande.component.css']
})
export class ListLigneCommandeComponent implements OnInit {

  ligneCommandesList: LigneCommande[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(public ligneCommandeService: LigneCommandeService
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
    this.getLigneCommandesList();
  }

  getLigneCommandesList() {
    this.ligneCommandeService.getAllLigneCommandes().subscribe(
      (response: LigneCommande[]) => {
        this.ligneCommandesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteProduct(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette commande ?')) {
      this.ligneCommandeService.deleteLigneCommande(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getLigneCommandesList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }


}
