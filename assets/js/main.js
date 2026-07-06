const data = window.siteData;

const $ = (selector) => document.querySelector(selector);

function textNode(tag, text, className) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = text;
  return el;
}

const icons = {
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.75 5.75h16.5v12.5H3.75z"/><path d="m4.5 6.5 7.5 6 7.5-6"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75a9.25 9.25 0 0 0-2.92 18.03c.46.08.63-.2.63-.44v-1.6c-2.56.56-3.1-1.1-3.1-1.1-.42-1.08-1.03-1.37-1.03-1.37-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.42 2.18 1.01 2.7.77.09-.6.33-1.01.6-1.24-2.04-.23-4.2-1.02-4.2-4.55 0-1 .36-1.83.95-2.47-.1-.23-.41-1.17.09-2.44 0 0 .78-.25 2.54.94A8.8 8.8 0 0 1 12 6.39c.78 0 1.55.1 2.28.3 1.76-1.19 2.53-.94 2.53-.94.51 1.27.19 2.21.1 2.44.59.64.95 1.46.95 2.47 0 3.54-2.16 4.31-4.21 4.54.34.29.64.86.64 1.74v2.59c0 .24.17.52.64.43A9.25 9.25 0 0 0 12 2.75Z"/></svg>',
  university: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9.5 12 4l9 5.5-9 5.5-9-5.5Z"/><path d="M6 11.6v5.2c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-5.2"/><path d="M21 9.5v6"/></svg>',
  lab: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3.75h6"/><path d="M10 4v5.2l-4.6 8A2 2 0 0 0 7.1 20.25h9.8a2 2 0 0 0 1.7-3.05l-4.6-8V4"/><path d="M8 15.25h8"/></svg>'
};

function createIconLink(link, compact = false) {
  const anchor = document.createElement('a');
  anchor.href = link.href;
  anchor.rel = 'me noopener noreferrer';
  anchor.className = compact ? 'icon-link compact' : 'icon-link';
  anchor.setAttribute('aria-label', link.label);
  if (link.href.startsWith('http')) anchor.target = '_blank';
  anchor.innerHTML = `${icons[link.icon] || icons.university}<span>${link.label}</span>`;
  return anchor;
}

function renderLinks() {
  const top = $('#contact-icons');
  const footer = $('#footer-links');
  data.person.links.forEach((link) => {
    const item = document.createElement('li');
    item.append(createIconLink(link));
    top.append(item);

    const footerItem = document.createElement('li');
    footerItem.append(createIconLink(link, true));
    footer.append(footerItem);
  });
}

function renderTags() {
  const tags = $('#interest-tags');
  data.interests.forEach((interest) => tags.append(textNode('li', interest, 'tag')));
}

function renderBio() {
  const container = $('#bio-text');
  data.bio.forEach((paragraph) => container.append(textNode('p', paragraph)));
}

function renderResearchFocus() {
  const container = $('#research-focus');
  data.researchFocus.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.append(textNode('h3', item.title));
    article.append(textNode('p', item.text));
    container.append(article);
  });
}

function renderTimeline() {
  const list = $('#timeline');
  data.timeline.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'experience-item';

    const logo = document.createElement('div');
    logo.className = 'experience-logo';
    const img = document.createElement('img');
    img.src = item.logo;
    img.alt = '';
    img.loading = 'lazy';
    img.onerror = () => {
      logo.textContent = item.fallback || item.title.slice(0, 2).toUpperCase();
      logo.classList.add('fallback');
    };
    logo.append(img);

    const body = document.createElement('div');
    body.className = 'experience-body';
    body.append(textNode('strong', item.title));
    body.append(textNode('span', item.meta));
    if (item.type) body.append(textNode('em', item.type));

    li.append(logo, body);
    list.append(li);
  });
}

function allPublications() {
  return [
    ...data.publications.journals.map((pub) => ({ ...pub, type: 'journal', label: 'Journal article' })),
    ...data.publications.conferences.map((pub) => ({ ...pub, type: 'conference', label: 'Conference paper' }))
  ].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
}

function renderPublications(filter = 'all') {
  const list = $('#publication-list');
  list.innerHTML = '';
  allPublications()
    .filter((pub) => filter === 'all' || pub.type === filter)
    .forEach((pub) => {
      const item = document.createElement('li');
      item.className = 'publication-item';
      item.innerHTML = `
        <div class="pub-year">${pub.year}</div>
        <div class="pub-body">
          <div class="pub-topline"><span class="pub-type">${pub.label}</span><span>${pub.venue}</span></div>
          <strong>${pub.link ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer">${pub.title}</a>` : pub.title}</strong>
          ${pub.authors ? `<p class="pub-authors">${pub.authors}</p>` : ''}
        </div>
      `;
      list.append(item);
    });
}

function setupPublicationTabs() {
  document.querySelectorAll('.tab-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      button.classList.add('is-active');
      button.setAttribute('aria-selected', 'true');
      renderPublications(button.dataset.filter);
    });
  });
}

function renderTalkList(id, items) {
  const list = document.getElementById(id);
  items.forEach((talk) => {
    const item = document.createElement('li');
    item.className = 'talk-item';
    item.append(textNode('time', String(talk.year)));
    const body = document.createElement('span');
    const title = document.createElement('strong');
    if (talk.link) {
      const anchor = document.createElement('a');
      anchor.href = talk.link;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = talk.title;
      title.append(anchor);
    } else {
      title.textContent = talk.title;
    }
    const venue = textNode('span', talk.venue);
    body.append(title, venue);
    item.append(body);
    list.append(item);
  });
}

function renderQuotes() {
  const container = $('#quotes');
  data.quotes.forEach((quote) => {
    const block = document.createElement('blockquote');
    block.append(textNode('p', `“${quote.text}”`));
    block.append(textNode('cite', `— ${quote.author}`));
    container.append(block);
  });
}

function setupNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('is-open', !expanded);
  });
}

function initializePage() {
  document.title = `${data.person.name} | Academic Website`;
  $('#person-name').textContent = data.person.name;
  $('#person-title').textContent = data.person.title;
  $('#person-tagline').textContent = data.person.tagline;
  $('#profile-photo').src = data.person.profileImage;
  $('#profile-photo').alt = data.person.imageAlt;
  $('#email-link').href = `mailto:${data.person.email}`;
  $('#email-link').textContent = data.person.email;
  $('#research-objective').textContent = data.objective;
  $('#year').textContent = new Date().getFullYear();

  renderLinks();
  renderTags();
  renderBio();
  renderResearchFocus();
  renderTimeline();
  renderPublications();
  setupPublicationTabs();
  renderTalkList(
    'talks-list',
    [...data.talks.invited, ...data.talks.other].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
  );
  renderQuotes();
  setupNavigation();
}

initializePage();
