import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  title: string;
  description: string;
  icon: string;
  date: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements: Achievement[] = [
    {
      title: 'Spot Award',
      description: 'Recognized for exceptional performance and outstanding contribution to critical project delivery at Deloitte.',
      icon: '🏆',
      date: '2023'
    },
    {
      title: 'Employee of the Month',
      description: 'Awarded for exemplary code quality, mentoring skills, and team collaboration.',
      icon: '⭐',
      date: '2022'
    },
    {
      title: 'Certification - Java Developer',
      description: 'Completed Oracle Certified Associate Java Programmer certification.',
      icon: '📜',
      date: '2021'
    },
    {
      title: 'Best Innovation',
      description: 'Developed an innovative solution for optimizing API response time by 50%.',
      icon: '💡',
      date: '2023'
    }
  ];
}
