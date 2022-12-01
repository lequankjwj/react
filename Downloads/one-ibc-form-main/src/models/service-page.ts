interface IBannerServices {
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

interface IConfig {
  title: string;
  description: string;
  label: string;
}

export interface IListServices {
  iss: string;
  iat: number;
  isSuccessful: string;
  services: {
    id: string;
    name: string;
    keyword: string;
    icon: string;
    summary: string;
  }[];
}

export interface IServicesBannerProps {
  banner: IBannerServices;
  configFuture: IConfig;
}
