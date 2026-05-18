import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'OTP Login System',
      description: 'A secure login system using One-Time Password (OTP) verification. Built with Angular frontend and Java Spring Boot backend, featuring email/SMS OTP delivery and session management.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'REST API'],
      image: '🔐',
      githubLink: 'https://github.com/yourprofile/otp-login'
    },
    {
      title: 'Exam Registration System',
      description: 'A comprehensive web application for exam registration and management. Allows students to register for exams, view schedules, and download admit cards with role-based access control.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
      image: '📚',
      githubLink: 'https://github.com/yourprofile/exam-registration'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Full-featured task management application with kanban board, drag-and-drop functionality, and real-time updates. Integrated with notification system for deadline reminders.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Firebase', 'Material Design'],
      image: '✅',
      githubLink: 'https://github.com/yourprofile/task-dashboard'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with product catalog, shopping cart, and checkout process. Integrated payment gateway and order tracking system.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Stripe API'],
      image: '🛒',
      githubLink: 'https://github.com/yourprofile/ecommerce-platform'
    }
  ];

  openLink(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
