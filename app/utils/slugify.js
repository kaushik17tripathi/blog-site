export default function slugify(title) {
  console.log(title)
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/(^-|-$)+/g, '');   // Remove leading and trailing hyphens
}
