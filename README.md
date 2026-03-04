````markdown
# Frontend Mentor - News homepage solution

This is my solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). The goal of this project was to build a responsive news card layout that matches the provided design and demonstrates responsive techniques and accessible interactive states.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size (mobile-first)
- See hover and focus states for all interactive elements on the page
- Navigate content comfortably with keyboard and screen readers

### Screenshot

Desktop

![](/design/Screenshot_Desktop.png)

Mobile

![](/design/Screenshot-mobile.png)

### Links

- Solution URL: [https://github.com/why-not-phoenix/responsive-news-homepage](https://github.com/why-not-phoenix/responsive-news-homepage)
- Live Site URL: [https://why-not-phoenix.github.io/responsive-news-homepage/](https://why-not-phoenix.github.io/responsive-news-homepage/)

## My process

### Built with

- Semantic HTML5
- CSS custom properties
- Flexbox for small layouts
- CSS Grid for the desktop card grid
- Mobile-first responsive approach

### What I learned

During this project I focused on building a layout that adapts cleanly between mobile and desktop. Key takeaways:

- Practical use of CSS Grid to create the multi-column desktop layout while keeping a simple column flow for mobile.
- Designing hover and focus states so interactive elements are obvious for both mouse and keyboard users.
- Managing spacing and typography with CSS custom properties for consistent scaling across breakpoints.

Example: responsive grid used on the desktop layout

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);
}
@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```

### Continued development

- Improve keyboard focus outlines and test with a screen reader to refine accessibility further.
- Add simple animations for subtle micro-interactions with prefers-reduced-motion checks.
- Extract repeatable components and variables into a design tokens file for reuse across projects.

### Useful resources

- [MDN CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - Clear reference for Grid concepts used here.
- [WebAIM Keyboard Accessibility](https://webaim.org/techniques/keyboard/) - Helpful checklist for making interactive elements keyboard-friendly.

### AI Collaboration

I used AI tools sparingly as an assistant for phrasing and for quick checks while writing documentation. (Github Copilot and Codex)

## Author

- Frontend Mentor - [@why-not-phoenix](https://www.frontendmentor.io/profile/why-not-phoenix)
- Twitter - [@dominion_onoja](https://www.twitter.com/dominion_onoja)

## Acknowledgments

Thanks to the Frontend Mentor design and community for the challenge and inspiration.
````
