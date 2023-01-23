import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsBoxComponent } from './ratings-box.component';

describe('RatingsBoxComponent', () => {
  let component: RatingsBoxComponent;
  let fixture: ComponentFixture<RatingsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
