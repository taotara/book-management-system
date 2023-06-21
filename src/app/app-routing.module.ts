import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { LendComponent } from './book/lend/lend.component';

const routes: Routes = [
  { path: '', component: BookComponent, pathMatch: 'prefix' },
  {
    path: 'add-book',
    component: AddBookComponent,
  },
  {
    path: 'update/:id',
    component: UpdateBookComponent,
  },
  {
    path: 'lend',
    component: LendComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BookComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
