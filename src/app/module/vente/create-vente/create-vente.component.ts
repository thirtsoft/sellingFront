import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LigneVente } from 'src/app/models/ligne-vente';
import { Product } from 'src/app/models/product';
import { Vente } from 'src/app/models/vente';
import { LigneVenteService } from 'src/app/services/ligne-vente.service';
import { ProductService } from 'src/app/services/product.service';
import { VenteService } from 'src/app/services/vente.service';

@Component({
  selector: 'app-create-vente',
  templateUrl: './create-vente.component.html',
  styleUrls: ['./create-vente.component.css']
})
export class CreateVenteComponent implements OnInit {

  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedProduct: Product = {};
  listProduct: Array<Product> = [];
  codebarProduct = '';
  quantite = '';
  codeVente = '';
  typeReglement = '';
  montantReglement = 0;

  ligneVentes: Array<any> = [];
  totalVente = 0;
  productNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private venteService: VenteService,
              private ligneVenteServie: LigneVenteService
  ) { }

  ngOnInit(): void {
    this.findAllProducts();
  }

  findAllProducts(): void {
    this.productService.getAllProducts()
    .subscribe(articles => {
      this.listProduct = articles;
    });
  }

  filtrerArticle(): void {
    if (this.codebarProduct.length === 0) {
      this.findAllProducts();
    }
    this.listProduct = this.listProduct
    .filter(art => art.barCode?.includes(this.codebarProduct) || art.designation?.includes(this.codebarProduct));
  }

  ajouterLigneVente(): void {
    if ((+this.quantite < this.searchedProduct.qtestock!) && (+this.quantite > 0)) {
      this.checkLigneVente();
      this.calculerTotalVente();
      this.searchedProduct = {};
      this.quantite = '';
      this.codebarProduct = '';
      this.productNotYetSelected = false;
      this.findAllProducts();
    }else {
      alert("Verfier que vous avez bien renseigner la quantite soit votre quantité en stock est insuffisante")
    }
  }

  calculerTotalVente(): void {
    this.totalVente = 0;
    this.ligneVentes.forEach(ligne => {
      if (ligne.prixVente && ligne.quantite) {
        this.totalVente += +ligne.prixVente * +ligne.quantite;
      }
    });
  }

  private checkLigneVente(): void {
    const ligneVenteAlreadyExists = this.ligneVentes.find(lig => lig.article?.codeArticle === this.searchedProduct.barCode);
    if (ligneVenteAlreadyExists) {
      this.ligneVentes.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedProduct.barCode) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneVente: LigneVente = {
        product: this.searchedProduct,
        prixVente: this.searchedProduct.prixDetail,
        quantite: +this.quantite
      };
      this.ligneVentes.push(ligneVente);
    }
  }

  selectProductClick(article: Product): void {
    this.searchedProduct = article;
    this.codebarProduct = article.barCode ? article.barCode : '';
    this.productNotYetSelected = true;
  }

  enregistrerCommande(): void {
    const vente = this.preparerVente();    
      this.venteService.addVente(vente as Vente)
      .subscribe(cmd => {
        this.router.navigate(['/vente/list']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
  }

  private preparerVente(): any {
    return  {
        numeroVente: this.codeVente,
        montantReglement: this.montantReglement,
        typeReglement: this.typeReglement,
        dateVente: new Date().getTime(),
        ligneVentes: this.ligneVentes
      };
  }

  onDeleteOrderItem(id: number, i: number) {
    if (id != null) {
      this.ligneVenteServie.deleteLigneVente(id).subscribe(data => {
        alert("ligne commande supprimé");
      //  this.toastr.warning('Détails Approvisionnement supprimé avec succès!');
      });
    }
    this.ligneVentes.splice(i, 1);
    this.calculerTotalVente();
  }


}
