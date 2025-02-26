interface SublistType {
  title: string;
  href: string;
  subList2?: Array<SublistType>;
}
export interface DropdownType {
  title: string;
  href: string;
  subList?: Array<SublistType>;
  subList2?: Array<SublistType>;
}

export interface SliderType {
  title: string;
  highlight: string;
  description: string;
  cta: string;
  image: string;
}

export interface PartnerType {
  src: string;
  title: string;
}

export interface CardType {
  title: string;
  description: string;
  image: string;
}
