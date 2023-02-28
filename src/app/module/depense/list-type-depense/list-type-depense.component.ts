import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { TypeDepense } from 'src/app/models/type-depense';
import { TypeDepenseService } from 'src/app/services/type-depense.service';


@Component({
  selector: 'app-list-type-depense',
  templateUrl: './list-type-depense.component.html',
  styleUrls: ['./list-type-depense.component.css']
})
export class ListTypeDepenseComponent implements OnInit {

  typeDepensesList: TypeDepense[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public typeDepenseService: TypeDepenseService
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
    this.getAllTypeDepensesList();
  }

  getAllTypeDepensesList() {
    this.typeDepenseService.getAllTypeDepenses().subscribe(
      (response: TypeDepense[]) => {
        this.typeDepensesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteTypeDepense(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce Client ?')) {
      this.typeDepenseService.deleteTypeDepense(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getAllTypeDepensesList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }

}
