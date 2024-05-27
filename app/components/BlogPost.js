import styles from './BlogPost.module.css';

export default function BlogPost({ post }) {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date} by {post.author}</p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
