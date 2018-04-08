import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrainersComponent } from './my-trainers.component';

describe('MyTrainersComponent', () => {
  let component: MyTrainersComponent;
  let fixture: ComponentFixture<MyTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
