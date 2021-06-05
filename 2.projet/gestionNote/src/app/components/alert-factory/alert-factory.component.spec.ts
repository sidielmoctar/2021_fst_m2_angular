import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFactoryComponent } from './alert-factory.component';

describe('AlertFactoryComponent', () => {
  let component: AlertFactoryComponent;
  let fixture: ComponentFixture<AlertFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
