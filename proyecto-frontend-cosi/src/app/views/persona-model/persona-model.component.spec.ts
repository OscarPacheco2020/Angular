import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaModelComponent } from './persona-model.component';

describe('PersonaModelComponent', () => {
  let component: PersonaModelComponent;
  let fixture: ComponentFixture<PersonaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
