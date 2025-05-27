import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio02Component } from './desafio-02.component';

describe('Desafio02Component', () => {
  let component: Desafio02Component;
  let fixture: ComponentFixture<Desafio02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desafio02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desafio02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
