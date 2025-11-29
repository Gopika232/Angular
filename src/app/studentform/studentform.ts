import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentform',
  imports: [FormsModule],
  templateUrl: './studentform.html',
  styleUrl: './studentform.css',
})
export class Studentform {
  studentName = '';

  constructor(private router: Router) {}

  addStudent() {
    if (this.studentName.trim() !== '') {
      localStorage.setItem('student', this.studentName);
      this.router.navigate(['/list']);
    }
  }

}
