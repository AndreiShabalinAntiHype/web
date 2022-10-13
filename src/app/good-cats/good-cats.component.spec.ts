import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCatsComponent } from './good-cats.component';

describe('GoodCatsComponent', () => {
  let component: GoodCatsComponent;
  let fixture: ComponentFixture<GoodCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
