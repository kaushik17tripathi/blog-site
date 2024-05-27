import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogList from '../app/components/BlogList';
import slugify from '../app/utils/slugify';

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'app/content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    if (!data) {
      console.error(`No front matter found in file: ${filename}`);
      return null;
    }

    const slug = slugify(data.title);
    return {
      slug,
      ...data,
      content, // Include the content if needed
    };
  }).filter(post => post !== null); // Filter out any null posts

  return posts;
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
