// sanityClient.js
import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "ie36z7qr",
  apiVersion: "2021-08-31",
  dataset: "production",
  useCdn: true,
  // other configuration options
});

export default sanityClient;
