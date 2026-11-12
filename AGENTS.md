# AGENTS.md

## Welcome

This project is open to contributions of any kind — code, design, documentation, ideas, bug reports. If you want to make it better, you're welcome here.

---

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. There is nothing to install — serve the folder with `python -m http.server 4173` and open http://localhost:4173
4. Create a feature branch from `dev`: `git checkout -b feat/your-feature-name`
5. Make your changes
6. Check the page at desktop and phone width, with an empty browser console
7. Submit a pull request to `dev`

---

## Project Conventions

- **No build step, no dependencies.** Plain HTML, CSS and JavaScript. Adding a package needs a strong reason.
- **Tokens first.** Colors, type sizes, spacing and radii live in `styles/tokens.css`. Don't hard-code values in section styles.
- **One block per section.** New page sections get their own block in `styles/sections.css`; shared pieces (buttons, eyebrow, header) belong in `styles/base.css`.
- **Illustrations are inline SVG** drawn from the two logo motifs: slanted hatching and the yellow `#ebd801`. Keep new visuals in that language.
- **Content is factual.** Company figures, approval numbers and contact details come from the client. Don't invent claims, certifications or partners.
- **Works without JavaScript.** Scroll-reveal styles only apply under the `.js` class, so content stays visible if the script fails.

---

## Code Style

- **Readable code over clever code.** If you have to re-read it twice, simplify it.
- **No decorative comments.** No section headers, no ascii dividers. Brief function docs only when the name isn't self-explanatory.
- **English everywhere.** Code, comments, docs, UI strings — all English.
- **Design with intention.** If you're touching UI, make it look good. No default/generic styling.

---

## Branch Naming

```
feat/short-description    → new features
fix/short-description     → bug fixes
refactor/short-description → code improvements
docs/short-description    → documentation updates
```

---

## Commit Messages

We use conventional commits:

```
feat: add ukrainian language version
fix: correct stat counter on reduced motion
refactor: split section styles
docs: update setup instructions
```

Keep them lowercase, concise, and meaningful.

---

## Pull Request Guidelines

- One logical change per PR
- Describe **what** you changed and **why**
- Include screenshots for UI changes, desktop and mobile
- Keep PRs small — easier to review, faster to merge

---

## Reporting Issues

Found a bug or have an idea? Open an issue with:

- Clear title
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if relevant

---

## Philosophy

- Ship working software in small increments
- Readability and maintainability over premature optimization
- Every contribution matters, no matter how small
