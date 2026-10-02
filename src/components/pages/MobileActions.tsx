import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { STUDIO_CONFIG } from "@/data/studio";

/**
 * Mobile sticky action bar. Missing phone/WhatsApp details never become fake
 * numbers — they route to the contact page instead.
 */
export function MobileActions() {
  return (
    <div className="mobile-actions" aria-label="Quick actions">
      <Button asChild variant="ghost">
        {STUDIO_CONFIG.phone ? (
          <a href={`tel:${STUDIO_CONFIG.phone}`}>
            <Phone size={17} aria-hidden="true" />
            CALL
          </a>
        ) : (
          <Link to="/contact">
            <Phone size={17} aria-hidden="true" />
            CALL
          </Link>
        )}
      </Button>
      <Button asChild variant="ghost">
        {STUDIO_CONFIG.whatsappUrl ? (
          <a href={STUDIO_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} aria-hidden="true" />
            WHATSAPP
          </a>
        ) : (
          <Link to="/contact">
            <MessageCircle size={17} aria-hidden="true" />
            WHATSAPP
          </Link>
        )}
      </Button>
      <Button asChild>
        <Link to="/booking">
          BOOK <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}
