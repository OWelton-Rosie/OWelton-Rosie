<script>
    import { House, Briefcase, Book, Mail } from '@lucide/svelte';
</script>

<footer>
    <div class="icon-row">
        <a href="/" aria-label="Home">
            <House strokeWidth={2.5} />
        </a>

        <a href="/projects" aria-label="Projects">
            <Briefcase strokeWidth={2.5} />
        </a>

        <a href="/writing" aria-label="Writing">
            <Book strokeWidth={2.5} />
        </a>

        <a href="/contact" aria-label="Contact me">
            <Mail strokeWidth={2.5} />
        </a>
    </div>

    <p>Copyright © Oscar Welton-Rosie, 2026.</p>
</footer>

<style>
    p {
        text-align: center;
        font-size: 0.9em;
        color: #666;
        margin: 1em 0;
    }

    footer {
        text-align: center;
        padding-top: 2rem;
        margin-top: 4rem;
        font-size: 0.9rem;
        color: #6b7280;
        border-top: 1px solid #e5e7eb;
    }

    .icon-row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        gap: 18px;
    }

    .icon-row a {
        color: black;
        display: flex;
        transition: transform 0.15s ease;
    }

    .icon-row a:hover {
        transform: scale(1.2);
    }

    .icon-row :global(svg) {
        width: 28px;
        height: 28px;
    }
</style>