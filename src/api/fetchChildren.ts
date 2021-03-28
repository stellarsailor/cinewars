import { CharacterProfile } from "../types/CharacterProfile";

export async function fetchChildren (data: CharacterProfile) {

  // in iOS safari, cors issue occurs in localhost. To prevent it, replace http url to https.
  const res = await fetch(data.homeworld.replace('http', 'https'))
  const homeworldData = await res.json()

  const filmsPromiseArray = data.films?.map( async (url: string) => fetch(url.replace('http', 'https')).then(res => res.json()))
  // ! non-null assertion operator for -> Argument of type 'Promise<any>[] | undefined' is not assignable to parameter of type 'Iterable<any>'.
  const filmsData = await Promise.all(filmsPromiseArray!)

  const speciesPromisesArray = data.species?.map( async (url: string) => fetch(url.replace('http', 'https')).then(res => res.json()))
  const speciesData = await Promise.all(speciesPromisesArray!)

  const vehiclesPromisesArray = data.vehicles?.map( async (url: string) => fetch(url.replace('http', 'https')).then(res => res.json()))
  const vehiclesData = await Promise.all(vehiclesPromisesArray!)

  const starshipsPromisesArray = data.starships?.map( async (url: string) => fetch(url.replace('http', 'https')).then(res => res.json()))
  const starshipsData = await Promise.all(starshipsPromisesArray!)

  return { 
    ...data,
    homeworldData: homeworldData,
    filmsData: filmsData,
    speciesData: speciesData,
    vehiclesData: vehiclesData,
    starshipsData: starshipsData
  }
}