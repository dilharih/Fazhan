# Fazhan P. — Portfolio

A responsive React portfolio presenting Fazhan's computer science background, project work, experience, skills, education, and contact details.

The visual theme is inspired by a dark, editorial developer portfolio: warm off-white typography, restrained burnt-orange accents, crisp sans-serif headings, and monospaced navigation details.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, or preview one with `npm run preview`.

## Project structure

```text
src/
  components/
    ProjectCard.jsx
    SectionHeading.jsx
  data/
    portfolio.js
  App.jsx
  App.css
  index.css
```

- `src/data/portfolio.js` holds the resume-backed project, experience, leadership, skill, and education content.
- `src/components/` contains reusable presentation components.
- `src/App.jsx` composes the page sections and navigation.
- `src/App.css` contains page and responsive layout styles; `src/index.css` contains global styles and design tokens.

## Personalize the portfolio

Update `src/data/portfolio.js` to change the profile details and add verified project, education, or experience information. Contact links and the introductory copy live in `src/App.jsx`. Do not add project repository or demo links until verified.

## Work history

See [SESSION_LOG.md](./SESSION_LOG.md) for a dated record of work completed in each session.
