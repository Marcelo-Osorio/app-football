export interface Equipments {
  response : Equipment[]
}

export interface Equipment {
  team : Team,
  venue : Venue
}

export interface Team {
  id : number,
  name : string,
  code : string,
  country : string,
  founded : number,
  national : boolean,
  logo : string
}
export interface Venue {
  id : number,
  name : string,
  address : string,
  city : string
  capacity : number,
  surface : string,
  image : string
}
export interface Countries {
  response : Country[]
}
export interface Country {
  name : string,
  code : string,
  flag : string
}
