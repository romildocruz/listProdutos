import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdutoPage } from './produto.page';
import { ProdutoListComponent } from 'src/app/components/produto-list/produto-list.component';
import { ProdutoCardComponent } from 'src/app/components/produto-card/produto-card.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProdutoPage,
    ProdutoListComponent,
    ProdutoCardComponent,
  ]
})
export class ProdutoPageModule { }
