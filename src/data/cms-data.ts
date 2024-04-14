import type { Nullable } from "../utils/nullable";
import type { Data, SponsorTier } from "./data.type";
import axios from "axios";

export interface CmsResponse {
  title: string;
  date: string;
  tickets_url: string;
  description: string;
  is_welcome_banner_enabled: boolean;
  socials: Socials;
  venue: Venue;
  sponsor_dossier: SponsorDossier;
  last_edition: LastEdition;
  faq: Faq[];
  footer_links: FooterLink[];
  call_for_papers: CallForPapers;
  previous_editions: PreviousEdition[];
  team: Team[];
  speakers: Speaker[];
  sponsors: Sponsor[];
  tickets: Ticket[];
}

export type Socials = {
  twitter: Nullable<string>;
  youtube: Nullable<string>;
  linkedin: Nullable<string>;
  website: Nullable<string>;
  mastodon: Nullable<string>;
  github: Nullable<string>;
  medium: Nullable<string>;
  mail: Nullable<string>;
  instagram: Nullable<string>;
  devto: Nullable<string>;
  twitch: Nullable<string>;
} | null;

export interface Venue {
  title: string;
  description: string;
  address: string;
  map_url: string;
  city: string;
  how_to_arrive: HowToArrive;
  pictures: any[];
}

export interface HowToArrive {
  by_bus: string;
  by_bike: string;
  by_subway: string;
}

export interface SponsorDossier {
  is_enabled: boolean;
  spanish: {
    url: string;
  };
  english: {
    url: string;
  };
}

export interface LastEdition {
  video_url: Nullable<string>;
  gallery: Picture[];
}

export interface Picture {
  url: string;
}

export interface Faq {
  title: string;
  body: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface CallForPapers {
  is_enabled: boolean;
  title: string;
  url: string;
}

export interface PreviousEdition {
  name: string;
  url: string;
}

export interface Team {
  name: string;
  type: string;
  position: string;
  description: string;
  socials: Socials;
  picture: Picture;
}

export interface Speaker {
  name: string;
  description: Nullable<string>;
  position: Nullable<string>;
  socials: Socials;
  picture: Picture;
}

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  url: string;
  has_featured_page: boolean;
  description: Nullable<string>;
  socials: Nullable<Socials>;
  job_offers: JobOffer[];
  picture: Picture;
}

export interface JobOffer {
  id: number;
  title: string;
  url: string;
  description: string;
}

export interface Ticket {
  name: string;
  price: number;
  is_sold_out: boolean;
  notice?: string;
  perks: Perk[];
}

export interface Perk {
  description: string;
}

const useCms = import.meta.env.USE_CMS;
const cmsHostname = import.meta.env.CMS_URL;

const cmsEndpoint = `${cmsHostname}/info`;

export async function getDataFromCms(): Promise<Data> {
  let data: Data;

  try {
    const response = await axios.get<CmsResponse>(cmsEndpoint);
    data = mapCmsResponseToDate(response.data);
  } catch (error) {
    const failOverData: Data = {
      title: "BiznagaFest",
      date: new Date(),
      description: "",
      callForPapers: {
        isEnabled: false,
        title: "",
        url: "",
      },
      events: [],
      faq: [],
      footerLinks: [],
      previousEditions: [],
      raffles: [],
      schedules: [],
      speakers: [],
      sponsors: [],
      sponsorsDossier: {
        enabled: false,
      },
      team: {
        organizers: [],
        staff: [],
      },
      tickets: [],
      ticketsUrl: "",
      venue: {
        title: "",
        description: "",
        address: "",
        city: "",
        mapUrl: "",
        pictures: [],
      },
      welcomeBanner: {
        isEnabled: false,
      },
      lastEdition: {
        gallery: [],
      },
    };

    data = failOverData;
  }

  return data;
}

