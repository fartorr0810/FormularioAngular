import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcomentarioComponent } from './agregarcomentario.component';

describe('AgregarcomentarioComponent', () => {
  let component: AgregarcomentarioComponent;
  let fixture: ComponentFixture<AgregarcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcomentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
