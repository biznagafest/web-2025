import type { Nullish } from "../utils/nullish";
import type { DATA, speakers } from "./data";

export type Socials = Nullish<
  Partial<{
    twitter: string;
    youtube: string;
    linkedin: string;
    website: string;
    mastodon: string;
    github: string;
    medium: string;
    mail: string;
    instagram: string;
    devto: string;
    twitch: string;
  }>
>;
export type Speaker = {
  name: string;
  position?: Nullish<string>;
  descriptionParagraphs: ReadonlyArray<string>;
  socials?: Socials;
  picture: string;
};

export type ScheduleEvent = {
  time_start: string;
  time_end: string;
  title: string;
  subtitle?: Nullish<string>;
  description?: Nullish<string>;
  type?: Nullish<"lecture" | "workshop">;
};

export type Schedule = {
  type: "break" | "no-break";
  events: ScheduleEvent[];
};

export interface TeamMember {
  name: string;
  position?: Nullish<string>;
  descriptionInParagraphs: ReadonlyArray<string>;
  socials?: Socials;
  picture: string;
}

export interface Team {
  organizers: ReadonlyArray<TeamMember>;
  staff: ReadonlyArray<TeamMember>;
}

export type SponsorTier =
  | "platinum"
  | "gold"
  | "silver"
  | "bronze"
  | "media"
  | "food"
  | "community"
  | "supporter";

export interface JobOffer {
  jobTitle: string;
  url: string;
  descriptionInParagrapgs: ReadonlyArray<string>;
}

export type Sponsor =
  | {
      hasFeaturedPage: false;
      name: string;
      tier: SponsorTier;
      picture: string;
      url: string;
    }
  | {
      hasFeaturedPage: true;
      jobOffers: ReadonlyArray<JobOffer>;
      name: string;
      tier: SponsorTier;
      descriptionInParagraphs: ReadonlyArray<string>;
      picture: string;
      socials: Socials;
    };

export interface Ticket {
  name: string;
  price: number;
  url: string;
  perks: ReadonlyArray<string>;
  isSoldOut?: Nullish<boolean>;
  notice?: Nullish<string>;
}

export interface WelcomeBanner {
  isEnabled: boolean;
}

export interface FAQ {
  title: string;
  body: string;
}

export interface Raffle {
  url: string;
  descriptionInParagraphs: ReadonlyArray<string>;
}

interface PreviousEdition {
  name: string;
  url: string;
}

export interface Event {
  name: string;
  type: "lecture" | "workshop";
  speakers: ReadonlyArray<(typeof speakers)[number]["name"]>;
  descriptionInParagraphs: ReadonlyArray<string>;
  durationInMinutes?: Nullish<number>;
  place?: Nullish<string>;
  date?: Nullish<string>;
  language?: Nullish<string>;
}

interface FooterLink {
  title: string;
  href: string;
}

export interface CallForPapers {
  isEnabled: boolean;
  title: string;
  url: string;
}

export type SponssorsDossier =
  | {
      enabled: true;
      es: string;
      en: string;
    }
  | {
      enabled: false;
    };

export type Data = {
  title: string;
  date: Date;
  ticketsUrl: string;
  gallery: ReadonlyArray<string>;
  about: {
    descriptionInParagraphs: ReadonlyArray<string>;
    socials?: Socials;
  };
  venue: {
    title: string;
    description: string;
    address: string;
    mapUrl: string;
    pictures: ReadonlyArray<string>;
    city: string;
    howToArrive?: Nullish<
      Partial<{
        howToArriveByBus: ReadonlyArray<string>;
        howToArriveByBike: ReadonlyArray<string>;
        howToArriveByMetro: ReadonlyArray<string>;
      }>
    >;
  };
  speakers: ReadonlyArray<Speaker>;
  schedules: ReadonlyArray<Schedule>;
  team: Team;
  sponsors: ReadonlyArray<Sponsor>;
  sponsorsDossier: SponssorsDossier;
  events: ReadonlyArray<Event>;
  tickets: ReadonlyArray<Ticket>;
  previousEditions: ReadonlyArray<PreviousEdition>;
  lastEditionVideoUrl?: Nullish<string>;
  faq: ReadonlyArray<FAQ>;
  footerLinks: ReadonlyArray<FooterLink>;
  raffles: ReadonlyArray<Raffle>;
  welcomeBanner: WelcomeBanner;
  callForPapers: CallForPapers;
};