function mapCmsResponseToDate(response: CmsResponse): Data {
  return {
    title: response.title,
    date: new Date(response.date),
    description: response.description,
    callForPapers: {
      isEnabled: response.call_for_papers.is_enabled,
      title: response.call_for_papers.title,
      url: response.call_for_papers.url,
    },
    faq: response.faq,
    footerLinks: response.footer_links,
    previousEditions: response.previous_editions,
    ticketsUrl: response.tickets_url,
    welcomeBanner: {
      isEnabled: response.is_welcome_banner_enabled,
    },
    socials: mapSocialsToData(response.socials),
    lastEdition: {
      gallery: response.last_edition.gallery.map((picture) =>
        prependHostnameToUrl(picture.url),
      ),
      lastEditionVideoUrl: response.last_edition.video_url || undefined,
    },
    speakers: response.speakers.map((speaker) => ({
      name: speaker.name,
      picture: prependHostnameToUrl(speaker.picture.url),
      description: speaker.description || undefined,
      position: speaker.position || undefined,
      socials: mapSocialsToData(speaker.socials),
    })),
    sponsors: response.sponsors.map((sponsor) => ({
      name: sponsor.name,
      tier: sponsor.tier,
      url: sponsor.url,
      hasFeaturedPage: sponsor.has_featured_page,
      description: sponsor.description || undefined,
      socials: mapSocialsToData(sponsor.socials),
      jobOffers: sponsor.job_offers,
      picture: prependHostnameToUrl(sponsor.picture.url),
    })),

    sponsorsDossier: {
      enabled: response.sponsor_dossier.is_enabled,
      es: prependHostnameToUrl(response.sponsor_dossier.spanish.url),
      en: prependHostnameToUrl(response.sponsor_dossier.english.url),
    },
    team: {
      organizers: response.team
        .filter((teamMember) => teamMember.type === "organizer")
        .map((teamMember) => ({
          name: teamMember.name,
          position: teamMember.position,
          description: teamMember.description,
          socials: mapSocialsToData(teamMember.socials),
          picture: prependHostnameToUrl(teamMember.picture.url),
        })),
      staff: response.team
        .filter((teamMember) => teamMember.type === "staff")
        .map((teamMember) => ({
          name: teamMember.name,
          position: teamMember.position,
          description: teamMember.description,
          socials: mapSocialsToData(teamMember.socials),
          picture: prependHostnameToUrl(teamMember.picture.url),
        })),
    },
    venue: {
      title: response.venue.title,
      description: response.venue.description,
      address: response.venue.address,
      city: response.venue.city,
      mapUrl: response.venue.map_url,
      pictures: response.venue.pictures.map((picture) =>
        prependHostnameToUrl(picture.url),
      ),
      howToArrive: {
        howToArriveByBike: response.venue.how_to_arrive.by_bike,
        howToArriveByBus: response.venue.how_to_arrive.by_bus,
        howToArriveByMetro: response.venue.how_to_arrive.by_subway,
      },
    },
    tickets: response.tickets.map((ticket) => ({
      name: ticket.name,
      price: ticket.price,
      isSoldOut: ticket.is_sold_out,
      notice: ticket.notice || undefined,
      perks: ticket.perks.map((perk) => perk.description),
      url: response.tickets_url,
    })),

    // TODO (David): Add the following properties to the CMS
    events: [],
    raffles: [],
    schedules: [],
  };
}

function mapSocialsToData(socials: Socials): Data["socials"] {
  if (!socials) {
    return undefined;
  }

  return {
    twitter: socials.twitter || undefined,
    youtube: socials.youtube || undefined,
    linkedin: socials.linkedin || undefined,
    website: socials.website || undefined,
    mastodon: socials.mastodon || undefined,
    github: socials.github || undefined,
    medium: socials.medium || undefined,
    mail: socials.mail || undefined,
    instagram: socials.instagram || undefined,
    devto: socials.devto || undefined,
    twitch: socials.twitch || undefined,
  };
}

function prependHostnameToUrl(url: string): string {
  return `${cmsHostname}${url}`;
}
