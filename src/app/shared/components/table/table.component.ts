import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import {
  MatPaginator,
  PageEvent,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MaterialModule,
    FormsModule
  ],
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() hasTableSearch: boolean = true;
  @Output() sortChange = new EventEmitter<Sort>();
  @Output() pageChange = new EventEmitter<PageEvent>();

  dataSource: MatTableDataSource<any>;

  searchValue: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.updateDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.updateDataSource();
    }
  }

  updateDataSource(): void {
    this.dataSource.data = this.data;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSortChange(sortState: Sort): void {
    this.sortChange.emit(sortState);
  }

  onPageChange(event: PageEvent): void {
    this.pageChange.emit(event);
  }

  getNestedPropertyValue(obj: any, path: string): any {
    return path
      .split('.')
      .reduce((o, key) => (o && o[key] !== undefined ? o[key] : ''), obj);
  }
}
