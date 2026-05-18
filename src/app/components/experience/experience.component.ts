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
      position: 'Senior Software Engineer',
      company: 'Deloitte',
      duration: 'Jan 2022 - Present',
      description: [
        'Led development of enterprise Java applications serving 1000+ users',
        'Designed and implemented RESTful APIs using Spring Boot framework',
        'Collaborated with cross-functional teams to deliver scalable solutions',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'SQL', 'REST APIs']
    },
    {
      position: 'Software Engineer',
      company: 'Deloitte',
      duration: 'Jun 2020 - Dec 2021',
      description: [
        'Developed and maintained microservices architecture',
        'Implemented responsive UI using Angular and Tailwind CSS',
        'Optimized database queries reducing load time by 40%',
        'Participated in agile development and sprint planning'
      ],
      technologies: ['Java', 'Angular', 'MySQL', 'Git', 'Agile']
    }
  ];
}
