/** Single continuous film; semantic supporting chapters live below the journey. */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#E66B5B",
  background: "#0C1718",
  ink: "#F0F4EF",
  muted: "#A5B7B2",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "A study in light, material, and the spaces between the visible and the imagined.",
    clip: "/assets/world/lumen-journey.mp4",
    id: "aperture-garden",
    kicker: "An independent digital studio",
    label: "The world",
    mobileClip: "/assets/world/lumen-journey-mobile.mp4",
    mobilePoster: "/assets/world/lumen-journey-mobile-poster.png",
    poster: "/assets/world/lumen-journey-poster.png",
    tags: ["Spatial design", "Digital craft"],
    title: "Make room for wonder.",
    scroll: 3.2,
    linger: 0.08,
    objectPosition: "50% 50%",
    mobileObjectPosition: "50% 50%",
  },
];
