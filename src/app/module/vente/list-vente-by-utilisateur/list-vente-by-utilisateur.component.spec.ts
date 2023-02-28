import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVenteByUtilisateurComponent } from './list-vente-by-utilisateur.component';

describe('ListVenteByUtilisateurComponent', () => {
  let component: ListVenteByUtilisateurComponent;
  let fixture: ComponentFixture<ListVenteByUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVenteByUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVenteByUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
