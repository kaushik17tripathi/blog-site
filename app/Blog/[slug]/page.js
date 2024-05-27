// app/blog/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPost from '../../components/BlogPost';
import slugify from '../../utils/slugify';
import { remark } from 'remark';
import html from 'remark-html';

async function getPost(slug) {
  const postsDirectory = path.join(process.cwd(), 'app/content/posts');
  const filenames = fs.readdirSync(postsDirectory);
  const filePath = filenames.find(filename => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    const { data } = matter(fileContents);
    return slugify(data.title) === slug;
  });
  const fileContents = fs.readFileSync(path.join(postsDirectory, filePath), 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...data,
    contentHtml,
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'app/content/posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map(filename => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    const { data } = matter(fileContents);
    const slug = slugify(data.title);
    return {
      params: { slug },
    };
  });

  return paths;
}

export default async function Page({ params }) {
  const post = await getPost(params.slug);

  return (
    <div>
      <BlogPost post={post} />
    </div>
  );
}
