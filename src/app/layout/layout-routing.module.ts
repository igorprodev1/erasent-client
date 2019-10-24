import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
