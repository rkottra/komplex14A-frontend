import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CsapatModel, PilotaModel } from '../models/pilota.model';

@Injectable({
  providedIn: 'root'
})
export class PilotaService {

  public token:string = "";

  constructor(private http:HttpClient) {

    this.http.get("http://localhost:8000/api/token", {"responseType":"text"}).subscribe(
      (szerverrőladat) => {
          this.token = szerverrőladat;
          console.log(this.token);
      }
    )

  }

  getPilotak() : Observable<PilotaModel[]> {
    return this.http
        .get<any[]>("http://localhost:8000/api/pilotak")
        .pipe(
          map((adatok) => {
            let segédtömb: PilotaModel[] = [];
            
            for (let index = 0; index < adatok.length; index++) {
              const element = adatok[index];
              
              let seged:PilotaModel = new PilotaModel();
              seged.ID = element.ID;
              seged.nev = element.nev;
              seged.magassag = element.magassag;
              seged.nemzet = element.nemzet;
              seged.szuletes = element.szuletes;
              if (CsapatModel.CsapatLista.findIndex(x=>x.csapatid == element.csapatid) !== -1) {
                let index = CsapatModel.CsapatLista.findIndex(x=>x.csapatid == element.csapatid);
                seged.csapat = CsapatModel.CsapatLista[index];
              } else {
                seged.csapat = new CsapatModel(element);
              }
              
              segédtömb.push(seged);
            }
            return segédtömb;
          })
        );
  }

  deletePilota( id : number) :Observable<any> {
    return this.http.delete("http://localhost:8000/api/pilotak/"+id);
  }
}
