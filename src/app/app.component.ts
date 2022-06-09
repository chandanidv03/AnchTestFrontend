import { Component } from '@angular/core';
import { AppService } from './app-service';
import { UserData } from './modals/userData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: Array<UserData> = [];
  totalUser: number = 0;
  totalAdmin: number = 0;
  totalSelfUsers: number = 0;
  nameFilter: string = '';
  filterString: string = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAllUsers().subscribe((data: any) => {
      this.totalUser = data.length;
      this.totalAdmin = data.filter(
        (user: UserData) => user.role === 'Admin'
      ).length;
      this.totalSelfUsers = data.filter(
        (user: UserData) => user.role.toLowerCase() === 'self user'
      ).length;
      this.users = data;
    });
  }
  onChangeNameFilter(filterString: string) {
    this.filterString = filterString;
  }
}
