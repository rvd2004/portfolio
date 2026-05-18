import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Analyst',
      company: '',
      duration: 'Sep 2025 - Present',
      description: [
        'Trained in Angular, Spring Boot, AWS, Python, Java, and Microservices.',
        'Resolved production bugs and worked on JDK 17 upgrade tasks.',
        'Written JUnit tests with 90%+ coverage.'
      ],
      technologies: ['Angular', 'Spring Boot', 'AWS', 'Python', 'Java', 'Microservices', 'JUnit', 'JDK 17']
    }
  ];
}
