import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePagePlanetComponent } from './single-page-planet.component';

describe('SinglePagePlanetComponent', () => {
  let component: SinglePagePlanetComponent;
  let fixture: ComponentFixture<SinglePagePlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePagePlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePagePlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
