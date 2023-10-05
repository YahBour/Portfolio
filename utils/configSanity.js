import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "itdmx9sl",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: true,
});
