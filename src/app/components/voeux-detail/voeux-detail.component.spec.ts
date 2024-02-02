import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoeuxDetailComponent } from './voeux-detail.component';

describe('VoeuxDetailComponent', () => {
  let component: VoeuxDetailComponent;
  let fixture: ComponentFixture<VoeuxDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VoeuxDetailComponent]
    });
    fixture = TestBed.createComponent(VoeuxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
