import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsdetailsComponent } from './kidsdetails.component';

describe('KidsdetailsComponent', () => {
  let component: KidsdetailsComponent;
  let fixture: ComponentFixture<KidsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
