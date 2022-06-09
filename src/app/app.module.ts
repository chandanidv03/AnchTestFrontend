import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app-service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortableHeaderDirective } from './directives/sortable-header.directive';
import { UserTableComponent } from './user-table/user-table.component';
@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    SortableHeaderDirective,
    UserTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
