import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesComponent } from './singles.component';

describe('SinglesComponent', () => {
  let component: SinglesComponent;
  let fixture: ComponentFixture<SinglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
