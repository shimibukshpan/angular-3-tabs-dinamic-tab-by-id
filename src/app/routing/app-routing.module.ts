import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';
import { Tab3Component } from '../tab3/tab3.component';

const arr: Routes = [

{path: '', redirectTo: '/tab1', pathMatch: 'full'},
{path: 'tab1', component: Tab1Component},
{path: 'tab2', component: Tab2Component},
{path:'tab3', component: Tab3Component },
{path:'tab3/:id', component: Tab3Component }
];


export const routing = RouterModule.forRoot(arr);
