import { Immobile } from "./Immobile";
import { Utente } from "./Utente";

export class Annuncio{
    idAnnuncio!:number;
    tipo!:string;
    immobile!:Immobile;
    utente!:Utente;
}