import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesDetailsComponent } from './singles-details.component';

describe('SinglesDetailsComponent', () => {
  let component: SinglesDetailsComponent;
  let fixture: ComponentFixture<SinglesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
