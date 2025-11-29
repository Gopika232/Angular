import { Routes } from '@angular/router';
import { Studentform } from './studentform/studentform';
import { Studentlist } from './studentlist/studentlist';

export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: Studentform},
  { path: 'list', component: Studentlist },];
