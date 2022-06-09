import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app-service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filterUserData: EventEmitter<any> = new EventEmitter();
  roles: Array<string> = [];
  jobTitles: Array<string> = [];
  organizationUnits: Array<string> = [];
  queryStringObj = {
    role: '',
    jobTitle: '',
    orgUnit: '',
    nameOrEmailFilter: ''
  };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getRoles().subscribe((data: any) => {
      this.roles = data;
    });
    this.appService.getJobTitles().subscribe((data: any) => {
      this.jobTitles = data;
    });
    this.appService.getOrganizationUnits().subscribe((data: any) => {
      this.organizationUnits = data;
    });
  }

  onChangeNameFilter(event: any) {
    let queryString = '';
    console.log(this.queryStringObj);
    if (this.queryStringObj.role)
      queryString = `${queryString}Role=${this.queryStringObj.role}&`;
    if (this.queryStringObj.jobTitle)
      queryString = `${queryString}jobTitle=${this.queryStringObj.jobTitle}&`;
    if (this.queryStringObj.orgUnit)
      queryString = `${queryString}organisationUnit=${this.queryStringObj.orgUnit}&`;
    if (this.queryStringObj.nameOrEmailFilter)
      queryString = `${queryString}filterText=${this.queryStringObj.nameOrEmailFilter}`;

    this.filterUserData.emit(queryString)
  }

}
