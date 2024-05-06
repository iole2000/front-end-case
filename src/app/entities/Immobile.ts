import { SafeResourceUrl } from "@angular/platform-browser";
import { Annuncio } from "./Annuncio";

export class Immobile{
    idImmobile!:number;
    superfice!:string;
    piano!:number;
    giardino!:boolean;
    balconi!:boolean;
    citta!:string;
    via!:string;
    latitudine!:number;
    longitudine!:number;
    civico!:string;
    prezzo!:number;
    descrizione!:string;
    foto!:SafeResourceUrl;
    annuncio!:Annuncio;
}