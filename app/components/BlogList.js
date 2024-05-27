'use client';
import Link from 'next/link';

import styles from './BlogList.module.css';
import { useState } from 'react';

export default function BlogList({ posts }) {
  const [searchPosts, setSearchPosts] = useState('');

  const handleChange = (e) => {
    setSearchPosts(e.target.value);
  }
  
  if (searchPosts) {
    posts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchPosts.toLowerCase());
    });
  }
  return (
    < >
      <div className='search-container'>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <div className={styles.blogList}>
        {posts.map(post => (
          <div key={post.slug} className={styles.blogPost} >
            <h2>
              <Link href={`/Blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.summary}</p>
            <small>{post.date} by {post.author}</small>
          </div>
        ))}
      </div>
    </>
  );
}
