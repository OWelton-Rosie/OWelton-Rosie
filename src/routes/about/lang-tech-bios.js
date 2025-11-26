export const technologies = [
    {
      name: 'JavaScript',
      icon: 'https://www.w3schools.com/js/img_javascript_480.jpg',
      bio: 'JavaScript is my primary programming language for web development.'
    },
    {
      name: 'SvelteKit',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
      bio: 'SvelteKit is a modern framework for building fast, reactive web apps.'
    },
    {
      name: 'React',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      bio:  'React is a library for building user interfaces.'
    },
    {
      name: 'Python',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      bio:  'Python is a versatile programming language I use for scripting.'
    },
    {
      name: 'HTML5',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      bio: 'HTML5 is the backbone of web pages. I use it to structure content.'
    },
    {
      name: 'CSS3',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      bio: 'CSS3 allows me to style web pages and create responsive, visually appealing designs.'
    },
    {
      name: 'Node.js',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      bio:  'Node.js enables me to execute JavaScript files.'
    },
    {
      name: 'Visual Studio Code',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
      bio: 'Visual Studio Code is my preferred code editor, offering powerful features and third-party integrations.'
    },
    {
      name: 'GitHub',
      icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
      bio: 'GitHub is where I host and manage my projects and collaborate with others.'
    },
    {
      name: 'Cloudflare pages',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png',
      bio: 'I use Cloudflare products including Pages, CDN and DNS to deploy and manage my projects.'
    }
  ];
  
  // Function to toggle selected technology
  export function toggleSelected(current, clicked) {
    // If clicking the same icon, deselect; otherwise, select new one`
    return current?.name === clicked.name ? null : clicked;
  }
  