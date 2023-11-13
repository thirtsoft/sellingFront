import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clientsList: Client[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public clientService: ClientService,
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
    this.getAllClientsList();
  }

  getAllClientsList() {
    this.clientService.getAllClients().subscribe(
      (response: Client[]) => {
        this.clientsList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onDeleteClient(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer ce Client ?')) {
      this.clientService.deleteClient(id).subscribe(data => {
        this.toastr.error('avec succès','Le client est supprimé', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("/client/list").then(() => {
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
