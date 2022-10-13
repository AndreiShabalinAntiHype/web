import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadCatsComponent } from './bad-cats.component';

describe('BadCatsComponent', () => {
  let component: BadCatsComponent;
  let fixture: ComponentFixture<BadCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
