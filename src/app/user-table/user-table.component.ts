import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AppService } from '../app-service';
import { SortableHeaderDirective } from '../directives/sortable-header.directive';
import { SortEvent } from '../modals/sortHeader';
import { UserData } from '../modals/userData';

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;

  users: Array<UserData> = [];
  allUserData: Array<UserData> = [];

  private _filterParams: string = '';
  @Input() set filterParams(value: string) {
    this._filterParams = value;
    this.getUserData(value);
  }
  get filterParams(): string {
    return this._filterParams;
  }

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting uersdata
    if (direction === '' || column === '') {
      this.users = this.allUserData;
    } else {
      this.users = [...this.allUserData].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  getUserData(value?: string) {
    this.appService.getFilterData(value).subscribe((data: any) => {
      this.users = data;
      this.allUserData = data;
    });
  }
}

