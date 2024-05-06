import { Annuncio } from "./Annuncio";

export class Utente{
    idUtente!:number;
    nome!:string;
    cognome!:string;
    cellulare!:string;
    email!:string;
    password!:string;
    annuncio!:Annuncio[];

}