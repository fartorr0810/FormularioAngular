import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarComponenteComponent } from './validar-componente.component';

describe('ValidarComponenteComponent', () => {
  let component: ValidarComponenteComponent;
  let fixture: ComponentFixture<ValidarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
