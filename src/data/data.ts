import { USE_CMS } from "astro:env/client";
import { getDataFromCms } from "./cms-data";
import { LOCALDATA } from "./local-data";

export const DATA = USE_CMS ? await getDataFromCms() : LOCALDATA;
