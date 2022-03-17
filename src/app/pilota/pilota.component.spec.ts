import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { delay } from 'rxjs';
import { CsapatModel } from '../models/pilota.model';
import { PilotaService } from '../services/pilota.service';

import { PilotaComponent } from './pilota.component';

describe('PilotaComponent', () => {
  let component: PilotaComponent;
  let fixture: ComponentFixture<PilotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotaComponent],
      imports: [FormsModule, HttpClientModule,BrowserAnimationsModule,
        TableModule, ButtonModule, RippleModule,
        DialogModule,ConfirmDialogModule, InputTextModule,
        InputNumberModule, DropdownModule, CalendarModule],
      providers:[PilotaService, ConfirmationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('kattintás tesztelése', () => {
    expect(component.display).toBe(false);
    component.showDialog();
    expect(component.display).toBe(true);
  });

  it('kattintás tesztelése után mégse', () => {
    expect(component.display).toBe(false);
    component.showDialog();
    expect(component.display).toBe(true);
    component.cancel();
    expect(component.display).toBe(false);
  });

  it('kattintás tesztelése után mentés', () => {
    expect(component.display).toBe(false);
    component.showDialog();
    expect(component.display).toBe(true);
    component.save();
    expect(component.display).toBe(false);
  });

  /*it('létezik-e tábla', () => {
    const element: HTMLElement = fixture.nativeElement;
    const tabla = element.querySelector('p-table')!;
    expect(tabla).toBeTruthy();
    
  });*/

  it('űrlap mentés', () => {
    component.showDialog();
    fixture.detectChanges();
    component.ujpilota.nev = "Kovács Teszt János";
    component.ujpilota.csapat = new CsapatModel({
      csapatid: 1,
      csapatnev: "Mercedes"
    });
    /*const element = fixture.nativeElement;
    const nevmezo = element.querySelector('input[type=text]')! as HTMLInputElement;
    nevmezo.value = "Kovács Teszt János";

   const lenyíló_lista: Dropdown = 
        element.querySelector("#lenyilolista") as Dropdown;

    lenyíló_lista.selectItem(new Event('change'), lenyíló_lista.options[1].value);
    
    fixture.nativeElement.dispatchEvent(new Event('input[type=text]'));
*/
      component.save();
      
      const service: PilotaService = getTestBed().inject(PilotaService);
      delay( 2000); 
      service.getPilotak().subscribe((data) => {
        delay( 1000); 
        expect(data.filter(x=>x.nev == "Kovács Teszt János").length).toBe(1);
      });

      
  });
});
