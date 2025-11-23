<script>
    export let title = '';
  </script>
  
  <header>
    <nav class="nav-buttons">
      <a href="/" class="nav-btn">Home</a>
      <a href="/about" class="nav-btn">About me</a>
      <a href="/speedcubing" class="nav-btn">Speedcubing</a>
      <a href="/contact" class="nav-btn">Contact</a>
      <a href="/photos" class="nav-btn">Photos</a>
      <a href="/blog" class="nav-btn">Blog</a>
    </nav>


    {#if title}
      <h1>{title}</h1>
    {/if}
  </header>
  
  <style>
    header h1 {
      text-align: center;
      font-size: 2rem;
      margin-top: 2rem;
    }
  
    .nav-buttons {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
  
    .nav-btn {
      background-color: #e5e7eb;
      color: #1d4ed8;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-weight: 500;
      font-size: 0.95rem;
      text-decoration: none;
      transition: background-color 0.2s ease, color 0.2s ease;
      border: 1px solid #d1d5db;
    }
  
    .nav-btn:hover {
      background-color: #d1d5db;
      color: #111827;
    } 
  </style>
  