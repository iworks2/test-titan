---
name: Blog Post Workflow
about: Checklist for migrating or creating a new blog post
title: "[Blog] Post Title Here"
labels: ["blog"]
assignees: []
---

# 📝 Blog Post Workflow

## Phase 1 – Content Pull & Draft
- [ ] Identify WordPress post (or new topic)
- [ ] Copy metadata (title, author, date, categories, tags)
- [ ] Create `.mdx` file with frontmatter
- [ ] Paste article body
- [ ] Add TOC block (or confirm auto-TOC)

## Phase 2 – Image Planning
- [ ] Run Image Suggester prompt
- [ ] Collect placement + concept + alt + caption + Figure code
- [ ] Approve 1–3 images
- [ ] Insert `<Figure />` placeholders

## Phase 3 – Image Creation
- [ ] Generate PNGs in flat vector sketch style, TruckingMBA palette
- [ ] Save to `/public/images/` or Strapi Media

## Phase 4 – Assembly
- [ ] Replace placeholders with `<Figure />`
- [ ] Verify alt text + captions
- [ ] Proofread formatting + compliance dates

## Phase 5 – Publish
- [ ] File-based: Commit `.mdx` + images → Astro rebuild
- [ ] Strapi: Copy to CMS + publish
- [ ] Verify TOC, images, metadata