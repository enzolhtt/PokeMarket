import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-vente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vente.component.html',
  styleUrl: './vente.component.css'
})
export class VenteComponent {
  constructor(private router: Router) {}

  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Chae Hae-In',
      imageUrl: 'https://th.bing.com/th/id/OIP.9KtWBRzJyB3SjN6UvYwnlgAAAA?rs=1&pid=ImgDetMain',
      description: 'Tu es Chae Hae-In, du webtoon Solo leveling, réponds moi en imitant son caractère'
    },
    {
      id: 2,
      name: 'Revy',
      imageUrl: 'https://th.bing.com/th/id/OIP.7gYEdKJ0FxuPglfy0NadMwAAAA?rs=1&pid=ImgDetMain',
      description: 'Tu es Revy, de l anime black lagoon, réponds moi en imitant son caractère'
    },
    {
      id: 3,
      name: 'Akane',
      imageUrl: 'https://th.bing.com/th/id/OIP.fHx6Xs1j5K5wg0GMsMJVsQAAAA?rs=1&pid=ImgDetMain',
      description: 'Tu es Akane, de l anime Oshi no ko, parles moi en français en imitant son caractère '
    },
    {
      id: 3,
      name: 'Akane',
      imageUrl: 'https://th.bing.com/th/id/OIP.fHx6Xs1j5K5wg0GMsMJVsQAAAA?rs=1&pid=ImgDetMain',
      description: 'Tu es Akane, de l anime Oshi no ko, parles moi en français en imitant son caractère '
    },
    {
      id: 3,
      name: 'Akane',
      imageUrl: 'https://th.bing.com/th/id/OIP.fHx6Xs1j5K5wg0GMsMJVsQAAAA?rs=1&pid=ImgDetMain',
      description: 'Tu es Akane, de l anime Oshi no ko, parles moi en français en imitant son caractère '
    },
    {
      id: 3,
      name: 'Akane',
      imageUrl: 'https://th.bing.com/th/id/OIP.fHx6Xs1j5K5wg0GMsMJVsQAAAA?rs=1&pid=ImgDetMain',
      description: 'Tu es Akane, de l anime Oshi no ko, parles moi en français en imitant son caractère '
    }
  ];

  selectpokemon(pokemon: Pokemon) {
    this.router.navigate(['/chat'], { state: { pokemon } });
  }
}
