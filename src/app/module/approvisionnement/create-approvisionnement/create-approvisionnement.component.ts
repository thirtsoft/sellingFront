import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Approvisionnement } from 'src/app/models/approvisionnement';
import { LigneApprovisionnement } from 'src/app/models/ligne-approvisionnement';
import { Product } from 'src/app/models/product';
import { ApprovisionnementService } from 'src/app/services/approvisionnement.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { LigneApprovisionnementService } from 'src/app/services/ligne-approvisionnement.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-approvisionnement',
  templateUrl: './create-approvisionnement.component.html',
  styleUrls: ['./create-approvisionnement.component.css']
})
export class CreateApprovisionnementComponent implements OnInit {

  origin:any = '';
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedProduct: Product = {};
  listProduct: Array<Product> = [];
  codebarProduct = '';
  quantite = '';
  codeApprovisionnement = '';
  observation = '';
  montantAvance = 0;
  totalAppro = 0;
 
  ligneApprovisionnements: Array<any> = [];
  productNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private cltFrsService: FournisseurService,
              private productService: ProductService,
              private approService: ApprovisionnementService,
              private ligneApproServie: LigneApprovisionnementService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data[origin];
    });
    this.findAllClientsFournisseurs();
    this.findAllProducts();
  }

  findAllClientsFournisseurs(): void {
    this.cltFrsService.getAllFournisseurs()
      .subscribe(fournisseurs => {
        this.listClientsFournisseurs = fournisseurs;
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

  ajouterLigneAppro(): void {
    this.checkLigneAppro();
    this.calculerTotalAppro();
    this.searchedProduct = {};
    this.quantite = '';
    this.codebarProduct = '';
    this.productNotYetSelected = false;
    this.findAllProducts();
  }

  calculerTotalAppro(): void {
    this.totalAppro = 0;
    this.ligneApprovisionnements.forEach(ligne => {
      if (ligne.prixLigneAppro && ligne.quantite) {
        this.totalAppro += +ligne.prixLigneAppro * +ligne.quantite;
      }
    });
  }

  private checkLigneAppro(): void {
    const ligneApproAlreadyExists = this.ligneApprovisionnements.find(lig => lig.article?.codeArticle === this.searchedProduct.barCode);
    if (ligneApproAlreadyExists) {
      this.ligneApprovisionnements.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedProduct.barCode) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneAppro: LigneApprovisionnement = {
        product: this.searchedProduct,
        prixLigneAppro: this.searchedProduct.prixAchat,
        quantite: +this.quantite
      };
      this.ligneApprovisionnements.push(ligneAppro);
    }
  }

  selectProductClick(article: Product): void {
    this.searchedProduct = article;
    this.codebarProduct = article.barCode ? article.barCode : '';
    this.productNotYetSelected = true;
  }

  enregistrerApprovisionnement(): void {
    const appro = this.preparerApprovisionnement(); 
    console.log(appro);
      this.approService.addApprovisionnement(appro as Approvisionnement)
      .subscribe(cmd => {
        this.router.navigate(['/approvisionnement/list']);
      }, error => {
        this.errorMsg = error.error.errors;
    });
  }

  private preparerApprovisionnement(): any {
    return  {
        fournisseur: this.selectedClientFournisseur,
        numeroAppro: this.codeApprovisionnement,
        observation: this.observation,
        montantAvance: this.montantAvance,
        dateCommande: new Date().getTime(),
        ligneApprovisionnements: this.ligneApprovisionnements
  
      };
  }

  onDeleteOrderItem(id: number, i: number) {
    if (id != null) {
      this.ligneApproServie.deleteLigneApprovisionnement(id).subscribe(data => {
        alert("ligne creance supprimé");
      //  this.toastr.warning('Détails Approvisionnement supprimé avec succès!');
      });
    }
    this.ligneApprovisionnements.splice(i, 1);
    this.calculerTotalAppro();
  }

}
