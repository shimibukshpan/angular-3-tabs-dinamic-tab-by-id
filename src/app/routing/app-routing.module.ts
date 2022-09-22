import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';
import { Tab3Component } from '../tab3/tab3.component';

const arr: Routes = [

{path: '', redirectTo: '/DASHBOARD', pathMatch: 'full'},
{path: 'DASHBOARD', component: Tab1Component},
{path: 'SETTINGS', component: Tab2Component},
{path:'USERS', component: Tab3Component },
{path:'USERS/:id', component: Tab3Component }
];


export const routing = RouterModule.forRoot(arr);
