/**
 * Verified site-wide data for Techavlon.
 * Contact details, business hours and legal name are taken from the
 * existing techavlon.in website (contact & about pages).
 */
export const site = {
  name: "Techavlon",
  legalName: "Techavlon Info Solutions LLP",
  tagline: "Enterprise IT Infrastructure & Technology Solutions",
  locationLabel: "Kakkanad, Kochi — Kerala, India",
  addressLines: [
    "CS2, 2nd Floor, Heavenly Plaza,",
    "Padamugal, Kakkanad,",
    "Kochi, Kerala – 682021",
  ],
  phones: [
    { label: "+91 99950 17636", href: "tel:+919995017636" },
    { label: "+91 99959 07636", href: "tel:+919995907636" },
  ],
  primaryPhone: { label: "+91 99950 17636", href: "tel:+919995017636" },
  email: "sales@techavlon.in",
  emailHref: "mailto:sales@techavlon.in",
  hours: "Mon – Sat · 9:00 AM – 6:30 PM",
  /** Technology brands presented as partners on the existing website. */
  partners: ["HPE", "Fortinet", "ASUS", "Lenovo"],
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const footerCompany: NavItem[] = [
  { label: "About Us", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];
