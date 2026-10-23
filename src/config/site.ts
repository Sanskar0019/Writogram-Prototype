/**
 * Centralized Writogram Brand and External Links Configuration
 * All URLs, social handles, and beta destinations are managed here.
 */

export const siteConfig = {
    name: "Writogram",
    tagline: "Where thoughts find their voice.",
    positioning: "A social platform built for writing.",
    description: "A social platform built for writing. Share thoughts, stories, poetry, journals and reflections with people who believe words matter.",
    url: "https://writogram.com",
    
    // External & App Links (Configurable)
    links: {
        // Verified Beta Destination URL (or early access app link)
        betaApp: process.env.NEXT_PUBLIC_BETA_URL || "https://app.writogram.com",
        
        // Official Instagram profile
        instagram: "https://instagram.com/writogram",
        instagramHandle: "@writogram",
        
        // WhatsApp Contact (Configured via NEXT_PUBLIC_WHATSAPP_URL or fallback)
        whatsApp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/message/writogram",
        
        // Contact email
        email: "hello@writogram.com",
    },

    // Community tiers
    community: {
        totalFirstMembers: 200,
        creatorPartnersQuota: 100,
        foundingMembersQuota: 100,
    },
};
