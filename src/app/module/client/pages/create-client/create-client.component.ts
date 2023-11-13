import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  clientData: Client = new Client(); 

  paramId :any = 0;

  constructor(private clientService: ClientService,
              private toastr: ToastrService,
              private actRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.paramId = this.actRoute.snapshot.paramMap.get('id');
    if(this.paramId  && this.paramId  > 0){
      this.getClientById(this.paramId);
    }
  }

  getClientById(id: number) {
    this.clientService.getClientById(id).subscribe(
      (response: Client) => {
        this.clientData = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  onAddClient() {
    this.clientService.addClient(this.clientData).subscribe(
      (response: Client) => {
        this.toastr.success('avec succès','Le client est ajouté', {
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

  onUpdateClient() {
    this.clientService.updateClient(this.clientData.id, this.clientData).subscribe(
      (response: Client) => {
        this.toastr.warning('avec succès','Le client est modifié', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("client/list").then(() => {
          window.location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  goBack() {
    this.router.navigateByUrl("client/list")
  }


}
