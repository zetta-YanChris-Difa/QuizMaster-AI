import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

interface Question {
  id: string;
  type: string;
  stem: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'ready';
}

interface FileItem { name: string; pages: number; status: string; }

@Component({
  selector: 'app-project-workspace',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './project-workspace.component.html',
  styleUrls: ['./project-workspace.component.scss']
})
export class ProjectWorkspaceComponent {

  files: FileItem[] = [
    { name: 'Chapter4_Slides.pdf', pages: 24, status: 'processed' },
    { name: 'Photosynthesis_Notes.docx', pages: 8, status: 'processed' },
  ];

  questions: Question[] = [
    { id: '1', type: 'MCQ', stem: 'What is the primary function of chlorophyll in photosynthesis?', difficulty: 'Medium', status: 'ready' },
    { id: '2', type: 'Short Answer', stem: 'Describe the process of cellular respiration in plants.', difficulty: 'Hard', status: 'ready' },
    { id: '3', type: 'MCQ', stem: 'Which organelle is responsible for photosynthesis?', difficulty: 'Easy', status: 'ready' },
    { id: '4', type: 'Comprehension', stem: 'Read the passage about plant cells and answer the following questions...', difficulty: 'Medium', status: 'ready' },
  ];

}
