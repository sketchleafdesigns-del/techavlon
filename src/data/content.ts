import {
  IconBarChart,
  IconBook,
  IconBuilding,
  IconClipboardCheck,
  IconCpu,
  IconDatabase,
  IconLayers,
  IconList,
  IconLock,
  IconMap,
  IconNetwork,
  IconRack,
  IconRadar,
  IconServer,
  IconShieldCheck,
  IconTarget,
  IconUsers,
  IconWrench,
  IconZap,
  type IconProps,
} from "@/lib/icons";
import type { ComponentType } from "react";

type Icon = ComponentType<IconProps>;

/* ---------- Introduction: technology domains ---------- */

export interface Domain {
  name: string;
  description: string;
  icon: Icon;
}

export const domains: Domain[] = [
  {
    name: "Compute & Servers",
    description:
      "Enterprise server platforms for on-premise, edge and virtualized workloads.",
    icon: IconServer,
  },
  {
    name: "Storage & Data Protection",
    description:
      "Storage architectures, backup and disaster recovery for critical data.",
    icon: IconDatabase,
  },
  {
    name: "Networking & Connectivity",
    description:
      "Switching, routing and wireless infrastructure for stable connectivity.",
    icon: IconNetwork,
  },
  {
    name: "Data Centre Infrastructure",
    description:
      "Power, cooling, fire protection and the physical environment for critical systems.",
    icon: IconRack,
  },
  {
    name: "IT Security",
    description:
      "Firewalls, endpoint and WAN security controls for the technology environment.",
    icon: IconShieldCheck,
  },
  {
    name: "Cyber Security",
    description:
      "Threat assessment, monitoring and defense against digital attacks.",
    icon: IconRadar,
  },
  {
    name: "Physical & Electronic Security",
    description:
      "ELV systems, structured cabling and access-controlled environments.",
    icon: IconLock,
  },
  {
    name: "IT Assessment & Optimization",
    description:
      "Structured audits that reveal where infrastructure stands and where to go next.",
    icon: IconClipboardCheck,
  },
];

/* ---------- Company profile (verified facts) ---------- */

export const companyProfile = {
  founded: "2020, as Techavlon Digital Solutions",
  incorporated: "2025, as Techavlon Info Solutions LLP",
  headOffice: "Kakkanad, Kochi — Kerala, India",
  focus: "Enterprise IT infrastructure & technology solutions",
  vision:
    "To deliver innovative, high-quality IT infrastructure solutions that empower businesses to achieve digital transformation and operational excellence.",
  narrative:
    "Techavlon began in 2020 offering IT products and support services. As demand for enterprise-grade infrastructure grew, the company restructured and incorporated as a Limited Liability Partnership in 2025 — a structure suited to corporate and government technology projects.",
};

/* ---------- Architecture layers ---------- */

export interface Layer {
  index: string;
  name: string;
  description: string;
  icon: Icon;
  accent?: boolean;
}

export const architectureLayers: Layer[] = [
  {
    index: "01",
    name: "Business Operations",
    description:
      "The processes, services and outcomes the technology exists to support.",
    icon: IconBuilding,
  },
  {
    index: "02",
    name: "Applications & Users",
    description:
      "The software and people that consume the infrastructure below.",
    icon: IconUsers,
  },
  {
    index: "03",
    name: "Network & Connectivity",
    description:
      "The pathways that carry data between users, applications and systems.",
    icon: IconNetwork,
  },
  {
    index: "04",
    name: "Compute & Storage",
    description:
      "The servers and storage platforms that run workloads and retain data.",
    icon: IconServer,
  },
  {
    index: "05",
    name: "Data Centre Infrastructure",
    description:
      "Power, cooling, physical security and the environment that houses the technology.",
    icon: IconRack,
  },
  {
    index: "06",
    name: "Security & Monitoring",
    description:
      "Protection, oversight and visibility across every layer of the stack.",
    icon: IconShieldCheck,
    accent: true,
  },
];

/* ---------- Why Techavlon ---------- */

export interface ValuePoint {
  title: string;
  description: string;
  icon: Icon;
}

export const valuePoints: ValuePoint[] = [
  {
    title: "Requirement-Focused Planning",
    description:
      "Solutions are shaped around your workloads, environment and objectives — not a fixed product list.",
    icon: IconTarget,
  },
  {
    title: "Integrated Infrastructure Thinking",
    description:
      "Compute, storage, network, power and security are evaluated together, so components work as one environment.",
    icon: IconLayers,
  },
  {
    title: "Security-Conscious Implementation",
    description:
      "Security is considered during planning and deployment, not added as an afterthought.",
    icon: IconShieldCheck,
  },
  {
    title: "Scalable Technology Architecture",
    description:
      "Designs that let capacity and complexity grow with the organization as requirements evolve.",
    icon: IconBarChart,
  },
  {
    title: "Structured Implementation Approach",
    description:
      "Assessment, design, deployment and handover follow a defined process, reducing disruption during change.",
    icon: IconList,
  },
  {
    title: "Ongoing Technology Support",
    description:
      "Infrastructure continues to evolve after go-live. Support and improvement keep the environment aligned with business needs.",
    icon: IconWrench,
  },
];

