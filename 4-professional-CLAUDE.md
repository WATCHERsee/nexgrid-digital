# Project: NexGrid Digital — IT & Marketing Agency Website

## Business Overview
NexGrid Digital is a B2B agency offering IT solutions and digital marketing services to growing businesses. Corporate clients evaluating an agency want to see competence and results fast — they're skimming, not reading. The website's job is to communicate efficiency, capability, and trust through clean structure and clear proof points (not decoration).

Target audience: business owners, marketing directors, startups needing IT/marketing partners.

Core services to showcase:
- Web & software development
- Digital marketing / SEO
- IT consulting & infrastructure
- Branding & growth strategy

## Design Theme: Professional

### Color Palette
- Base: White (#FFFFFF), Gray (#F4F5F7, #6B7280)
- Accent: Blue (#2F5DFF) — no more than one additional accent color
- Rule: High contrast, no gradients, no decorative color use.

### Typography
- Sans-serif only throughout (Inter, Roboto, or Lato)
- Consistent type scale — clear hierarchy between H1/H2/body, no font mixing

### Layout Principles
- Strict grid system, evenly spaced columns
- Sticky navigation with clear CTA button ("Get a Quote" / "Book a Call")
- Data/stats sections (e.g., "200+ projects delivered", "98% client retention")
- Testimonial carousel, not static quote blocks

### Signature Elements
- Icon-based feature lists (simple line icons, not illustrations)
- Cards with subtle shadows and consistent corner radius (small, not fully rounded)
- No decorative fluff — every element on the page serves a functional purpose
- Clear before/after or process-step diagrams for services

### Required Pages/Sections
1. Hero (clear value proposition + primary CTA)
2. Services (IT, marketing, branding — icon + short description cards)
3. Why Us / Stats section (numbers-driven credibility)
4. Case Studies / Portfolio (results-focused, metrics included)
5. Testimonials (carousel format)
6. Contact / Get a Quote (form + calendar booking link)

## Development Workflow

### Design Phase — Use Stitch MCP
Use the Stitch MCP server to generate and iterate on visual design concepts before writing code. Provide Stitch with this file's theme description (colors, typography, layout principles) as context for every design generation request. Do not hand-code layout decisions — generate options via Stitch first, then select and refine.

### Build Phase — Use SpecifyPlus
Once a design direction is approved, use SpecifyPlus for the actual implementation, following a spec-driven build process:
1. Convert the approved Stitch design + this CLAUDE.md into a formal spec.
2. Break the spec into sections (hero, services, stats, case studies, testimonials, contact).
3. Build section-by-section, validating each against the spec before moving to the next.
4. Keep design tokens (colors, fonts, spacing) centralized so theme consistency is enforced across all pages.
