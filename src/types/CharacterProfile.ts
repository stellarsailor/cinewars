import { Films } from './Films';
import { Homeworld } from './Homeworld';
import { Species } from './Species';
import { Starships } from './Starships';
import { Vehicles } from './Vehicles';

// ####Data is a place for the fetched data of ####
export interface CharacterProfile {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string; // url
  homeworldData: Homeworld;
  films?: Array<string>; // array of url
  filmsData?: Array<Films>;
  species?: Array<string>; // array of url
  speciesData?: Array<Species>;
  vehicles?: Array<string>; // array of url
  vehiclesData?: Array<Vehicles>;
  starships?: Array<string>; // array of url
  starshipsData?: Array<Starships>;
  created: Date;
  edited: Date;
  url: string;
}
