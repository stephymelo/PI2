
export type CuponObj = {
    id: number;
    titulo:string;
    fechaVencer:string;
    descripcion:string;
    imagenUrl:string;
    codigoActivable:string;
    status:"noactivos"|"activo"| "expirados";
    

  }