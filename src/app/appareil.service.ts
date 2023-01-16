import { Injectable } from '@angular/core';
import {Appareil} from 'src/app/models/appareil.model'

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  listAppareils : any[] = []


  constructor() { }
  addAppareil(app : any){
    this.listAppareils.push(app)
  }

  getAppareil():any[]{
    return this.listAppareils
  }
}
