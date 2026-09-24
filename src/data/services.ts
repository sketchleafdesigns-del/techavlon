import {
  IconDatabase,
  IconLayers,
  IconNetwork,
  IconRack,
  IconRadar,
  IconServer,
  IconShieldCheck,
  IconClipboardCheck,
  type IconProps,
} from "@/lib/icons";
import type { ComponentType } from "react";

export interface Service {
  slug: string;
  name: string;
  /** One-line descriptor used in the navigation dropdown. */
  short: string;
  /** 2–3 sentence card description. */
  description: string;
  /** Three concise capability points. */
  points: [string, string, string];
  icon: ComponentType<IconProps>;
  /**
   * Link target. Built service pages use their route; other services
   * keep the existing contact CTA until their detail pages are created.
   */
  href: string;
}

export const services: Service[] = [
  {
    slug: "server-solutions",
    name: "Server Solutions",
    short: "Rack, tower, blade and edge server platforms",
    description:
      "From rack, tower and blade servers to edge and virtualization-ready platforms, server solutions are sized around your actual workloads — current capacity, growth trajectory and performance requirements. Sizing, deployment and ongoing maintenance are handled with an emphasis on efficiency, availability and infrastructure longevity.",
    points: [
      "Rack, tower & blade server platforms",
      "Edge & virtualization-ready infrastructure",
      "Server sizing, deployment & maintenance",
    ],
    icon: IconServer,
    href: "/solutions/server-solutions",
  },
  {
    slug: "storage-solutions",
    name: "Storage Solutions",
    short: "Storage, backup and disaster recovery",
    description:
      "Structured storage architectures that keep data accessible, protected and manageable as volumes grow. Storage design is based on how your organization actually uses data — from primary storage and consolidation to backup and disaster recovery for business continuity.",
    points: [
      "SAN, NAS & DAS storage architectures",
      "Backup & disaster recovery",
      "Consolidation, tiering & migration",
    ],
    icon: IconDatabase,
    href: "#contact",
  },
  {
    slug: "networking",
    name: "Networking",
    short: "Switching, routing and wireless connectivity",
    description:
      "Switching, routing, wireless and network management solutions engineered for stable, high-performance connectivity. A well-designed network is the backbone of every other technology investment — it determines how reliably applications, data and services move across your organization.",
    points: [
      "Switching & routing infrastructure",
      "Wireless network solutions",
      "Network monitoring & management",
    ],
    icon: IconNetwork,
    href: "#contact",
  },
  {
    slug: "data-centre-infrastructure",
    name: "Data Centre Infrastructure",
    short: "Power, cooling, fire protection & physical environment",
    description:
      "Data centre environments require far more than power and cooling. From antistatic false flooring and power management to gas-based fire suppression and continuous environment monitoring, data centre infrastructure protects the compute, storage and networking equipment it houses.",
    points: [
      "Power, cooling & environment management",
      "Fire detection & gas-based suppression",
      "Raised flooring & access control",
    ],
    icon: IconRack,
    href: "#contact",
  },
  {
    slug: "it-security",
    name: "IT Security",
    short: "Firewalls, endpoints and secure connectivity",
    description:
      "Enterprise-grade security controls integrated directly into the technology environment — from firewalls and endpoint protection to SD-WAN and broader WAN connectivity. The goal is controlled access, managed traffic and a defensible infrastructure at the system level.",
    points: [
      "Enterprise firewall solutions",
      "SD-WAN & WAN connectivity",
      "Endpoint security deployment",
    ],
    icon: IconShieldCheck,
    href: "#contact",
  },
  {
    slug: "cyber-security",
    name: "Cyber Security",
    short: "VAPT, SIEM, IAM and threat defense",
    description:
      "A structured approach to identifying and reducing cyber risk: vulnerability assessment and penetration testing, network security review, SIEM-based monitoring, identity and access management, and data loss prevention.",
    points: [
      "Vulnerability assessment & penetration testing",
      "SIEM, IAM & data loss prevention",
      "Endpoint & network security assessment",
    ],
    icon: IconRadar,
    href: "#contact",
  },
  {
    slug: "elv-solutions",
    name: "ELV Solutions",
    short: "Structured cabling & intelligent infrastructure",
    description:
      "The physical connectivity that enterprise networks depend on — precision-engineered cabling for campus environments and high-density data centres, with intelligent cabling management that supports monitoring, documentation and faster fault resolution.",
    points: [
      "Campus area network cabling",
      "Data centre cabling",
      "Intelligent cabling & management",
    ],
    icon: IconLayers,
    href: "#contact",
  },
  {
    slug: "it-audit",
    name: "IT Audit",
    short: "Assessment, gap analysis & optimization planning",
    description:
      "A structured assessment of your existing IT environment — hardware, configuration, processes and security posture — that documents the current state, identifies gaps and risks, and provides a practical basis for planning upgrades and optimization.",
    points: [
      "Infrastructure & configuration review",
      "Risk, gap & compliance readiness assessment",
      "Upgrade & optimization planning",
    ],
    icon: IconClipboardCheck,
    href: "#contact",
  },
];
