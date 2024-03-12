type PropertyType = {
  _id?: string;
  city: string;
  country: string;
  region: string;
  description: string;
  caption?: string;
  rating: number;
  numVotes: number;
  perNightPrice: number;
  totalPrice: number;
  dateFrom: string;
  dateTo: string;
  numRooms: number;
  numBeds: number;
  numToilets: number;
  sharedProperty: boolean;
  heroImg: string;
  images: string[];
  favourited?: boolean;
}

//difference between interface and type is that type is extendable and interfaces are not
// type MansionType = {
//   cinemaRooms: number;
// } & PropertyType;

export default PropertyType;
