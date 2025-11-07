import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  standalone: false,
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  questionCount = 10;
  subject = '';
  language = 'english';

  constructor(private router: Router) {}

  create() {
    this.router.navigate(['/project', 'new']);
  }
}
