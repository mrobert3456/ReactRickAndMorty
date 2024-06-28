interface Origin {
  name: string;
  url: string;
}
interface Location {
  name: string;
  url: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: "Male" | "Female";
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
