import { SortColumn, SortDirection } from "../constant/sortColumn";

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
