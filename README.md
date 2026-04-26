# Lauren Mann Portfolio

A simple static developer portfolio built with HTML, CSS, and JavaScript. This site introduces who I am, highlights a few projects, and shares what I am currently learning as I continue building my development skills.

## Live Site

Live site: https://lrmann818.github.io

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages
- Static assets in the `assets/` directory

## Features

- Responsive layout for desktop and mobile screens
- Dark/sunset theme toggle with saved theme preference
- Project showcase featuring Lore Ledger and my first Stardew Valley mod
- Accessible skip link and keyboard-friendly navigation
- Tabbed content sections for About, Projects, Learning, and Contact
- Metadata for social previews, including Open Graph and Twitter card image assets
- No inline scripts
- Basic CSP/security-minded setup through HTML meta tags and external assets

## Local Development

This project does not require a build step or package install.

To run it locally with VS Code Live Server:

1. Open this repository in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Edit `index.html`, `styles.css`, or `script.js`, then refresh the browser if needed.

You can also open `index.html` directly in a browser, but Live Server gives a smoother local preview workflow.

## Project Structure

```text
.
├── assets/
│   ├── GitHub_Invertocat_Black.svg
│   ├── GitHub_Invertocat_White.svg
│   ├── alt-icon.png
│   ├── apple-touch-icon.png
│   ├── darkThemeIcon.svg
│   ├── envelope.svg
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── icon.PNG
│   ├── initials-transparent.png
│   ├── lightThemeIcon.svg
│   ├── lore-ledger-icon.png
│   ├── lore-ledger-logo.png
│   ├── nav-name-transparent.png
│   ├── profile.jpg
│   ├── profile.png
│   ├── social-preview.png
│   └── stardew-motorcycle-mod.gif
├── index.html
├── script.js
├── styles.css
└── README.md
```

- `index.html` contains the page content, metadata, CSP meta tag, and section markup.
- `styles.css` contains the responsive layout, themes, and visual styling.
- `script.js` handles tab switching, hash updates, theme switching, and theme-aware icons.
- `assets/` contains images, icons, and project media used by the site.

## Purpose and What I Learned

This portfolio is a learning project as much as it is a personal site. It gives me one place to introduce myself, document what I am building, and practice the fundamentals of shipping a small static website.

While building it, I practiced:

- Writing clearer HTML structure with landmarks, sections, and useful alt text
- Creating a responsive layout that works on desktop and mobile screens
- Managing a theme toggle with JavaScript and saved user preference
- Keeping the site lightweight without a framework or build step
- Preparing a static site for GitHub Pages deployment

## Accessibility Notes

- Includes a skip link that appears on focus and jumps to the main content.
- Uses semantic landmarks such as `header`, `nav`, `main`, `section`, and `footer`.
- Uses `aria-current` for the active navigation item.
- Uses `hidden` on inactive content panels so only the active section is exposed.
- Uses descriptive alt text for meaningful images and empty alt text for decorative icons.
- Theme toggle includes an accessible label that names the next available theme.

## Deployment Notes

This is a static site and is ready for GitHub Pages hosting without a build step.

### GitHub Pages

- Deployment URL: https://lrmann818.github.io
- Suggested setup: deploy from the `main` branch and the repository root.
- Build command: none.
- Publish directory: repository root.
- The canonical URL, `og:url`, and `twitter:url` metadata in `index.html` are set to the GitHub Pages URL.
- GitHub Pages does not support custom HTTP response headers from this repository alone. The current CSP is provided by a `<meta http-equiv="Content-Security-Policy">` tag in `index.html`.

## Future Polish Ideas

This is my personal portfolio v1. It is intentionally small and focused, with room to grow as I build more projects and continue learning.

Possible future improvements:

- Add more project write-ups as the portfolio grows
- Refine the social preview image if the site branding changes
- Add a short notes or changelog section if the project keeps evolving
