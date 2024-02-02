import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVoeuxComponent } from './create-voeux.component';

describe('CreateVoeuxComponent', () => {
  let component: CreateVoeuxComponent;
  let fixture: ComponentFixture<CreateVoeuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateVoeuxComponent]
    });
    fixture = TestBed.createComponent(CreateVoeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
