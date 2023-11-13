import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LigneVente } from 'src/app/models/ligne-vente';
import { Product } from 'src/app/models/product';
import { Vente } from 'src/app/models/vente';
import { ProductService } from 'src/app/module/product/services/product.service';
import { VenteService } from 'src/app/module/vente/services/vente.service';
import { LigneVenteService } from '../../services/ligne-vente.service';

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
  user = 1;

  ligneVentes: Array<any> = [];
  totalVente = 0;
  productNotYetSelected = false;
  errorMsg: Array<string> = [];
  numeroVente: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private venteService: VenteService,
              private ligneVenteServie: LigneVenteService,
              private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.findAllProducts();
    this.getNumeroVente();
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
        this.toastr.success('avec succès','La vente est ajoutée', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        this.router.navigate(['/vente/list']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
  }

  private preparerVente(): any {
    return  {
        numeroVente: this.numeroVente,
        montantReglement: this.montantReglement,
        typeReglement: this.typeReglement,
        dateVente: new Date().getTime(),
        ligneVentes: this.ligneVentes,
        user_id: this.user
      };
  }

  onDeleteOrderItem(id: number, i: number) {
    if (id != null) {
      this.ligneVenteServie.deleteLigneVente(id).subscribe(data => {
      //  alert("ligne commande supprimé");
        this.toastr.warning('La ligne de vente est supprimée avec succès!');
      });
    }
    this.ligneVentes.splice(i, 1);
    this.calculerTotalVente();
  }

  getNumeroVente(): void {
    this.venteService.getNumeroVente()
    .subscribe(data => {
      this.numeroVente = data;
    });
  }


}
