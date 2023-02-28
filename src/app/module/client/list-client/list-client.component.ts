import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clientsList: Client[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public clientService: ClientService
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
    this.getAllClientsList();
  }

  getAllClientsList() {
    this.clientService.getAllClients().subscribe(
      (response: Client[]) => {
        this.clientsList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onDeleteClient(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce Client ?')) {
      this.clientService.deleteClient(id).subscribe(data => {
        /*
        this.toastr.error('avec succès','Categorie supprimée', {
          timeOut: 1500,
          positionClass: 'toast-top-right',
        });*/
        this.getAllClientsList();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  }

}
