import { Component, OnInit } from '@angular/core';
import { CsapatModel, PilotaModel } from '../models/pilota.model';
import { PilotaService } from '../services/pilota.service';

@Component({
  selector: 'app-pilota',
  templateUrl: './pilota.component.html',
  styleUrls: ['./pilota.component.css']
})
export class PilotaComponent implements OnInit {

  public pilotak:PilotaModel[] = [];

  constructor(private szervíz:PilotaService) { 
    
    this.szervíz.getPilotak().subscribe(szerverről_érkező => {
      this.pilotak = szerverről_érkező;

      this.pilotak[0].csapat.csapatnemzet = "dajda";
      
      //CsapatModel.CsapatLista[0].csapatnemzet = "valami";
      //console.log(this.pilotak[0].csapat.csapatnemzet);
      
      
    });

    
  }

  ngOnInit(): void {
  }

}
