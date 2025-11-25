<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <svelte:head>
    <title>Blog | Oscar Welton-Rosie</title>
  </svelte:head>
  
  <Header title="Oscar's blog" />

  <ul class="blog-ul">
    <li class="blog-li">
        <a href="/blog/why-national-s-proposed-social-media-ban-will-fail">Why National's proposed social media ban will fail</a>
        <p class="blog-li-date">Posted by Oscar on 21st August, 2025</p>
    </li>

    <li class="blog-li">
        <a href="/blog/here-s-what-s-wrong-with-axing-ncea">Here's what's wrong with axing NCEA</a>
        <p class="blog-li-date">Posted by Oscar on 8th August 2025</p>
    </li>

    <li class="blog-li">
        <a href="/blog/hello-world">Hello world</a>
        <p class="blog-li-date">Posted by Oscar on 16th June 2025</p>
    </li>
</ul>

  
  <Footer />

  <style>
/* Blog post list */
.blog-ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 2rem;
}

.blog-ul .blog-li {
    margin-bottom: 0.9rem;
    padding: 0.6rem 0.8rem;
    background-color: #fff;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    /* subtle shadow for depth */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.blog-ul .blog-li a {
    display: block;
    color: #2563eb;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease, text-decoration 0.2s ease;
}

.blog-ul .blog-li a:hover {
    color: #1d4ed8;
    text-decoration: underline; /* subtle visual cue */
}

/* Add a subtle divider between posts */
.blog-ul .blog-li + .blog-li {
    margin-top: 0.5rem;
}

.blog-li-date {
    font-size: 0.9rem;
    text-align: left;
    color: #6b7280; /* subtle gray for less harsh text */
    font-style: italic;
    margin-top: 3px;
    margin-bottom: 0px
}
  </style>
  
 