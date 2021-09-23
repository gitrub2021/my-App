import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'loader', pathMatch: 'full'},
  {path: 'loader', loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  {path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)},
  {path: 'home',loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  {path: 'configuracao', loadChildren: () => import('./pages/configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)},
  {path: 'servicos',loadChildren: () => import('./pages/servicos/servicos.module').then( m => m.ServicosPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
