# Copilot Instructions for AI Coding Agents

## Project Overview
This project currently consists of a single HTML file: `index.html`. It is a static website with a simple structure, containing a header, navigation, article section, and footer.

## Key Files
- `index.html`: The main and only file. Contains all markup for the site.

## Architecture & Patterns
- No build system, frameworks, or external dependencies are present.
- All content is static and directly written in HTML.
- No JavaScript, CSS, or asset directories are present as of now.
- The HTML uses semantic tags: `<section>`, `<nav>`, `<article>`, and `<footer>`.
- Comments like `<!-- #region -->` are used for logical grouping in the markup.

## Developer Workflows
- No build, test, or deployment scripts are present.
- Editing `index.html` is the primary workflow.
- No custom commands or project-specific conventions beyond standard HTML practices.

## Conventions
- Use semantic HTML5 elements for structure.
- Group related markup with comments if needed (e.g., `<!-- #region -->`).
- Keep the markup readable and organized.

## Extending the Project
- If adding CSS or JS, create separate files and reference them from `index.html`.
- For multi-page support, add new HTML files and update navigation links accordingly.

## Example Pattern
```html
<section>
    <h1>Section Title</h1>
    <p>Section content...</p>
</section>
```

---
If the project grows, update this file to document new workflows, conventions, or architectural decisions.