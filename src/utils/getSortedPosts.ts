import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: CollectionEntry<"posts">[]) =>
  posts
    .filter(({ data }) => !data.published)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.posted).getTime() / 1000) -
        Math.floor(new Date(a.data.posted).getTime() / 1000)
    );

export default getSortedPosts;
