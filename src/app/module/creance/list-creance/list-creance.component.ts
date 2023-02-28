import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Creance } from 'src/app/models/creance';
import { CreanceService } from 'src/app/services/creance.service';

@Component({
  selector: 'app-list-creance',
  templateUrl: './list-creance.component.html',
  styleUrls: ['./list-creance.component.css']
})
export class ListCreanceComponent implements OnInit {

  creancesList: Creance[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  constructor(private creanceService: CreanceService
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
    this.getCreancesList();
  }

  getCreancesList() {
    this.creanceService.getAllCreances().subscribe(
      (response: Creance[]) => {
        this.creancesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteCreance(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette commande ?')) {
      this.creanceService.deleteCreance(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getCreancesList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }

}
