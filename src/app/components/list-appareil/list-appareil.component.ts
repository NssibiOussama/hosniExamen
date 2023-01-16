import { Component, OnInit } from '@angular/core';
import { Appareil } from 'src/app/models/appareil.model';
import {AppareilService} from 'src/app/appareil.service'

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css']
})
export class ListAppareilComponent implements OnInit {
  appareils:Appareil[] = [];
  constructor(private service : AppareilService) { }

  ngOnInit(): void {
    this.appareils = this.service.getAppareil()
  }

}
