import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from '../models/Plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http : HttpClient) { }

  getAllPlats = () : Observable<Plat[]> => {
    return this.http.get<Plat[]>("http://localhost:3000/plats")
  }
  getPlatById = (id : number) : Observable<Plat> => {
    return this.http.get<Plat>(`http://localhost:3000/plats/${id}`)
  }
  createPlat = (plat : Plat) : Observable<Plat> => {
    return this.http.post<Plat>(`http://localhost:3000/plats`, plat)
  }
  deletePlat = (id : number) : Observable<Plat> => {
    return this.http.delete<Plat>(`http://localhost:3000/plats/${id}`)
  }
  updatePlat = (id : number, plat : Plat) : Observable<Plat> => {
    return this.http.patch<Plat>(`http://localhost:3000/plats/${id}`, plat)
  }
}
