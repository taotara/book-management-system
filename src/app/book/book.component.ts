import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { LendComponent } from './lend/lend.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { Router, RouterModule } from '@angular/router';
import { BookService } from './book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, RouterModule, AddBookComponent, LendComponent, UpdateBookComponent],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent {
  public books$: any;

  constructor(private book: BookService, private toastr: ToastrService, private router: Router) { }
  
  ngOnInit() {
    this.getAllBooks()
  }

  getAllBooks() {
    this.book.getBooks().subscribe((res) => {
      this.books$ = res
    })
  }

  onDelete(id: any) {
    this.book.deleteBook(id).subscribe((res) => {
      this.toastr.success('Deleted Successfully')
      setTimeout(() => {
        location.reload()
      }, 2000);
    })
  }

  onUpdate(id: any) {
    this.router.navigate([`/update/${id}`]);
  }
}
