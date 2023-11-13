import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from '../../services/depense.service';

@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit {

  depensesList: Depense[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public depenseService: DepenseService,
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
    this.getAllDepensesList();
  }

  getAllDepensesList() {
    this.depenseService.getAllDepenses().subscribe(
      (response: Depense[]) => {
        this.depensesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  onDeleteDepense(id: number): void{
    if (window.confirm('Etes-vous sure de vouloir supprimer cette dépense ?')) {
      this.depenseService.deleteDepense(id).subscribe(data => {
        this.toastr.error('avec succès','La dépense est supprimée', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("depense/list").then(() => {
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
