export type Theme =
  | "Prinsessen på ærten"
  | "Nattergalen"
  | "Snedronningen"
  | "Hyrdinden og skorstensfejeren"
  | "Den lille pige med svovlstikkerne"
  | "Tommelise"
  | "Svinedrengen"
  | "Klods-Hans";

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

export type DoorStatus = "locked" | "openable" | "opened";

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

export type TicketState = "valid" | "invalid" | "winner";

export type Ticket = {
  id: string;
  date: number;
  state: TicketState;
};

export type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type Prize = {
  name: string;
  image: string;
  id: string;
  drawDate: Day;

  ticket: Ticket[];
  user: User | null;
  product: Product[];
};

export type Door = {
  id: string;
  theme: Theme;
  discountCode: string;
  image: string;
  icon: string;
  day: Day;
  doorStatus: DoorStatus;

  activities: Activity[];
  tickets: Ticket[];
  users: User[];
};

export type User = {
  email: string;
  ticketCount: number;
};
