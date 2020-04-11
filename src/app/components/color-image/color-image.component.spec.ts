import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorImageComponent } from './color-image.component';

describe('ColorImageComponent', () => {
  let component: ColorImageComponent;
  let fixture: ComponentFixture<ColorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
