import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/models/commande';
import { LigneCommande } from 'src/app/models/ligne-commande';
import { Product } from 'src/app/models/product';
import { ClientService } from 'src/app/services/client.service';
import { CommandeService } from 'src/app/services/commande.service';
import { LigneCommandeService } from 'src/app/services/ligne-commande.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {

  origin:any = '';
  selectedClientFournisseur: any = {};
  listClientsFournisseurs: Array<any> = [];
  searchedProduct: Product = {};
  listProduct: Array<Product> = [];
  codeProduct = '';
  quantite = '';
  codeCommande = '';
  typeReglement = '';
  montantReglement = 0;

  //commande: Commande = {};

  lcomms: Array<any> = [];
  totalCommande = 0;
  productNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cltFrsService: ClientService,
    private productService: ProductService,
    private commandeService: CommandeService,
    private ligneCommandeServie: LigneCommandeService
  ) { }

  ngOnInit(): void {
    /*
    this.activatedRoute.data.subscribe(data => {
      this.origin = data[origin];
    });*/
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
    .subscribe(products => {
      this.listProduct = products;
    });
  }

  filtrerProduct(): void {
    if (this.codeProduct.length === 0) {
      this.findAllProducts();
    }
    this.listProduct = this.listProduct
    .filter(prod => prod.barCode?.includes(this.codeProduct) || prod.designation?.includes(this.codeProduct));
  }

  ajouterLigneCommande(): void {
    this.checkLigneCommande();
    this.calculerTotalCommande();
    console.log(this.calculerTotalCommande());

    this.searchedProduct = {};
    this.quantite = '';
    this.codeProduct = '';
    this.productNotYetSelected = false;
    this.findAllProducts();
  }

  calculerTotalCommande(): void {
    this.totalCommande = 0;
    this.lcomms.forEach(ligne => {
      if (ligne.prixCommande && ligne.quantite) {
        this.totalCommande += +ligne.prixCommande * +ligne.quantite;
      }
    });
  }

  private checkLigneCommande(): void {
    const ligneCmdAlreadyExists = this.lcomms.find(lig => lig.product?.codeProduct === this.searchedProduct.barCode);
    console.log(this.lcomms);
    
    if (ligneCmdAlreadyExists) {
      this.lcomms.forEach(lig => {
        if (lig.product?.codeProduct === this.searchedProduct.barCode) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommande = {
        product: this.searchedProduct,
        prixCommande: this.searchedProduct.prixVente,
        quantite: +this.quantite
      };
      this.lcomms.push(ligneCmd);
    }
  }

  selectProductClick(product: Product): void {
    this.searchedProduct = product;
    this.codeProduct = product.barCode ? product.barCode : '';
    this.productNotYetSelected = true;
  }

  enregistrerCommande(): void {
    const commande = this.preparerCommande();    
      this.commandeService.addCommande(commande as Commande)
    //  this.commandeService.addCommande(this.commande as Commande)
      .subscribe(cmd => {
        this.router.navigate(['/commande/list']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
  }

  private preparerCommande(): any {
    return  {
        client: this.selectedClientFournisseur,
        numeroCommande: this.codeCommande,
        montantReglement: this.montantReglement,
        typeReglement: this.typeReglement,
        dateCommande: new Date().getTime(),
        lcomms: this.lcomms
      };
  }

  onDeleteOrderItem(id: number, i: number) {
    if (id != null) {
      this.ligneCommandeServie.deleteLigneCommande(id).subscribe(data => {
        alert("ligne commande supprimé");
      //  this.toastr.warning('Détails Approvisionnement supprimé avec succès!');
      });
    }
    this.lcomms.splice(i, 1);
    this.calculerTotalCommande();
  }
 

}
