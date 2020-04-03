import { Component, OnInit } from '@angular/core';

import { DynamicTableService } from '../../services/dynamic-table.service'; // to use the service we need to import DynamicTableService class//
import { TableData } from 'src/app/models/dynamic-table.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  tableData: any; // storing the data in this variable

  constructor(private service: DynamicTableService) { } // dependency injection

  ngOnInit() {
    this.getTableData(); // calling the getTableData() after the constructor when the ngOnInit() is envoked 
  }

  getTableData() {
    this.service.getTableDatas().subscribe((res) => {
      this.tableData = res as TableData[]; //response comes as data schema defined in model interface
    })
  }

}
