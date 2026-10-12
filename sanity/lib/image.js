import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = client ? imageUrlBuilder(client) : null;

export function urlForImage(source) {
  return source && builder ? builder.image(source) : null;
}
