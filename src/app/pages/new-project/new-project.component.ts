import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FormsModule],
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
