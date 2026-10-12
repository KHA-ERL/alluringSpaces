export const projectsQuery = `*[_type == "project" && defined(slug.current)] | order(featured desc, year desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  location,
  year,
  summary,
  coverImage,
  gallery,
  clips[]{caption, file},
  externalVideoUrl,
  featured
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  location,
  year,
  summary,
  coverImage,
  gallery,
  clips[]{caption, file},
  externalVideoUrl,
  body
}`;

export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  publishedAt
}`;

export const environmentQuery = `*[_type == "environment"][0] {
  completedSpaces,
  designAwards,
  trustedArtisans,
  citiesServed,
  whatsappNumber
}`;

export const socialsQuery = `*[_type == "socials"][0] {
  tiktokUrl,
  instagramUrl,
  facebookUrl
}`;
