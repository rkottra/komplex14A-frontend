import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CsapatModel, PilotaModel } from '../models/pilota.model';
import { PilotaService } from '../services/pilota.service';

@Component({
  selector: 'app-pilota',
  templateUrl: './pilota.component.html',
  styleUrls: ['./pilota.component.css']
})
export class PilotaComponent implements OnInit {

  public display: boolean = false;
  public pilotak:PilotaModel[] = [];

  public ujpilota:PilotaModel = new PilotaModel();

  constructor(private szervíz:PilotaService, private confirmationService:ConfirmationService) { 
    
    this.szervíz.getPilotak().subscribe(szerverről_érkező => {
      this.pilotak = szerverről_érkező;
    });
  }
  
  ngOnInit(): void {
  }

  torles(id:number) {

    this.confirmationService.confirm({
          message: 'Biztos, hogy törölni akarod a pilótát?',
          accept: () => {
            this.szervíz.deletePilota(id).subscribe(
              () => {
                this.szervíz.getPilotak().subscribe(szerverről_érkező => {
                  this.pilotak = szerverről_érkező;
                });
              }
            );
          }
      });
  }

  showDialog() {
    this.display = true;
  }

  cancel() {
    this.display = false;
  }

  save() {
    this.display = false;
    if (this.ujpilota.ID == 0) {
      this.szervíz.insertPilota(this.ujpilota).subscribe( (data) => {
          if (data == 1) {
            this.pilotak.push(this.ujpilota);
            this.ujpilota = new PilotaModel();
          }
      });
    } else {
      this.szervíz.updatePilota(this.ujpilota).subscribe( 
        () => {
          this.szervíz.getPilotak().subscribe(szerverről_érkező => {
            this.pilotak = szerverről_érkező;
          });
        });
    }
  }

  modositas(id:number) {
    this.ujpilota = this.pilotak.find(x=> x.ID == id )!;
    this.display = true;
  }


  public get csapatok() {
    return CsapatModel.CsapatLista;
  }


}