/* ---------- How we work ---------- */

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand business requirements, existing infrastructure and objectives.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Identify infrastructure, security and technology requirements.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Develop an appropriate technology solution based on the requirements.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Deploy and configure the selected solution.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Provide ongoing support and improvement where applicable.",
  },
];

/* ---------- Industries / environments ---------- */

export interface EnvironmentFactor {
  title: string;
  description: string;
  icon: Icon;
}

export const environmentFactors: EnvironmentFactor[] = [
  {
    title: "Organizational Scale",
    description:
      "From single-site offices to multi-location enterprises, capacity planning and complexity requirements differ.",
    icon: IconBarChart,
  },
  {
    title: "Operational Model",
    description:
      "Business-critical systems, data-centre environments and branch operations each have distinct availability and performance needs.",
    icon: IconMap,
  },
  {
    title: "Security Requirements",
    description:
      "Regulatory expectations, data sensitivity and threat exposure shape the controls an environment requires.",
    icon: IconShieldCheck,
  },
  {
    title: "Technology Environment",
    description:
      "Existing platforms, hybrid configurations and legacy systems influence how new solutions are integrated.",
    icon: IconCpu,
  },
];

/* ---------- Insights topics ---------- */

export interface InsightTopic {
  title: string;
  description: string;
  icon: Icon;
}

export const insightTopics: InsightTopic[] = [
  {
    title: "Technology Insights",
    description:
      "Perspectives on emerging enterprise technology and how it affects infrastructure planning.",
    icon: IconZap,
  },
  {
    title: "Infrastructure Guides",
    description:
      "Practical guidance on servers, storage, networking and data-centre environments.",
    icon: IconBook,
  },
  {
    title: "Cybersecurity Topics",
    description:
      "Understanding threats, controls and the practices that reduce organizational risk.",
    icon: IconRadar,
  },
  {
    title: "Data Centre Topics",
    description:
      "Power, cooling, physical protection and design considerations for critical environments.",
    icon: IconRack,
  },
  {
    title: "IT Best Practices",
    description:
      "Approaches to assessment, implementation and support that keep infrastructure healthy.",
    icon: IconClipboardCheck,
  },
];

/* ---------- FAQ ---------- */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question:
      "What types of IT infrastructure solutions does Techavlon provide?",
    answer:
      "Techavlon provides solutions across the enterprise technology stack: server and storage platforms, networking, data centre infrastructure, IT security, cybersecurity, ELV (structured cabling and electronic security) systems, and IT audit and assessment services. These capabilities can be delivered individually or combined into an integrated solution, depending on the organization's requirements.",
  },
  {
    question: "How can organizations assess their existing IT infrastructure?",
    answer:
      "A structured IT audit is the most common approach. An audit reviews the existing hardware, software, network configuration, physical infrastructure and security controls, then documents the current state, identifies gaps and risks, and produces a practical basis for planning upgrades or optimization. The objective is a clear, factual picture of where the infrastructure stands today.",
  },
  {
    question: "What does a data centre infrastructure solution typically include?",
    answer:
      "In addition to the IT equipment itself, a data centre environment typically includes power management, cooling management, antistatic false flooring, smoke and fire detection, gas-based fire suppression, environment monitoring, water leak detection and access control systems. Each element exists to protect the compute, storage and networking equipment it houses.",
  },
  {
    question: "What is the difference between IT security and cybersecurity?",
    answer:
      "The terms overlap, but they emphasize different layers. IT security generally covers protecting the technology environment itself — firewalls, endpoint protection, network controls and secure configuration of infrastructure. Cybersecurity focuses specifically on defending against digital attacks: vulnerability assessment, penetration testing, threat monitoring, identity and access management and data loss prevention. In practice, mature organizations treat the two as complementary disciplines.",
  },
  {
    question:
      "Why is network infrastructure important for business operations?",
    answer:
      "Network infrastructure is the transport layer for nearly every business activity — applications, communications, data access and cloud connectivity all depend on it. Weaknesses in switching, routing or wireless coverage surface as slow systems, failed connectivity and reduced productivity, often before a single failure is identified. Reliable, well-managed network infrastructure is what keeps operations moving.",
  },
  {
    question: "How can organizations plan infrastructure upgrades?",
    answer:
      "Effective upgrade planning starts with an assessment of the current environment: what is in place, how it performs, where constraints exist and what the business will need over the coming period. From there, upgrades can be sequenced — addressing critical gaps first and aligning larger investments with operational windows — which reduces risk, avoids unnecessary expenditure and keeps systems available throughout the transition.",
  },
];
