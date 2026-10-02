import { MapPin } from "lucide-react";
import { PLACEHOLDER, STUDIO_CONFIG } from "@/data/studio";
import { SectionLabel } from "./SectionLabel";

/**
 * Studio location block. No fake map pin is shown: while the real address is
 * unconfigured this renders a neutral, clearly labelled placeholder.
 */
export function MapPlaceholder() {
  if (STUDIO_CONFIG.mapUrl && STUDIO_CONFIG.address) {
    return (
      <div className="pg-map pg-map-live">
        <SectionLabel>STUDIO LOCATION</SectionLabel>
        <p className="pg-map-address">{STUDIO_CONFIG.address}</p>
        <a
          className="pg-map-link"
          href={STUDIO_CONFIG.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin aria-hidden="true" size={16} /> OPEN IN MAPS
        </a>
      </div>
    );
  }

  return (
    <div className="pg-map" role="img" aria-label={PLACEHOLDER.location}>
      <div className="pg-map-grid" aria-hidden="true" />
      <div className="pg-map-inner">
        <MapPin aria-hidden="true" size={22} />
        <p className="pg-map-label">{PLACEHOLDER.location}</p>
        <p className="pg-map-copy">
          The studio address will be published here once confirmed. Nothing is pinned on a map until
          a real location exists.
        </p>
      </div>
    </div>
  );
}
