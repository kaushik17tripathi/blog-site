# Blog Site

Welcome to the Blog Site, a blog site built with Next.js, leveraging `getStaticProps` for static generation and Markdown files for content management.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) 

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kaushik17tripathi/blog-site.git
   cd blog-site
   
 2. **Install Dependencies:** 
    ```bash
    npm install
    
 3. **Run the development server** 
    ```bash
    npm run dev

 4. **Open your browser and navigate to:**
       
     http://localhost:3000

## Key Features

### 1. Static Site Generation with `getStaticProps`
- The blog site leverages Next.js's static site generation capabilities.
- Blog posts are fetched from Markdown files stored in the `content/posts` directory.
- Each blog post is pre-rendered as a static page for optimal performance and SEO.

### 2. Markdown Content Management
- Blog content is written in Markdown files.
- Metadata for each post (e.g., title, date, author, summary) is included in the front matter of each Markdown file.

### 3. Dynamic Routing with `getStaticPaths`
- Dynamic routes are generated for individual blog posts based on their slugs.
- Each blog post has its own URL derived from its title.

### 4. Real-time Search Functionality
- A search input is provided on the homepage to filter blog posts as the user types.
- The blog list updates in real-time to display only the posts that match the search query.

### 5. Responsive Design
- The site is fully responsive, ensuring a good user experience on both desktop and mobile devices.
- CSS modules are used for styling, providing scoped and maintainable CSS.

### 6. React Icons Integration
- The project uses React Icons for consistent and scalable icons across the site.
- Icons are included in the navigation bar, such as a home icon for easy navigation.

### 7. Custom Layout Component
- A reusable layout component is implemented to provide a consistent structure across all pages.
- The layout includes a header, main content area, and footer.

### 8. Client-side State Management
- Client-side state is used to manage the search query and filter blog posts dynamically.
- This enhances the user experience by providing instant feedback as the user types.

  
![image](https://github.com/kaushik17tripathi/blog-site/assets/95939109/8655a80b-fd5a-462f-b60a-973de0cbccd1)


![image](https://github.com/kaushik17tripathi/blog-site/assets/95939109/6f6be401-08b1-4367-b175-366323a6fdb3)


