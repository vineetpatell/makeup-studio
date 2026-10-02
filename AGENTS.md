<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the homepage experience isolated in `src/components/hero`; it is the only phase-one content and its single scroll timeline coordinates 3D and typography.
- Configure the commissioned beauty GLB through `HERO_ASSETS.model`; the procedural sculpture is an asset-ready fallback rather than a claimed final likeness.
- Keep the scene controls in focused `src/components/hero` modules and the GSAP/Lenis lifecycle in `src/lib`; this keeps the single scroll director replaceable without coupling it to rendering details.
- Keep Phase 2 homepage chapters in `src/components/home`, with editable service and contact data in `content.ts`; this separates editorial content from the approved hero and avoids fabricated business claims.
- Use unpinned IntersectionObserver reveals below the hero and leave Lenis owned by the hero; this prevents duplicate smooth-scroll loops and preserves the hero's scroll choreography.
