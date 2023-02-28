import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {

  employeesList: Employe[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor(public employeService: EmployeService
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
    this.getAllEmployeesList();
  }

  getAllEmployeesList() {
    this.employeService.getAllEmployes().subscribe(
      (response: Employe[]) => {
        this.employeesList = response;
        this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
