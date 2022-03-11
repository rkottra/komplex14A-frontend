
export class PilotaModel {
    public ID: number = 0;
    public nev: string = "";
    public szuletes: number = Date.now();
    public nemzet:string = "";
    public magassag:number = 0;

    public csapat: CsapatModel = new CsapatModel();
}

export class CsapatModel {

    public static CsapatLista: CsapatModel[] = [];

    public csapatid:number = 0;
    public csapatnev: string = "";
    public csapatnemzet:string = "";

    constructor(element: any = null) {
        if (element !== null) {
            this.csapatid = element.csapatid;  
            this.csapatnev = element.csapatnev;
            this.csapatnemzet = element.csapatnemzet;

            CsapatModel.CsapatLista.push(this);
        }
    }
}