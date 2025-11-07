import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

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
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  viewMode: 'grid' | 'list' = 'grid';

  projects: Project[] = [
    { id: '1', title: 'Chapter 4: Photosynthesis', subject: 'Biology', status: 'ready', questionCount: 15, lastUpdated: '2 hours ago', createdAt: '2025-01-10' },
    { id: '2', title: 'World War II Overview', subject: 'History', status: 'processing', questionCount: 8, lastUpdated: '5 hours ago', createdAt: '2025-01-10' },
    { id: '3', title: 'Algebra Basics', subject: 'Mathematics', status: 'draft', questionCount: 0, lastUpdated: '1 day ago', createdAt: '2025-01-09' },
    { id: '4', title: 'French Revolution', subject: 'History', status: 'ready', questionCount: 20, lastUpdated: '2 days ago', createdAt: '2025-01-08' },
  ];
}
