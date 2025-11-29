import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-studentlist',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist implements OnInit {
  students: string[] = [];

  ngOnInit() {
    const student = localStorage.getItem('student');
    if (student) {
      this.students.push(student);
    }
  }
}