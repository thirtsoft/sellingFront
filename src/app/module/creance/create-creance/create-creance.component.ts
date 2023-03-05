import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Creance } from 'src/app/models/creance';
import { LigneCreance } from 'src/app/models/ligne-creance';
import { Product } from 'src/app/models/product';
import { ClientService } from 'src/app/services/client.service';
import { CreanceService } from 'src/app/services/creance.service';
import { LigneCreanceService } from 'src/app/services/ligne-creance.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-creance',
  templateUrl: './create-creance.component.html',
  styleUrls: ['./create-creance.component.css']
})
export class CreateCreanceComponent implements OnInit {

  origin:any = '';
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedProduct: Product = {};
  listProduct: Array<Product> = [];

  codebarProduct = '';
  quantite = '';
  referenceCreance = '';
  libelleCreance = '';
  codeCreance = '';
  soldeCreance = 0;
  avanceCreance = 0;
  totalCreance = 0;
  nbreJours = 0;
 
  lcreances: Array<any> = [];
  productNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private cltFrsService: ClientService,
              private productService: ProductService,
              private creanceService: CreanceService,
              private ligneCreanceServie: LigneCreanceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data[origin];
    });
    this.findAllClientsFournisseurs();
    this.findAllProducts();
  }

  findAllClientsFournisseurs(): void {
    this.cltFrsService.getAllClients()
      .subscribe(clients => {
        this.listClientsFournisseurs = clients;
      });
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

  ajouterLigneCreance(): void {
    this.checkLigneCreance();
    this.calculerTotalCreance();
    this.searchedProduct = {};
    this.quantite = '';
    this.codebarProduct = '';
    this.productNotYetSelected = false;
    this.findAllProducts();
  }

  calculerTotalCreance(): void {
    this.totalCreance = 0;
    this.lcreances.forEach(ligne => {
      if (ligne.prixLigneCreance && ligne.quantite) {
        this.totalCreance += +ligne.prixLigneCreance * +ligne.quantite;
      }
    });
  }

  private checkLigneCreance(): void {
    const ligneCreanceAlreadyExists = this.lcreances.find(lig => lig.article?.codeArticle === this.searchedProduct.barCode);
    if (ligneCreanceAlreadyExists) {
      this.lcreances.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedProduct.barCode) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCreance: LigneCreance = {
        product: this.searchedProduct,
        prixLigneCreance: this.searchedProduct.prixVente,
        quantite: +this.quantite
      };
      this.lcreances.push(ligneCreance);
    }
  }

  selectProductClick(article: Product): void {
    this.searchedProduct = article;
    this.codebarProduct = article.barCode ? article.barCode : '';
    this.productNotYetSelected = true;
  }

  enregistrerCreance(): void {
    const creance = this.preparerCreance();    
      this.creanceService.addCreance(creance as Creance)
      .subscribe(cmd => {
        this.router.navigate(['/creance/list']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
  }

  private preparerCreance(): any {
    return  {
        client: this.selectedClientFournisseur,
        numeroCreance: this.referenceCreance,
        libelle: this.libelleCreance,
        soldeCreance: this.soldeCreance,
        avanceCreance: this.avanceCreance,
        nbreJours: this.nbreJours,
        dateCommande: new Date().getTime(),
        lcreances: this.lcreances
      };
  }

  onDeleteOrderItem(id: number, i: number) {
    if (id != null) {
      this.ligneCreanceServie.deleteLigneCreance(id).subscribe(data => {
        alert("ligne creance supprimé");
      //  this.toastr.warning('Détails Approvisionnement supprimé avec succès!');
      });
    }
    this.lcreances.splice(i, 1);
    this.calculerTotalCreance();
  }

}
