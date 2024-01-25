// sanityClient.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ie36z7qr", // find this in your sanity.json
  dataset: "production", // or whatever your dataset is named
});
