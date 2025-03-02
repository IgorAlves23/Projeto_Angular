import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContatosPageComponent } from './contatos.component';

describe('ListContatosPageComponent', () => {
  let component: ListContatosPageComponent;
  let fixture: ComponentFixture<ListContatosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListContatosPageComponent]
    });
    fixture = TestBed.createComponent(ListContatosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
