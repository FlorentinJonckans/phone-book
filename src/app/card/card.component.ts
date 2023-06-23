import { Component, OnInit, Input } from '@angular/core';
import { Profil } from 'src/models/profil.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() profil!: Profil;

  // le ! signifie qu'on déclare une variable sans lui affecter une valeur
  // name!: string;

  ngOnInit(){
    
  }
}
