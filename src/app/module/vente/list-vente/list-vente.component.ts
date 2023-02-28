import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Vente } from 'src/app/models/vente';
import { VenteService } from 'src/app/services/vente.service';

@Component({
  selector: 'app-list-vente',
  templateUrl: './list-vente.component.html',
  styleUrls: ['./list-vente.component.css']
})
export class ListVenteComponent implements OnInit {

  ventesList: Vente[] = [];
  
  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(private venteService: VenteService,
              private router: Router
    //          private toastr: ToastrService
  ){ }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType:'simple_numbers',
      processing: true,
      autoWidth: true,
      order: [[0, 'desc']]
    };
    this.getVentesList();
  }

  getVentesList() {
    this.venteService.getAllVentes().subscribe(
      (response: Vente[]) => {
        this.ventesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteProduct(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette vente ?')) {
      this.venteService.deleteVente(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getVentesList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  invoiceVente(item: Vente) {
    this.router.navigateByUrl('vente/invoice/' + item.id);
  }


}
