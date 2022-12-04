export interface IListCalls {
  iss: string;
  iat: number;
  isSuccessful: string;
  services: {
    id: string;
    name: string;
    icon: string;
    contents: {
      link: string;
      content: string;
    }[];
  }[];
}
interface IBannerContact {
  iss: string;
  iat: number;
  isSuccessful: string;
  banners: {
    bannerId: string;
    bannerLink: string;
    bannerImage: string;
    bannerTitle: string;
    bannerSubTitle: string;
    bannerContent: string;
  }[];
}
export interface IOfficesContact {
  iss: string;
  iat: number;
  isSuccessful: string;
  offices: {
    id: string,
    name:string,
    address:string,
    working: string,
    lat: string,
    lng: string
  
  }[];
}

export interface IContactsBannerProps {
  banner: IBannerContact;
  listService: IListCalls;
  officesService:IOfficesContact;
}

