import type { Nullish } from "../utils/nullish";

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
  description?: Nullish<string>;
  socials?: Socials;
  picture: string;
};

export interface TeamMember {
  name: string;
  position?: Nullish<string>;
  description?: Nullish<string>;
  socials?: Socials;
  picture: string;
}

export interface Team {
  organizers: ReadonlyArray<TeamMember>;
  staff: ReadonlyArray<TeamMember>;
}

export type SponsorTier =
  | "gold"
  | "silver"
  | "bronze"
  | "media"
  | "food"
  | "community"
  | "supporter";

export interface JobOffer {
  title: string;
  url: string;
  description: string;
}

export interface Sponsor {
  hasFeaturedPage: boolean;
  jobOffers: ReadonlyArray<JobOffer>;
  name: string;
  tier: SponsorTier;
  description?: Nullish<string>;
  picture: string;
  socials: Socials;
  url: string;
}

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
  description: string;
}

export interface PreviousEdition {
  name: string;
  url: string;
}

type SpeakerName = string;
export interface Event {
  name: string;
  type: "lecture" | "workshop";
  speakers: ReadonlyArray<SpeakerName>;
  description?: Nullish<string>;
  durationInMinutes?: Nullish<number>;
  place?: Nullish<string>;
  date?: Nullish<string>;
  language?: Nullish<string>;
}

export interface FooterLink {
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

export interface LastEdition {
  lastEditionVideoUrl?: Nullish<string>;
  gallery: ReadonlyArray<string>;
}

export interface ScheduleItem {
  kind: "break" | "nobreak";
  type?: Nullish<"lecture" | "workshop">;
  start: string;
  end: string;
  title: string;
  subtitle?: Nullish<string>;
  description?: Nullish<string>;
  location?: Nullish<string>;
}

export type Data = {
  title: string;
  date: Date;
  ticketsUrl: string;
  description: string;
  socials?: Socials;
  venue: {
    title: string;
    description: string;
    address: string;
    mapUrl: string;
    pictures: ReadonlyArray<string>;
    city: string;
    howToArrive?: Nullish<
      Partial<{
        howToArriveByBus: string;
        howToArriveByBike: string;
        howToArriveByMetro: string;
      }>
    >;
  };
  companyTicketsNotice: {
    enabled: boolean;
    title: string;
    description: string;
  };
  speakers: ReadonlyArray<Speaker>;
  schedule: ReadonlyArray<ScheduleItem>;
  team: Team;
  sponsors: ReadonlyArray<Sponsor>;
  sponsorsDossier: SponssorsDossier;
  events: ReadonlyArray<Event>;
  tickets: ReadonlyArray<Ticket>;
  previousEditions: ReadonlyArray<PreviousEdition>;
  lastEdition?: Nullish<LastEdition>;
  faq: ReadonlyArray<FAQ>;
  footerLinks: ReadonlyArray<FooterLink>;
  raffles: ReadonlyArray<Raffle>;
  welcomeBanner: WelcomeBanner;
  callForPapers: CallForPapers;
};
