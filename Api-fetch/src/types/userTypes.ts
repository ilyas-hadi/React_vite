export interface userType {
  name: string;
  username:string;
  email: string;
  phone: string;
  img: string;
  image: string;
  id:number;
  website:string;
  company:{
    name:string;
    catchPhrase:string;
    bs:string;
  };
  address:{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:{
      lat:string;
      lng:string;
    };
  };
}
