import { getDataFromCms } from "./cms-data";
import { LOCALDATA } from "./local-data";

const useCms = import.meta.env.USE_CMS;

export const DATA = useCms ? await getDataFromCms() : LOCALDATA;
