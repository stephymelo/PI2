import { Genero } from "./Genero";

export type PerfilObj = {
    id: number;
    nombre: string;
    username:string;
    contra:string;
    correo:string;
    fechaNacimiento:number;
    preferencias:[],
    genero: Genero,
    ciudad: string,
    direccion: string|undefined ,
    telefono: number|undefined,

  }