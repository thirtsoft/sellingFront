import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LigneApprovisionnement } from 'src/app/models/ligne-approvisionnement';
import { LigneApprovisionnementService } from 'src/app/services/ligne-approvisionnement.service';

@Component({
  selector: 'app-list-ligne-approvisionnement',
  templateUrl: './list-ligne-approvisionnement.component.html',
  styleUrls: ['./list-ligne-approvisionnement.component.css']
})
export class ListLigneApprovisionnementComponent implements OnInit {

  ligneApprovisionnementsList: LigneApprovisionnement[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(private ligneApproService: LigneApprovisionnementService
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
    this.getLigneApprovisionnementsList();
  }

  getLigneApprovisionnementsList() {
    this.ligneApproService.getAllLigneApprovisionnements().subscribe(
      (response: LigneApprovisionnement[]) => {
        this.ligneApprovisionnementsList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteLigneApprovisionnement(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette commande ?')) {
      this.ligneApproService.deleteLigneApprovisionnement(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getLigneApprovisionnementsList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }


}
