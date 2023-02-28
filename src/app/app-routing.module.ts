import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  {
    path: 'auth',
    loadChildren: () =>
    import('../app/module/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'approvisionnement',
    loadChildren: () =>
    import('../app/module/approvisionnement/approvisionnement.module').then((m) => m.ApprovisionnementModule),
  },
  {
    path: 'avoir',
    loadChildren: () =>
    import('../app/module/avoir/avoir.module').then((m) => m.AvoirModule),
  },
  {
    path: 'categorie',
    loadChildren: () =>
    import('../app/module/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'chart',
    loadChildren: () =>
    import('../app/module/chart/chart.module').then((m) => m.ChartModule),
  },
  {
    path: 'client',
    loadChildren: () =>
    import('../app/module/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'commande',
    loadChildren: () =>
    import('../app/module/commande/commande.module').then((m) => m.CommandeModule),
  },
  {
    path: 'contrat',
    loadChildren: () =>
    import('../app/module/contrat/contrat.module').then((m) => m.ContratModule),
  },
  {
    path: 'creance',
    loadChildren: () =>
    import('../app/module/creance/creance.module').then((m) => m.CreanceModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
    import('../app/module/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'devis',
    loadChildren: () =>
    import('../app/module/devis/devis.module').then((m) => m.DevisModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
    import('../app/module/employe/employe.module').then((m) => m.EmployeModule),
  },
  {
    path: 'fournisseur',
    loadChildren: () =>
    import('../app/module/fournisseur/fournisseur.module').then((m) => m.FournisseurModule),
  },
  {
    path: 'product',
    loadChildren: () =>
    import('../app/module/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'stock',
    loadChildren: () =>
    import('../app/module/stock/stock.module').then((m) => m.StockModule),
  },
  {
    path: 'subcategorie',
    loadChildren: () =>
    import('../app/module/subcategory/subcategory.module').then((m) => m.SubcategoryModule),
  },
  {
    path: 'vente',
    loadChildren: () =>
    import('../app/module/vente/vente.module').then(m => m.VenteModule),
  }, 
  {
    path: 'versement',
    loadChildren: () =>
    import('../app/module/versement/versement.module').then(m => m.VersementModule),
  },

  {
    path: 'depense',
    loadChildren: () =>
    import('../app/module/depense/depense.module').then(m => m.DepenseModule),
  },
  
  
];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy'
    }),
  ],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }
