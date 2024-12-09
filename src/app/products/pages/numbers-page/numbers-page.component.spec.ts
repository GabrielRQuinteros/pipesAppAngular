import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersPageComponent } from './numbers-page.component';

describe('NumbersPageComponent', () => {
  let component: NumbersPageComponent;
  let fixture: ComponentFixture<NumbersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumbersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
