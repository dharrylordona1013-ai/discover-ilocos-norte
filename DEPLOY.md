# Discover Ilocos Norte — zero-cost deployment

## Easiest route: GitHub + Cloudflare Pages

1. Create a GitHub account if you do not already have one.
2. Create a new repository named `discover-ilocos-norte`.
3. Upload all files in this folder to the repository.
4. In Cloudflare: Workers & Pages → Create application → Pages → Connect to Git.
5. Select the GitHub repository.
6. Build command: `npm run build`
7. Build output directory: `dist`
8. Deploy.

Cloudflare will give the project a free `*.pages.dev` address. If the project name is available, use `discoverilocosnorte` so the address becomes:
`https://discoverilocosnorte.pages.dev`

## Google search

After deployment, open Google Search Console, add the exact deployed URL, verify ownership, and submit:
`https://discoverilocosnorte.pages.dev/sitemap.xml`

Important: update `index.html`, `public/robots.txt`, `public/sitemap.xml`, and the destination canonical URLs if your actual Pages URL is different.

Google indexing is free, but no site can be guaranteed a particular ranking or indexing speed.
