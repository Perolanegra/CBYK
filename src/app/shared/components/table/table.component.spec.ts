import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { SimpleChange } from '@angular/core';
import { Sort, SortDirection } from '@angular/material/sort';
import { fakeAsync, tick } from '@angular/core/testing';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const mockData = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 35 },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        FormsModule,
        TableComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    component.columns = ['id', 'name', 'age'];
    component.displayedColumns = ['ID', 'Name', 'Age'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct data', () => {
    expect(component.dataSource.data).toEqual(mockData);
  });

  it('should update data source when data input changes', fakeAsync(() => {
    const newData = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Bob Johnson', age: 35 }
    ];

    component.ngOnChanges({
      data: new SimpleChange(null, newData, false)
    });

    tick(); // Allow for any asynchronous operations to complete

    expect(component.dataSource.data).toEqual(newData);
  }));

  it('should apply filter correctly', () => {
    const testData = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Bob Johnson', age: 35 },
    ];

    component.data = testData;
    component.ngOnChanges({
      data: new SimpleChange(null, testData, true)
    });

    // Apply the filter
    component.applyFilter({ target: { value: 'John' } } as unknown as Event);

    // Force change detection
    fixture.detectChanges();

    // Check if only one item is returned after filtering
    expect(component.dataSource.filteredData.length).toBe(2);

    // Check if the filtered item is correct
    expect(component.dataSource.filteredData[0].name).toBe('John Doe');
  });

  it('should emit sort change event', () => {
    const sortState: Sort = { active: 'name', direction: 'asc' as SortDirection };

    // Spy on the emit function
    jest.spyOn(component.sortChange, 'emit');

    component.onSortChange(sortState);
    expect(component.sortChange.emit).toHaveBeenCalledWith(sortState);
  });

  it('should emit page change event', () => {
    jest.spyOn(component.pageChange, 'emit');
    const pageEvent = { pageIndex: 1, pageSize: 10, length: 100 };
    component.onPageChange(pageEvent);
    expect(component.pageChange.emit).toHaveBeenCalledWith(pageEvent);
  });

  it('should get nested property value correctly', () => {
    const obj = { user: { name: { first: 'John', last: 'Doe' } } };
    expect(component.getNestedPropertyValue(obj, 'user.name.first')).toBe('John');
    expect(component.getNestedPropertyValue(obj, 'user.age')).toBe('');
  });

  it('should update data source and reset paginator on updateDataSource', () => {
    const newData = [{ id: 5, name: 'Eve Wilson', age: 40 }];
    component.data = newData;
    component.updateDataSource();
    expect(component.dataSource.data).toEqual(newData);
  });

  it('should set sort and paginator after view init', () => {
    component.ngAfterViewInit();
    expect(component.dataSource.sort).toBe(component.sort);
    expect(component.dataSource.paginator).toBe(component.paginator);
  });

  it('should have correct initial values', () => {
    expect(component.hasTableSearch).toBe(true);
    expect(component.searchValue).toBe('');
  });

  it('should reset to first page when applying filter', () => {
    const paginatorSpy = jest.spyOn(component.dataSource.paginator!, 'firstPage');
    const event = { target: { value: 'test' } } as unknown as Event;
    component.applyFilter(event);
    expect(paginatorSpy).toHaveBeenCalled();
  });
});
