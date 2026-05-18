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
    }
  ];
}
