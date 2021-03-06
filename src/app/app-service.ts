import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  // Get all roles
  getRoles() {
    return this.http.get(`${environment.apiBaseURL}/Users/roles`);
  }

  // Get all Jobtitles
  getJobTitles() {
    return this.http.get(`${environment.apiBaseURL}/Users/jobtitles`);
  }

  // Get all OrganizationUnits
  getOrganizationUnits() {
    return this.http.get(`${environment.apiBaseURL}/Users/organisationunits`);
  }

  // Get all Users
  getAllUsers() {
    return this.http.get(`${environment.apiBaseURL}/Users`);
  }

  // Get all users based on filter input
  getFilterData(filterString?: string) {
    return this.http.get(`${environment.apiBaseURL}/users/filterUsers?${filterString}`);
  }
}
