export type Navclick = {
  onServicesClick: () => void;
  onPortfolioClick: () => void;
  onContactUsClick: () => void;
  onMainClick: () => void;
  onAboutUsClick: () => void;
};

export type ServiceCategoriesTypes = {
  title: string;
  description: string;
  Serimgurl:string;
};

export type DataTypes = {
  id: number;
  name: string;
  description:string;
  imgurl:string;
  imgalt:string;
};