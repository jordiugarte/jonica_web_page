import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorationsComponent } from './restorations.component';

describe('RestorationsComponent', () => {
  let component: RestorationsComponent;
  let fixture: ComponentFixture<RestorationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
