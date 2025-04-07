import { Butor } from "./Butor";

export interface Felhasznalo {
    email: string;
    password: string;
    admin: boolean;
    kosar: Butor[];
  }