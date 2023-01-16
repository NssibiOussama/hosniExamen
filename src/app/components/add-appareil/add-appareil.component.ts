import { Component, OnInit } from '@angular/core';
import { Appareil } from 'src/app/models/appareil.model';
import {AppareilService} from 'src/app/appareil.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-appareil',
  templateUrl: './add-appareil.component.html',
  styleUrls: ['./add-appareil.component.css']
})
export class AddAppareilComponent implements OnInit {
  appareil: Appareil=new Appareil();

  constructor(private service : AppareilService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addAppareil(this.appareil)
    this.router.navigateByUrl('/')

  }

}
