import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard], // verifica que la ruta se pueda cargar es un guard que tenemos que implementar al trabajar con laziload
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }


