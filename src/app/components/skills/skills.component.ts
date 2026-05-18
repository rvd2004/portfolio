import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Java', level: 90, category: 'Backend' },
    { name: 'Spring Boot', level: 85, category: 'Backend' },
    { name: 'Angular', level: 88, category: 'Frontend' },
    { name: 'TypeScript', level: 87, category: 'Frontend' },
    { name: 'SQL', level: 85, category: 'Database' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'REST APIs', level: 90, category: 'API' },
    { name: 'Git', level: 85, category: 'Tools' },
  ];

  categories = ['Backend', 'Frontend', 'Database', 'API', 'Tools'];

  getSkillsByCategory(category: string) {
    return this.skills.filter(skill => skill.category === category);
  }
}
