import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, TranslocoModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private translocoService: TranslocoService
  ) {}

  get isProjectPage() {
    return this.router.url.startsWith('/project/');
  }

  get currentLang() {
    return this.translocoService.getActiveLang();
  }

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
