# Antonio Emanuele Cina - Academic Website

Static GitHub Pages version of the personal academic website.

## Structure

```text
index.html
assets/
  css/
    style.css       # main visual system
    resume.css      # compatibility wrapper importing style.css
  img/
    profile.jpg
  js/
    site-data.js    # editable site content
    main.js         # rendering, filters, navigation
```

## How to edit content

Most repeatable content is in `assets/js/site-data.js`.

Edit this file to update:

- name, affiliation, email, and profile links
- research tags
- bio paragraphs
- education and professional experience rows
- publication entries
- talk entries
- quotes

The HTML should only need changes when adding a new page-level section.

## Publications

Publications are rendered from `site-data.js` and displayed through a compact filter interface.

To add a journal article, add an object to:

```js
publications: {
  journals: [
    { title: "Paper title", venue: "Journal name", year: 2026 }
  ]
}
```

To add a conference paper, add an object to:

```js
publications: {
  conferences: [
    { title: "Paper title", venue: "Conference name", year: 2026 }
  ]
}
```

The filters are generated automatically.

## Experience logos

The CV section uses LinkedIn-style rows with a small logo box. Each entry has:

```js
{
  title: "University name",
  meta: "Years · Role",
  type: "Education or Professional experience",
  logo: "https://...",
  fallback: "UG"
}
```

If a logo URL fails, the fallback initials are shown.

## Design notes

The current direction keeps the large identity-driven hero inspired by the supplied screenshot, but the typography is more restrained than the earlier draft. Sections now use balanced full-width content instead of a heavy left-title column, so publications, talks, and quotes get more space.

## Deploying on GitHub Pages

Copy the project files to the repository root and enable GitHub Pages from the repository settings. No build step is required.

## Content to verify

The current data still refers to University of Genoa and the `unige.it` email address. Update `assets/js/site-data.js` if the current affiliation should be University of Trieste.
