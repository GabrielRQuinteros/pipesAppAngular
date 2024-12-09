import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsPageComponent } from './basics-page.component';

describe('BasicsPageComponent', () => {
  let component: BasicsPageComponent;
  let fixture: ComponentFixture<BasicsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
