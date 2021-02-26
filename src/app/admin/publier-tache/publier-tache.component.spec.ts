import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierTacheComponent } from './publier-tache.component';

describe('PublierTacheComponent', () => {
  let component: PublierTacheComponent;
  let fixture: ComponentFixture<PublierTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublierTacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
