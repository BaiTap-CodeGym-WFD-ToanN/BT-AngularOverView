import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorchangerComponent } from './colorchanger.component';

describe('ColorchangerComponent', () => {
  let component: ColorchangerComponent;
  let fixture: ComponentFixture<ColorchangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorchangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
