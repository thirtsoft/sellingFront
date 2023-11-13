import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepenseComponent } from './pages/create-depense/create-depense.component';
import { CreateTypeDepenseComponent } from './pages/create-type-depense/create-type-depense.component';
import { ListDepenseComponent } from './pages/list-depense/list-depense.component';
import { ListTypeDepenseComponent } from './pages/list-type-depense/list-type-depense.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'type-depense/list',
    component: ListTypeDepenseComponent,
  },
  {
    path: 'type-depense/create',
    component: CreateTypeDepenseComponent,
  },
  {
    path: 'type-depense/edit/:id',
    component: CreateTypeDepenseComponent,
  },

  {
    path: 'create',
    component: CreateDepenseComponent,
  },

  {
    path: 'edit/:id',
    component: CreateDepenseComponent,
  },

  {
    path: 'list',
    component: ListDepenseComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepenseRoutingModule { }
