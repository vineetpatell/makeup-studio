# Makeup Studio

# PHASE 1 ONLY — CINEMATIC 3D MAKEUP STUDIO HERO EXPERIENCE
## IMPORTANT SCOPE RULE
Build ONLY the homepage HERO EXPERIENCE described below.
Do NOT build:
- About page
- Services page
- Our Work page
- Gallery
- Academy
- Studio page
- Contact page
- Booking page
- Footer
- Blog
- Testimonials
- Any other page content
The purpose of this phase is to create and perfect a production-quality, premium, cinematic 3D hero that will later become the visual foundation of the complete website.
Do not generate a generic template hero.
Do not create a simple image-with-text hero.
Do not create a generic spinning 3D object.
The hero must feel like a premium international beauty/fashion campaign combined with an interactive 3D web experience.
---
# 1. PROJECT FOUNDATION
Use:
- Next.js App Router (or modern React with Vite/TanStack Start)
- TypeScript
- Tailwind CSS
- Three.js
- @react-three/fiber
- @react-three/drei
- GSAP
- GSAP ScrollTrigger
- Lenis smooth scrolling
Use Framer Motion only for small DOM micro-interactions if genuinely useful. Do NOT use Framer Motion as the primary scroll animation engine.
Keep the code modular and production-ready.
Do not put the entire hero into one giant component.
Create a clean structure similar to:
components/
  hero/
    BeautyHero.tsx
    BeautyScene.tsx
    BeautyModel.tsx
    CameraRig.tsx
    HeroLighting.tsx
    HeroParticles.tsx
    HeroText.tsx
    HeroCTA.tsx
    HeroLoader.tsx
    useHeroScroll.ts
lib/
  lenis.ts
  gsap.ts
