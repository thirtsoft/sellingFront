import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Approvisionnement } from 'src/app/models/approvisionnement';
import { ApprovisionnementService } from 'src/app/services/approvisionnement.service';

@Component({
  selector: 'app-list-approvisionnement',
  templateUrl: './list-approvisionnement.component.html',
  styleUrls: ['./list-approvisionnement.component.css']
})
export class ListApprovisionnementComponent implements OnInit {

  approvisionnementsList: Approvisionnement[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(private approService: ApprovisionnementService
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
    this.getApprovisionnementsList();
  }

  getApprovisionnementsList() {
    this.approService.getAllApprovisionnements().subscribe(
      (response: Approvisionnement[]) => {
        this.approvisionnementsList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteApprovisionnement(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette commande ?')) {
      this.approService.deleteApprovisionnement(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getApprovisionnementsList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }


}
