import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LigneVente } from 'src/app/models/ligne-vente';
import { LigneVenteService } from '../../services/ligne-vente.service';

@Component({
  selector: 'app-list-ligne-vente',
  templateUrl: './list-ligne-vente.component.html',
  styleUrls: ['./list-ligne-vente.component.css']
})
export class ListLigneVenteComponent implements OnInit {

  ligneVentesList: LigneVente[] = [];
  
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(public ligneVenteService: LigneVenteService
    //          private toastr: ToastrService
  ){ }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'simple_numbers',
      processing: true,
      autoWidth: true,
      order: [[0, 'desc']]
    };
    this.getVentesItemsList();
  }

  getVentesItemsList() {
    this.ligneVenteService.getAllLigneVentes().subscribe(
      (response: LigneVente[]) => {
        this.ligneVentesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteLigneVente(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette vente ?')) {
      this.ligneVenteService.deleteLigneVente(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getVentesItemsList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

}