The exact folder structure can be adjusted to match the project, but preserve this separation of concerns.
---
# 2. VISUAL DIRECTION
The website represents a premium makeup studio that does professional makeup artistry AND makeup education.
The hero should communicate:
MAKEUP
ARTISTRY
TRANSFORMATION
EDUCATION
LUXURY
Visual direction:
- luxury beauty campaign
- high-fashion editorial
- premium cosmetic advertisement
- sophisticated
- cinematic
- minimal
- elegant
- tactile
- feminine without becoming overly pink or cliché
Avoid:
- cheap beauty-template aesthetics
- excessive pink
- excessive glitter
- neon gradients
- generic glassmorphism
- excessive floating cosmetics
- random 3D objects
- cartoon-like 3D
- AI-looking uncanny faces
- overly complicated UI
- excessive animation everywhere
The experience should feel expensive, controlled and intentional.
---
# 3. COLOR SYSTEM
Use a restrained luxury palette.
Primary background:
#100C0A
Secondary dark:
#18110E
Warm ivory:
#F7F1E8
Soft champagne:
#C9A46A
Muted warm beige:
#D8C9B8
Use champagne/gold only as a refined accent.
Do not make the entire interface gold.
The 3D lighting should naturally produce warm highlights rather than relying on bright UI colors.
---
# 4. HERO HEIGHT AND STRUCTURE
The hero should occupy approximately 220–260vh of scroll space so the cinematic sequence has enough room to breathe.
The visible viewport should remain visually focused on the hero experience while scrolling through the pinned sequence.
Use a pinned hero/canvas approach.
The 3D scene should remain fixed/pinned behind the hero content while scroll progress drives the cinematic sequence.
No hard scene cuts.
No abrupt transitions.
All motion must feel continuous.
---
# 5. INITIAL STATE — EXTREME BEAUTY CLOSE-UP
On initial page load:
Show an elegant stylized 3D female beauty bust / facial sculpture.
IMPORTANT:
The visual must NOT look like an uncanny hyper-real AI face.
Preferred visual language:
- elegant feminine facial silhouette
- refined facial proportions
- premium beauty sculpture
- soft skin-like matte material
- subtle pearl/satin quality
- controlled glossy highlights
- sophisticated hair silhouette
- editorial cosmetic-campaign appearance
If an actual GLB/GLTF asset is not available, create the complete scene architecture with a clearly replaceable placeholder asset.
Do not destroy the architecture just because the final GLB is not available.
The model must be loaded from a replaceable path such as:
/public/models/beauty-face.glb
or an equivalent configurable asset path.
Make the model replacement easy.
---
# 6. INITIAL CAMERA
The initial camera must NOT show the entire face.
Start extremely close.
Only a portion of the beauty subject should be visible:
- eye area
- cheek
- part of lips / facial contour
The purpose is to create curiosity.
The visitor should initially see a cinematic macro beauty shot rather than immediately seeing the complete 3D object.
Camera movement must be smooth and cinematic.
---
# 7. MASTER SCROLL EXPERIENCE
Use ONE primary ScrollTrigger timeline for the hero.
Do not create dozens of independent competing ScrollTriggers for the same scene.
Scroll progress should act as the master director of the experience.
Conceptually:
scroll progress 0 → 1
controls:
- camera position
- camera target
- camera orbit
- beauty model rotation
- makeup transformation state
- particle intensity
- lighting intensity
- environment reveal
- typography reveal
- CTA reveal
Use scrub-based ScrollTrigger.
Use smooth interpolation / lerp where appropriate so the 3D movement never snaps.
---
# 8. LENIS + GSAP SYNCHRONIZATION
Implement proper Lenis + GSAP synchronization.
Use the current Lenis-compatible approach appropriate for the installed version.
Required behaviour:
- Lenis smooth scrolling
- ScrollTrigger.update on Lenis scroll
- GSAP ticker driving Lenis RAF
- prevent duplicate RAF loops
- disable GSAP lag smoothing where appropriate
- refresh ScrollTrigger after initialization/assets are ready
The scrolling must feel premium and fluid.
Do not create a second independent smooth-scroll implementation.
---
# 9. SCROLL TIMELINE — 0 TO 100%
Implement the following cinematic progression.
## 0–10% — THE GLIMPSE
Camera remains extremely close to the face.
Show:
- eye
- skin
- cheek
- subtle facial highlight
Very subtle movement only.
Add extremely restrained micro-particles in the depth of the scene.
No headline yet.
No CTA.
Goal:
Create curiosity.
---
## 10–30% — THE REVEAL
As the user scrolls:
Camera slowly pulls backward.
Reveal more of the face.
Camera progression:
MACRO
→
CLOSE
→
MEDIUM
The beauty model should subtly rotate around the Y axis.
Approximate model rotation:
-8deg → 0deg
Do not over-rotate.
The motion should feel like a luxury beauty film, not a product demo.
---
# 10. 30–45% — MAKEUP TRANSFORMATION
This is the signature interaction of the hero.
The face gradually transitions from a clean/bare state toward a polished makeup look.
Conceptual sequence:
BARE
→
BASE
→
EYES
→
CONTOUR
→
LIPS
→
FINAL LOOK
Do NOT make the transition look like magical particles exploding onto the face.
It must feel like makeup is being artistically applied.
Preferred technical architecture:
Support multiple visual/material/texture states:
1. Bare
2. Base makeup
3. Eye makeup
4. Contour/highlight
5. Final makeup
Blend or interpolate between states based on scroll progress.
If the available 3D model cannot support real layer blending, create a clean texture/material-state architecture so the final GLB/textures can later be replaced without rebuilding the hero.
Do not fake the transformation with random DOM overlays.
The transformation should be tied to the 3D subject.
---
# 11. MAKEUP PARTICLES
During the transformation, introduce extremely subtle cosmetic particles.
Possible visual language:
- fine powder
- tiny cosmetic dust
- soft shimmer
- microscopic particles catching light
Behaviour:
- slow drift
- depth-based movement
- subtle light response
- low density
Do NOT create a glitter explosion.
Particles should support the makeup transformation, not become the main visual.
Particle count must be performance-conscious.
---
# 12. 45–60% — CINEMATIC CAMERA ORBIT
Once the face is substantially revealed:
Introduce a subtle camera orbit.
Movement:
front
→
slight 3/4 angle
→
front-ish final position
Keep the orbit restrained.
Approximate orbit:
10–20 degrees.
The purpose is to prove that the hero is genuinely 3D while maintaining elegance.
Do NOT rotate 360 degrees.
Do NOT continuously spin the head.
The camera and model movement must feel choreographed together.
---
# 13. LIGHTING CHOREOGRAPHY
Use premium beauty lighting.
Initial:
soft side lighting.
During reveal:
gradually introduce a controlled beauty key light.
During orbit:
allow the light to travel naturally across the face.
At final reveal:
introduce subtle rim lighting around the silhouette.
Lighting should create:
- facial definition
- soft skin highlights
- dimensionality
- premium cosmetic-advertisement feel
Avoid harsh game-engine lighting.
Avoid excessive bloom.
Avoid neon.
---
# 14. 60–72% — ENVIRONMENT REVEAL
As the camera pulls farther away, reveal a minimal luxury beauty-studio environment.
Possible environment elements:
- curved architectural wall
- elegant vanity
- subtle makeup mirror
- controlled studio light
- minimal cosmetic objects
- soft vertical light sources
The environment must remain secondary to the beauty subject.
Do not fill the scene with random objects.
The environment should feel like a premium beauty campaign set.
If no environment GLB exists, create a lightweight procedural environment using simple Three.js geometry.
---
# 15. 72–82% — BRAND TYPOGRAPHY REVEAL
Now introduce the primary typography.
Small overline:
MAKEUP • ARTISTRY • EDUCATION
Main headline:
THE ART
OF TRANSFORMATION
Use a sophisticated editorial display typeface.
Prefer an elegant serif for the main headline if a suitable web font is available.
Body/UI typography should remain clean and modern.
Do not use overly decorative fonts.
---
# 16. HEADLINE ANIMATION
The headline must use a masked line reveal.
Each line is inside an overflow-hidden mask.
Animation:
y: 110%
→
y: 0%
opacity:
0
→
1
Use an elegant power4.out-style ease.
Stagger the two lines slightly.
The text should feel like it is rising into the frame rather than simply fading in.
Do not animate individual letters unless it genuinely improves the result.
---
# 17. 82–92% — SUPPORTING COPY
Reveal:
Professional Makeup Artistry & Makeup Education
Secondary descriptor:
Bridal • Editorial • Occasion • Professional Training
Keep this typography restrained.
Use a subtle upward movement + opacity transition.
Do not overcrowd the hero.
---
# 18. 92–100% — CTA REVEAL
Create two CTAs.
Primary:
EXPLORE OUR WORK →
Secondary:
BOOK AN APPOINTMENT
Primary CTA:
champagne accent.
Secondary CTA:
transparent / subtle border.
CTA entrance:
- opacity 0 → 1
- y offset → 0
- subtle scale
Do not use aggressive bounce.
---
# 19. CTA HOVER
Desktop hover:
Primary button:
scale approximately 1 → 1.03
Arrow moves subtly to the right.
Champagne highlight can slightly expand.
Secondary button:
subtle background/opacity transition.
No excessive magnetic cursor effect.
If implementing magnetic behaviour, keep it extremely subtle.
Disable unnecessary cursor effects on mobile.
---
# 20. FINAL HERO COMPOSITION
At the end of the scroll sequence, the visitor should see:
3D beauty subject
+
minimal luxury environment
+
THE ART
OF TRANSFORMATION
+
Professional Makeup Artistry & Makeup Education
+
[ EXPLORE OUR WORK ]
[ BOOK AN APPOINTMENT ]
The composition must have generous negative space.
Do not make the final screen visually crowded.
---
# 21. SCROLL PROGRESS INDICATOR
Add a very subtle vertical scroll-progress indicator near the right edge.
It should visually communicate progress through the hero.
Keep it thin and minimal.
Do not make it visually dominant.
---
# 22. MOUSE PARALLAX — DESKTOP ONLY
Add subtle mouse-based parallax.
Different depth layers should react at different strengths.
Example:
background:
very subtle
3D subject:
slightly stronger
particles:
small independent movement
text:
very subtle
Do not move the entire composition dramatically.
The purpose is depth, not distraction.
---
# 23. LOADING EXPERIENCE
Because this is a 3D experience, implement a proper loading state.
Before the 3D model is ready:
Display a minimal luxury loader.
Text:
LOADING BEAUTY EXPERIENCE
Show progress percentage if reliable.
Example:
00%
25%
50%
75%
100%
Once assets are ready:
smoothly transition into the hero.
Never leave the user looking at an empty black screen.
Use a fallback poster image if necessary.
---
# 24. ASSET FALLBACK ARCHITECTURE
The hero must work even if the final custom GLB has not yet been supplied.
Create a configurable asset system.
For example:
/public/models/beauty-face.glb
/public/images/hero-poster.webp
The GLB must be easily replaceable.
The final production asset should not require rewriting the hero animation logic.
If a temporary placeholder is required, make it visually restrained and clearly replaceable.
---
# 25. RESPONSIVE BEHAVIOUR
Desktop is the primary showcase experience.
Tablet:
reduce camera travel and particle density.
Mobile:
preserve the 3D concept but simplify it.
On mobile:
- reduce orbit distance
- reduce particle count
- reduce environment complexity
- reduce texture resolution where appropriate
- reduce DPR
- simplify post-processing
- reduce heavy scrub distance if needed
Do not simply hide the hero.
It should remain recognizably the same experience.
---
# 26. PERFORMANCE
Performance is critical.
Implement:
- Suspense
- drei loading/progress handling
- lazy loading where appropriate
- compressed assets where possible
- reasonable DPR clamp
- avoid unnecessary re-renders
- use will-change only when necessary
- dispose resources correctly
- avoid huge textures
- keep particle count controlled
- avoid expensive post-processing unless genuinely useful
Do NOT add heavy postprocessing just to make it look "3D".
The experience must remain smooth.
---
# 27. ACCESSIBILITY / REDUCED MOTION
Respect:
prefers-reduced-motion
When enabled:
- disable heavy scrub animation
- reduce camera movement
- reduce particles
- avoid aggressive parallax
- show a polished static/low-motion hero
- preserve all content and CTAs
Do not hide the entire hero.
---
# 28. MOBILE CTA
On mobile, CTA buttons must remain easily tappable.
Do not make tiny text buttons.
Maintain comfortable touch targets.
---
# 29. DESIGN QUALITY RULES
This is NOT a generic SaaS website.
Do NOT use:
- generic rounded cards everywhere
- random gradients
- dashboard-like layouts
- excessive glass panels
- excessive shadows
- generic stock imagery
- random emoji
- random decorative blobs
- excessive pill UI
- default shadcn-looking hero
The visual language should resemble:
premium beauty campaign
+
fashion editorial
+
interactive 3D experience.
---
# 30. DO NOT ADD UNREQUESTED FEATURES
Do not create additional sections below the hero.
Do not generate placeholder About/Services/Gallery/Contact sections.
Do not create a footer.
Do not create fake testimonials.
Do not create fake certification claims.
Do not invent business information.
This phase is ONLY the hero experience.
---
# 31. CODE QUALITY
Use reusable components.
Keep animation logic separated from presentation.
Do not hardcode the entire animation into one effect.
Create named animation stages / constants so they can be tuned later.
For example:
HERO_STAGES:
- GLIMPSE
- REVEAL
- TRANSFORMATION
- ORBIT
- ENVIRONMENT
- TYPOGRAPHY
- CTA
Keep camera target values configurable.
Keep model rotation configurable.
Keep animation timing configurable.
Keep asset paths configurable.
---
# 32. IMPORTANT FINAL REQUIREMENT
Before considering the task complete, verify that the hero actually behaves as a single cinematic experience.
The following must work together:
1. Lenis smooth scrolling
2. ScrollTrigger master progress
3. R3F 3D scene
4. Camera movement
5. Model movement
6. Makeup transformation state
7. Lighting choreography
8. Particle behaviour
9. Environment reveal
10. Masked typography
11. CTA reveal
12. Responsive behaviour
13. Loading state
14. Reduced-motion fallback
Do NOT declare the task complete simply because a 3D object renders.
The result must feel like a deliberate premium beauty experience.
---
# ACCEPTANCE TEST
The hero is considered successful only if:
- On first load it immediately looks premium.
- The visitor sees an intriguing macro beauty shot.
- Scrolling reveals the face cinematically.
- The face genuinely feels 3D.
- The makeup transformation is tied to scroll progress.
- Camera movement feels continuous.
- Lighting changes naturally.
- The environment is revealed progressively.
- Typography enters after the visual story has developed.
- CTAs appear naturally at the end.
- There are no hard cuts.
- There is no random spinning.
- There is no excessive glitter.
- There is no generic template aesthetic.
- Desktop feels cinematic.
- Mobile remains usable and visually coherent.
- Loading does not produce a blank screen.
- Reduced-motion users receive a polished fallback.
Build this hero carefully and prioritize visual quality and animation coherence over adding extra features.
Again: DO NOT BUILD THE REST OF THE WEBSITE IN THIS PHASE.
# 33. CONCRETE IMPLEMENTATION ACCEPTANCE CHECKS
Do not consider this task complete until all applicable checks below pass.
These are implementation checks, not general design suggestions.
---
## A. APPLICATION / ROUTING
### A1 — App runs successfully
- The application must start without runtime errors.
- The page must render without a blank screen.
- No uncaught errors should appear in the browser console during normal use.
### A2 — Hero is isolated
- Only the Hero Experience is implemented in this phase.
- Do not create placeholder About, Services, Gallery, Academy, Contact, Booking or Footer sections.
### A3 — TypeScript
- No new TypeScript errors should be introduced by the Hero implementation.
- Avoid `any` unless there is a documented technical reason.
---
# B. 3D SCENE
### B1 — R3F scene exists
- The Hero must contain a real React Three Fiber / Three.js Canvas.
- Do not fake the 3D experience with CSS transforms on a 2D image.
### B2 — Replaceable model asset
- The beauty model must be loaded through a configurable asset path.
- The code must not hardwire the model into the component in a way that makes replacement difficult.
Expected architecture:
`BeautyHero → BeautyScene → BeautyModel`
### B3 — Camera exists
- The 3D scene must use a controllable perspective camera.
- Camera position and target must respond to the master scroll progress.
### B4 — Model rotation
- The beauty subject must have controlled Y-axis rotation.
- It must NOT continuously spin 360 degrees.
### B5 — Camera movement
The camera must visibly change position during the scroll sequence.
At minimum verify these distinct states:
1. Macro close-up
2. Face reveal
3. Portrait framing
4. Slight 3/4 camera angle
5. Final hero framing
---
# C. SCROLL SYSTEM
### C1 — Lenis
- Lenis must be initialized once.
- Do not create duplicate Lenis instances.
### C2 — GSAP synchronization
- Lenis scrolling must update ScrollTrigger.
- GSAP ticker must drive Lenis.
- Do not create an independent competing requestAnimationFrame loop.
### C3 — ScrollTrigger
- The hero must use a pinned scroll experience.
- Scroll progress must drive the animation.
- Scrubbing must be enabled.
### C4 — Master timeline
- The primary Hero sequence must have one clear master scroll driver.
- Camera, model, visual transformation and DOM reveal must remain synchronized with the same progress value.
### C5 — No snapping
Test by slowly scrolling forward and backward.
Expected result:
- camera moves smoothly
- model moves smoothly
- no sudden jumps
- no visible snapping between animation states
---
# D. CAMERA ACCEPTANCE TEST
Perform this test manually:
### Test D1
Start at the top.
Expected:
- only a partial close-up of the beauty subject is visible.
### Test D2
Scroll to approximately 25%.
Expected:
- camera has visibly pulled back.
- more of the face is visible.
### Test D3
Scroll to approximately 50%.
Expected:
- face is substantially revealed.
- camera has moved into a portrait-oriented framing.
### Test D4
Scroll to approximately 60%.
Expected:
- a subtle 3/4 perspective is visible.
### Test D5
Scroll to 100%.
Expected:
- complete final composition is visible.
- model is not spinning continuously.
---
# E. MAKEUP TRANSFORMATION ACCEPTANCE TEST
The makeup transformation must be tied to scroll progress.
### Test E1
At the beginning:
- bare/clean state must be visible.
### Test E2
During the middle portion:
- the visual makeup state must progressively change.
### Test E3
Near the end:
- final makeup state must be visible.
### Test E4
Scroll backward.
Expected:
- transformation reverses smoothly with the scroll.
### Test E5
Do NOT fake the transformation with unrelated floating DOM graphics.
The transformation must belong visually to the 3D beauty subject or its material/texture state system.
If the final production GLB is unavailable, implement the replaceable state architecture with an appropriate placeholder rather than pretending the transformation is complete.
---
# F. LIGHTING ACCEPTANCE TEST
### Test F1
At the beginning:
- lighting should feel intimate / close / cinematic.
### Test F2
During reveal:
- light should gradually expose more of the subject.
### Test F3
During orbit:
- light should visibly travel across the facial surface.
### Test F4
At the final state:
- subtle rim/separation lighting should be visible.
Avoid:
- harsh clipping
- excessive bloom
- neon lighting
- gaming-style lighting
---
# G. PARTICLE ACCEPTANCE TEST
### Test G1
Particles must be subtle.
### Test G2
Particles must have visible depth/motion.
### Test G3
Particles must become more noticeable during the transformation stage.
### Test G4
Particle density must remain performance-conscious.
### Test G5
Particles must not obscure the face or typography.
---
# H. ENVIRONMENT ACCEPTANCE TEST
### Test H1
The environment should not be fully visible immediately.
### Test H2
The environment must progressively reveal as the camera pulls back.
### Test H3
The environment must remain visually secondary to the beauty subject.
### Test H4
The environment must not look like a generic game scene.
---
# I. TYPOGRAPHY ACCEPTANCE TEST
### Test I1
The overline must appear after the visual reveal has progressed.
Expected text:
`MAKEUP • ARTISTRY • EDUCATION`
### Test I2
Main headline must use masked line reveal.
Expected:
`THE ART`
`OF TRANSFORMATION`
### Test I3
The headline must not simply fade in.
Verify:
- overflow-hidden mask exists
- vertical reveal occurs
- line timing is staggered
### Test I4
Supporting copy appears after the headline.
### Test I5
Typography must remain readable over the 3D scene.
---
# J. CTA ACCEPTANCE TEST
### Test J1
Primary CTA exists:
`EXPLORE OUR WORK`
### Test J2
Secondary CTA exists:
`BOOK AN APPOINTMENT`
### Test J3
Both buttons become visible near the end of the Hero sequence.
### Test J4
Hover interaction works on desktop.
### Test J5
Buttons remain usable on touch devices.
### Test J6
No excessive bounce or elastic animation.
---
# K. LOADING ACCEPTANCE TEST
### Test K1
Refresh the page with cache disabled / slow network simulation.
Expected:
- no blank black screen.
### Test K2
A loading state must be visible while the 3D asset is loading.
### Test K3
If available, show meaningful loading progress.
### Test K4
Once the asset loads:
- loader exits smoothly
- hero becomes interactive
### Test K5
If the 3D asset fails to load:
- the Hero must still show a polished fallback/poster
- page must remain usable
- no fatal runtime error
---
# L. RESPONSIVE ACCEPTANCE TEST
Test at:
- 1440×900
- 1280×800
- 1024×768
- 768×1024
- 390×844
- 360×800
### Desktop
Expected:
- full cinematic camera movement
- environment visible
- typography properly positioned
- no clipping
### Tablet
Expected:
- reduced camera travel if necessary
- reduced particle density
- no layout overflow
### Mobile
Expected:
- Hero remains visually recognizable
- 3D remains usable or gracefully simplified
- text does not overlap the face
- CTA buttons remain accessible
- no horizontal page overflow
- no extreme GPU-heavy effects
---
# M. REDUCED MOTION ACCEPTANCE TEST
Enable:
`prefers-reduced-motion: reduce`
Expected:
- heavy scroll choreography disabled/reduced
- particles reduced or disabled
- camera movement simplified
- content remains visible
- CTA remains usable
- no information is lost
---
# N. PERFORMANCE ACCEPTANCE TEST
### N1
Do not render unnecessary 3D objects.
### N2
Do not use unnecessarily huge textures.
### N3
DPR must be clamped.
### N4
Particle count must be controlled.
### N5
Avoid unnecessary React re-renders during scroll.
### N6
Use `useFrame` only for values that genuinely need per-frame updates.
### N7
Do not create a new GSAP timeline on every render.
### N8
Do not create a new Lenis instance on every render.
### N9
Clean up:
- ScrollTriggers
- event listeners
- animation loops
- Three.js resources where appropriate
---
# O. BROWSER CONSOLE ACCEPTANCE
After loading and interacting with the Hero:
There must be no recurring:
- React errors
- hydration errors
- Three.js errors
- WebGL errors caused by the implementation
- ScrollTrigger errors
- Lenis initialization errors
- missing asset errors for required production assets
Warnings that come exclusively from unavailable optional placeholder assets may be handled gracefully, but do not leave repeated console errors.
---
# P. BACKWARD SCROLL ACCEPTANCE TEST
This is mandatory.
Scroll:
0% → 100%
Then:
100% → 0%
Expected:
- every visual state reverses correctly
- camera returns smoothly
- typography exits correctly
- makeup transformation reverses
- particles respond correctly
- no state gets stuck
- no animation jumps
The Hero must be scrub-safe in both directions.
---
# Q. RESIZE ACCEPTANCE TEST
Resize the browser while the Hero is active.
Expected:
- ScrollTrigger recalculates correctly
- Canvas resizes correctly
- camera aspect updates
- no stretched model
- no broken typography
- no horizontal overflow
---
# R. RELOAD ACCEPTANCE TEST
Test:
1. Load page normally.
2. Reload at top.
3. Scroll halfway.
4. Reload.
5. Scroll quickly.
6. Scroll slowly backward.
Expected:
- no broken initial state
- no duplicated animation
- no duplicate Lenis
- no stuck pinned section
- no broken Canvas dimensions
---
# S. FINAL VISUAL ACCEPTANCE TEST
The Hero must pass all of the following:
[ ] Looks premium before scrolling  
[ ] Initial macro beauty shot works  
[ ] Face reveal works  
[ ] 3D depth is clearly visible  
[ ] Makeup transformation is visible  
[ ] Camera orbit is visible but restrained  
[ ] Lighting evolves with the sequence  
[ ] Environment reveals progressively  
[ ] Headline uses masked reveal  
[ ] Supporting copy appears at the correct stage  
[ ] CTAs appear at the correct stage  
[ ] No hard cuts  
[ ] No random spinning  
[ ] No excessive particles  
[ ] No generic template look  
[ ] Desktop works  
[ ] Mobile works  
[ ] Reduced-motion fallback works  
[ ] Loading state works  
[ ] Failed asset fallback works  
[ ] Browser console remains clean during normal interaction  
---
# T. DO NOT MARK COMPLETE PREMATURELY
If any critical item below is missing:
- real 3D Canvas
- scroll-driven camera
- Lenis + ScrollTrigger synchronization
- smooth master timeline
- makeup transformation architecture
- cinematic lighting
- masked typography
- responsive behaviour
- loading/fallback state
then the task is NOT complete.
Do not replace a missing feature with a static placeholder and claim completion.
If the final GLB/model asset is unavailable, clearly keep the architecture asset-ready and use a graceful placeholder while preserving all animation infrastructure.
---
# U. FINAL IMPLEMENTATION REPORT
After implementation, provide a concise completion report containing:
1. Components created
2. Libraries used
3. 3D asset path used
4. Scroll architecture
5. Animation stages implemented
6. Responsive behaviour
7. Reduced-motion behaviour
8. Any placeholder assets still requiring replacement
9. Any known limitations
10. Confirmation that the acceptance checks were tested
Do not claim a feature is implemented if it is only visually approximated.

git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
#   m a k e u p - s t u d i o  
 