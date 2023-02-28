import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LigneCreance } from 'src/app/models/ligne-creance';
import { LigneCreanceService } from 'src/app/services/ligne-creance.service';

@Component({
  selector: 'app-list-ligne-creance',
  templateUrl: './list-ligne-creance.component.html',
  styleUrls: ['./list-ligne-creance.component.css']
})
export class ListLigneCreanceComponent implements OnInit {

  ligneCreancesList: LigneCreance[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(private ligneCreanceService: LigneCreanceService
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
    this.getLigneCreancesList();
  }

  getLigneCreancesList() {
    this.ligneCreanceService.getAllLigneCreances().subscribe(
      (response: LigneCreance[]) => {
        this.ligneCreancesList = response;
        console.log(this.ligneCreancesList);
        
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteLigneCreance(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette commande ?')) {
      this.ligneCreanceService.deleteLigneCreance(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getLigneCreancesList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }



}
