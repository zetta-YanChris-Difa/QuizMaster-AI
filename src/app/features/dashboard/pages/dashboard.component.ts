import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { SwalService } from '../../../core/services/swal.service';

interface Project {
  id: string;
  title: string;
  subject: string;
  status: 'ready' | 'processing' | 'draft';
  questionCount: number;
  lastUpdated: string;
  createdAt: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private router: Router,
    private swalService: SwalService,
    private transloco: TranslocoService
  ) {}

  viewMode: 'grid' | 'list' = 'grid';

  projects: Project[] = [
    { id: '1', title: 'Chapter 4: Photosynthesis', subject: 'Biology', status: 'ready', questionCount: 15, lastUpdated: '2 hours ago', createdAt: '2025-01-10' },
    { id: '2', title: 'World War II Overview', subject: 'History', status: 'processing', questionCount: 8, lastUpdated: '5 hours ago', createdAt: '2025-01-10' },
    { id: '3', title: 'Algebra Basics', subject: 'Mathematics', status: 'draft', questionCount: 0, lastUpdated: '1 day ago', createdAt: '2025-01-09' },
    { id: '4', title: 'French Revolution', subject: 'History', status: 'ready', questionCount: 20, lastUpdated: '2 days ago', createdAt: '2025-01-08' },
  ];

  navigateToNewQuiz(): void {
    this.router.navigate(['/new']);
  }

  navigateToQuizDetails(quizId: string | undefined): void {
    this.router.navigate(['/project', quizId]);
  }

  async deleteProject(event: Event, projectId: string): Promise<void> {
    event.stopPropagation(); // Prevent card click navigation

    const confirmed = await this.swalService.confirm({
      title: this.transloco.translate('dashboard.quizMasterS1.title'),
      text: this.transloco.translate('dashboard.quizMasterS1.text'),
      icon: 'warning',
      confirmButtonText: this.transloco.translate('dashboard.quizMasterS1.confirmButton'),
      cancelButtonText: this.transloco.translate('dashboard.quizMasterS1.cancelButton'),
      timer: 5000, // 5 seconds
      type: 'swal',
      footer: `<span class="tw-ml-auto">ACAD_KIT_S01</span>`,
    });

    if (confirmed) {
      // Remove project from array
      this.projects = this.projects.filter(p => p.id !== projectId);
      
      // Show success message
      this.swalService.success(
        this.transloco.translate('dashboard.deleteSuccess')
      );
    }
  }
}
