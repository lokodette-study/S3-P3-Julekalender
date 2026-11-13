export type Theme =
  | "Den lille pige med svovlstikkerne"
  | "Klods-Hans"
  | "Hyrdinden og skorstensfejeren"
  | "Prinsessen på ærten"
  | "Snedronningen"
  | "Nattergalen"
  | "Svinedrengen"
  | "Tommelise";

export type DiscountCode =
  | "SVOVLSTIKKER"
  | "KLODSHANS"
  | "HYRDINDEN"
  | "VEDLIGEHOLD"
  | "SNEDRONNINGEN"
  | "NATTERGALEN"
  | "SVINEDRENGEN"
  | "TOMMELISE";

export type Day =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export type DoorStatus = "locked" | "available" | "opened";

export type TipActivity = {
  kind: "tip";
  name: string;
};
export type StoryActivity = {
  kind: "story";
  name: string;
};
export type WinActivity = {
  kind: "win";
  prize: Prize;
};
export type GoodwillActivity = {
  kind: "goodwill";
  name: string;
};

export type Activity =
  | StoryActivity
  | TipActivity
  | WinActivity
  | GoodwillActivity;

export type User = {
  email: string;
  ticketCount: number;
};

export type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type ThemePrize = {
  kind: "themePrize";
  name: string;
  image: string;
  id: string;
  drawDate: Day;
};
export type GrandPrize = {
  kind: "grandPrize";
  name: string;
  image: string;
  id: string;
  drawDate: Day;
};

export type Prize = ThemePrize | GrandPrize;

export type Door = {
  id: string;
  theme: Theme;
  discountCode: string;
  image: string;
  icon: string;
  day: Day;
  doorStatus: DoorStatus;

  activities: Activity[];
};
