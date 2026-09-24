import { useEffect, useState, type ComponentType } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { FAQItem } from "@/components/ui/FAQItem";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";
import { services } from "@/data/services";
import {
  IconArrowRight,
  IconCheck,
  IconCpu,
  IconDatabase,
  IconLayers,
  IconLock,
  IconRack,
  IconServer,
  IconShieldCheck,
  IconTarget,
  IconWrench,
  IconZap,
  type IconProps,
} from "@/lib/icons";
import { homeAnchor, solutionHref } from "@/lib/navigation";

interface ServerOption {
  number: string;
  title: string;
  icon: ComponentType<IconProps>;
  description: string;
  consideration: string;
}

const serverOptions: ServerOption[] = [
  {
    number: "01",
    title: "Rack Servers",
    icon: IconRack,
    description:
      "Rack servers are built to mount in a standard equipment rack. They suit organized server rooms and data-centre environments where multiple systems, cabling and service access need to be managed together.",
    consideration:
      "Plan rack space, power distribution, airflow, cable routes and room for future capacity.",
  },
  {
    number: "02",
    title: "Tower Servers",
    icon: IconServer,
    description:
      "A tower server is a self-contained chassis that can be placed in an office, branch or smaller equipment room without requiring a full server rack. It can support local applications and services where a compact, standalone platform is appropriate.",
    consideration:
      "Consider physical placement, access control, noise, expansion options, power and cooling.",
  },
  {
    number: "03",
    title: "Blade Servers",
    icon: IconLayers,
    description:
      "Blade servers are modular compute systems installed in a shared chassis. The chassis brings several server modules together and can consolidate shared infrastructure within a smaller physical footprint.",
    consideration:
      "Assess chassis capacity and the shared power, cooling, networking, compatibility and servicing model.",
  },
  {
    number: "04",
    title: "Edge Servers",
    icon: IconZap,
    description:
      "Edge servers place compute closer to the people, devices or systems that generate and use data. This can be relevant when local processing, site-level operations or connectivity constraints influence where workloads should run.",
    consideration:
      "Account for remote management, physical conditions, local connectivity, security and site power/cooling.",
  },
];

const sizingCheckpoints = [
  {
    number: "01",
    title: "Workload assessment",
    description:
      "Map application roles, dependencies, user demand, current utilization and peak operating periods.",
  },
  {
    number: "02",
    title: "Capacity profile",
    description:
      "Consider compute, memory, storage capacity and I/O, network throughput, and realistic room for growth.",
  },
  {
    number: "03",
    title: "Deployment planning",
    description:
      "Check the site, rack or floor space, power and cooling, connectivity, access, migration needs and dependencies.",
  },
  {
    number: "04",
    title: "Configuration",
    description:
      "Plan operating-system or virtualization settings, management access, network and storage connections, and baseline controls.",
  },
  {
    number: "05",
    title: "Maintenance",
    description:
      "Define routine health and capacity reviews, update planning, configuration records and maintenance windows.",
  },
  {
    number: "06",
    title: "Lifecycle",
    description:
      "Review changing workloads, support availability, expansion needs, refresh timing and responsible retirement of equipment and data.",
  },
];

const considerations = [
  {
    title: "Performance",
    icon: IconZap,
    description:
      "Match compute, memory, storage response and network capacity to the workload—not just a headline specification.",
  },
  {
    title: "Scalability",
    icon: IconTarget,
    description:
      "Allow for expected growth and understand which resources can be expanded and how that affects the platform.",
  },
  {
    title: "Availability",
    icon: IconShieldCheck,
    description:
      "Set expectations for service interruption and consider dependencies, recovery needs and appropriate redundancy.",
  },
  {
    title: "Workload requirements",
    icon: IconCpu,
    description:
      "Account for application roles, operating environments, utilization patterns, dependencies and peak demand.",
  },
  {
    title: "Infrastructure environment",
    icon: IconRack,
    description:
      "Evaluate space, power, cooling, airflow, cabling, physical access and the conditions at each server location.",
  },
  {
    title: "Security",
    icon: IconLock,
    description:
      "Consider data sensitivity, administrative access, configuration, updates, network boundaries and protection from loss.",
  },
  {
    title: "Maintenance",
    icon: IconWrench,
    description:
      "Plan for routine care, change windows, monitoring responsibilities, support lifecycle and eventual refresh.",
  },
];

const dataPractices = [
  {
    title: "Organize",
    icon: IconLayers,
    description:
      "Know which systems and services create or use each dataset, where it is held, and who is responsible for it.",
  },
  {
    title: "Control access",
    icon: IconLock,
    description:
      "Align permissions with user and administrator responsibilities, and review access as roles and requirements change.",
  },
  {
    title: "Manage through its lifecycle",
    icon: IconDatabase,
    description:
      "Plan capacity, retention, backup, recovery and retirement so that information remains appropriately accessible and governed.",
  },
];

const relatedSlugs = new Set([
  "storage-solutions",
  "networking",
  "data-centre-infrastructure",
  "it-security",
  "cyber-security",
]);
const relatedSolutions = services.filter((service) =>
  relatedSlugs.has(service.slug)
);

const serverFaqs = [
  {
    question: "What is server infrastructure used for?",
    answer:
      "Server infrastructure provides compute resources for operating systems, business applications, databases, shared services and other workloads. The right design depends on what must run, who or what uses it, how it connects to storage and networks, and how the service is expected to operate.",
  },
  {
    question: "How do rack, tower and blade servers differ?",
    answer:
      "Rack servers mount into a standard rack and are commonly considered for organized server-room or data-centre deployments. Tower servers are standalone systems suited to locations where a rack is not practical. Blade servers are modular systems that share a chassis. Space, density, service access, power, cooling and expansion needs help determine which form factor is appropriate.",
  },
  {
    question: "What does virtualization-ready infrastructure mean?",
    answer:
      "It means the physical server platform is selected and configured with the requirements of a virtualization layer in mind. That layer can run multiple virtual workloads on shared physical compute resources. Capacity, storage and network I/O, workload compatibility and resilience still need to be planned for the particular environment.",
  },
  {
    question: "What information is useful when sizing a server?",
    answer:
      "Useful inputs include the applications and services involved, current resource use, user or transaction patterns, peak periods, storage needs, dependencies, growth expectations and any service-availability requirements. Reviewing the existing environment helps make sizing assumptions more grounded than choosing hardware from a single specification.",
  },
  {
    question: "Does redundancy replace backup?",
    answer:
      "No. Redundancy can help a system continue operating when a designed-for component or path fails, while backup provides a way to restore data after deletion, corruption or other loss. They address different risks and are normally considered together with recovery procedures and restore testing.",
  },
  {
    question: "How often should server infrastructure be maintained or refreshed?",
    answer:
      "There is no universal interval. Maintenance and refresh planning depend on workload changes, operational risk, system condition, support lifecycle, security requirements and available capacity. Periodic reviews help identify when updates, expansion or replacement should be considered.",
  },
];

function updateMeta(selector: string, attribute: string, value: string) {
  const element = document.querySelector<HTMLElement>(selector);
  element?.setAttribute(attribute, value);
}

export function ServerSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const title = "Server Solutions | Techavlon";
    const description =
      "Explore server infrastructure options from Techavlon, including rack, tower, blade and edge servers, virtualization-ready platforms, sizing, deployment, maintenance and data protection considerations.";
    const canonical = "https://techavlon.in/solutions/server-solutions";

    document.title = title;
    updateMeta('meta[name="description"]', "content", description);
    updateMeta('link[rel="canonical"]', "href", canonical);
    updateMeta('meta[property="og:title"]', "content", title);
    updateMeta('meta[property="og:description"]', "content", description);
    updateMeta('meta[property="og:url"]', "content", canonical);
    updateMeta('meta[name="twitter:title"]', "content", title);
    updateMeta('meta[name="twitter:description"]', "content", description);
  }, []);

  return (
    <>
      {/* 1–2. Breadcrumb and service hero */}
      <section
        className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
        aria-labelledby="server-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid-dark absolute inset-0 opacity-45" />
          <div className="absolute -right-32 top-20 size-[34rem] rounded-full bg-accent-500/10 blur-3xl" />
        </div>
        <Container className="relative">
          <Reveal>
            <Breadcrumbs
              className="mb-8"
              items={[
                { label: "Home", href: "/" },
                { label: "Solutions", href: homeAnchor("solutions") },
                { label: "Server Solutions" },
              ]}
            />
          </Reveal>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-2xl">
              <Reveal delay={70}>
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-300 sm:text-xs">
                  <span aria-hidden="true" className="h-px w-8 bg-accent-400" />
                  Compute infrastructure
                </p>
                <h1
                  id="server-hero-heading"
                  className="mt-5 font-display text-[2.7rem] font-bold leading-[1.06] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.75rem]"
                >
                  Server Solutions
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/90 sm:text-lg">
                  Server infrastructure supports the compute requirements,
                  applications and workloads behind day-to-day business
                  operations. The right platform is planned around how systems
                  are used, where they run, the availability they require and
                  how those needs may change.
                </p>
              </Reveal>

              <Reveal delay={210}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href={homeAnchor("contact")} size="lg">
                    Talk to an Expert
                    <IconArrowRight className="size-4" />
                  </ButtonLink>
                  <ButtonLink
                    href="#server-options"
                    size="lg"
                    variant="secondaryDark"
                  >
                    Explore server options
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={130}>
              <figure className="relative aspect-[5/4] min-h-64 overflow-hidden border border-white/15 bg-navy-900 shadow-lift sm:aspect-[4/3]">
                <img
                  src="/images/hero-datacentre.jpg"
                  alt="A view down an aisle of server racks in a data-centre environment."
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/15 to-navy-950/10"
                />
                <div
                  aria-hidden="true"
                  className="bg-grid-dark absolute inset-0 opacity-35"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-300">
                    Infrastructure planned around
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-white sm:gap-x-4 sm:text-sm">
                    <span>Compute</span>
                    <span aria-hidden="true" className="size-1 rounded-full bg-accent-400" />
                    <span>Applications</span>
                    <span aria-hidden="true" className="size-1 rounded-full bg-accent-400" />
                    <span>Operations</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Overview */}
      <section
        id="server-overview"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="server-overview-heading"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                id="server-overview-heading"
                eyebrow="Overview"
                title="Compute infrastructure shaped around the work it supports"
                lead="Servers provide the physical compute layer for applications, data services and business workloads. Selecting a platform involves more than choosing a chassis: capacity, location, operations and protection all influence how well it fits an environment."
              />
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-600">
                Techavlon’s published Server Solutions scope includes rack,
                tower and blade servers, edge servers, virtualization-ready
                infrastructure, server sizing, deployment and maintenance. It
                also identifies data security, data redundancy, availability
                and data management as important parts of the server
                environment.
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-600">
                A useful design begins with the applications and workloads in
                view: what they depend on, when demand peaks, how data moves,
                and what the physical site can support. These requirements
                provide a clearer basis for comparing server form factors and
                planning for change over time.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full border-l-2 border-accent-500 bg-surface p-7 sm:p-9">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-700">
                  Server solution scope
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                  One platform, several connected decisions
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Choose a form factor that fits the site and operating model.",
                    "Size compute, memory, storage and network resources around real workloads.",
                    "Plan deployment, configuration and maintenance as part of the lifecycle.",
                    "Consider security, redundancy and data management alongside availability needs.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                      <IconCheck className="mt-0.5 size-4 shrink-0 text-accent-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. Server infrastructure options */}
      <section
        id="server-options"
        className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
        aria-labelledby="server-options-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="server-options-heading"
              align="center"
              eyebrow="Infrastructure options"
              title="Choose a server form factor for the environment"
              lead="Rack, tower, blade and edge systems solve different placement and operating needs. Each option should be assessed against the workloads it will host and the conditions at the site."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {serverOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Reveal key={option.title} delay={(index % 2) * 80} className="h-full">
                  <article className="flex h-full flex-col border border-line bg-white p-6 shadow-card sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center border border-accent-500/25 bg-accent-500/5 text-accent-700">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-700">
                          Option {option.number}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-ink-900">
                          {option.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-ink-600">
                      {option.description}
                    </p>
                    <div className="mt-5 border-t border-line pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-900">
                        Selection considerations
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {option.consideration}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Virtualization-ready infrastructure */}
      <section
        id="virtualization"
        className="scroll-mt-24 bg-navy-900 py-20 text-white sm:py-24 lg:py-28"
        aria-labelledby="virtualization-heading"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                id="virtualization-heading"
                eyebrow="Virtualization-ready infrastructure"
                title="Run multiple virtual workloads on shared physical resources"
                lead="A virtualization layer abstracts physical compute resources so that multiple virtual machines or workloads can run on a server host. It can offer flexibility in how capacity is allocated, while the underlying hardware still needs to be sized and managed for the workloads it carries."
                onDark
              />
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-navy-200">
                In suitable environments, consolidation can improve use of
                available compute resources and make workload placement more
                flexible. The result depends on the applications, capacity
                profile, storage and network I/O, and how resilience and
                operations are designed. Platform choice should reflect the
                workload, existing environment and operational requirements.
              </p>
            </Reveal>

            <Reveal delay={110}>
              <figure className="border border-white/15 bg-navy-950/55 p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-300">
                    A conceptual view
                  </p>
                  <IconLayers className="size-5 text-accent-300" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { title: "Virtual workload", detail: "Application and OS" },
                    { title: "Virtual workload", detail: "Application and OS" },
                    { title: "Virtual workload", detail: "Application and OS" },
                  ].map((layer, index) => (
                    <div key={`${layer.title}-${index}`} className="border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-xs font-semibold text-white">{layer.title}</p>
                      <p className="mt-1.5 text-[11px] text-navy-300">{layer.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="my-3 flex items-center justify-center gap-2 text-accent-300" aria-hidden="true">
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] uppercase tracking-[0.16em]">Virtualization layer</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <div className="border border-accent-400/30 bg-accent-400/[0.07] p-4">
                  <p className="text-sm font-semibold text-white">Physical server resources</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy-300">
                    Compute · memory · storage · network
                  </p>
                </div>
                <figcaption className="mt-4 text-xs leading-relaxed text-navy-400">
                  Vendor-neutral illustration of a general virtualization concept; not a proprietary Techavlon architecture.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 6. Sizing, deployment and maintenance */}
      <section
        id="server-sizing"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="server-sizing-heading"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                id="server-sizing-heading"
                eyebrow="Sizing, deployment & maintenance"
                title="Plan the full server lifecycle—not just the purchase"
                lead="Workload assessment provides context for capacity decisions, while deployment planning and routine maintenance help keep the platform aligned with its operating requirements."
              />
              <p className="mt-6 text-[15px] leading-relaxed text-ink-600">
                A practical assessment considers compute and memory needs,
                storage capacity and I/O, network demand, growth, site
                readiness and the systems a server depends on. Deployment
                planning then connects configuration to the environment, while
                maintenance and lifecycle reviews account for updates,
                changing demand and support considerations.
              </p>
            </Reveal>

            <div className="grid gap-x-8 sm:grid-cols-2">
              {sizingCheckpoints.map((checkpoint, index) => (
                <Reveal key={checkpoint.number} delay={(index % 2) * 70}>
                  <article className="flex gap-4 border-b border-line py-5 first:pt-0 sm:first:pt-5">
                    <span className="font-display text-xs font-bold tracking-[0.12em] text-accent-700">
                      {checkpoint.number}
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink-900">
                        {checkpoint.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {checkpoint.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Data security and redundancy */}
      <section
        id="server-security"
        className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
        aria-labelledby="server-security-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="server-security-heading"
              eyebrow="Data security & redundancy"
              title="Consider protection and availability together"
              lead="Server security is shaped by how systems are configured and accessed, how data is protected, and how the environment responds to component or service interruptions."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="h-full border border-line bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center border border-accent-500/25 bg-accent-500/5 text-accent-700">
                    <IconShieldCheck className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    Data security and access
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  Depending on the workload and risk, server planning may
                  include controlled administrative access, role-appropriate
                  permissions, configuration and update practices, and
                  attention to how systems connect to the wider network.
                  Security controls should fit the organization’s policies
                  and operational context.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
                  {[
                    "Review who can administer systems and data.",
                    "Consider secure configuration and update responsibilities.",
                    "Align access and connectivity with the environment’s requirements.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <IconCheck className="mt-0.5 size-4 shrink-0 text-accent-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="h-full border border-line bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center border border-accent-500/25 bg-accent-500/5 text-accent-700">
                    <IconDatabase className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    Redundancy, availability and recovery
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  Redundant components or paths may be considered where
                  availability requirements call for them. Redundancy can
                  reduce dependence on a single component, but it does not
                  replace backups: backup and recovery arrangements address
                  data loss, deletion or corruption. Both require clear
                  requirements and suitable testing.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
                  {[
                    "Identify failure points and the service impact of interruption.",
                    "Define data protection and recovery expectations.",
                    "Review recovery procedures rather than relying on hardware redundancy alone.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <IconCheck className="mt-0.5 size-4 shrink-0 text-accent-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8. Data management */}
      <section
        id="data-management"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="data-management-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="data-management-heading"
              align="center"
              eyebrow="Data management"
              title="Keep information organized, accessible and governed"
              lead="Server infrastructure is part of the environment that stores and serves organizational data. Clear ownership, access and lifecycle decisions help make that information easier to manage as systems and volumes change."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-3 md:gap-10">
            {dataPractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <Reveal key={practice.title} delay={index * 70}>
                  <article>
                    <span className="grid size-11 place-items-center border border-line bg-surface text-navy-700">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                      {practice.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                      {practice.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 9. Key considerations */}
      <section
        id="key-considerations"
        className="scroll-mt-24 bg-navy-950 py-20 text-white sm:py-24 lg:py-28"
        aria-labelledby="considerations-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="considerations-heading"
              eyebrow="Key considerations"
              title="A balanced view of the server environment"
              lead="Server decisions work best when workload needs, site conditions and ongoing operations are considered together. The relative importance of each factor depends on the use case."
              onDark
            />
          </Reveal>

          <div className="mt-11 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {considerations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 3) * 70}>
                  <article className="flex gap-4 border-t border-white/10 py-5">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center border border-accent-400/25 text-accent-300">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-300">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 10. How we approach requirements */}
      <section
        id="server-approach"
        className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
        aria-labelledby="server-approach-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="server-approach-heading"
              align="center"
              eyebrow="How we approach requirements"
              title="Understand → Assess → Design → Implement → Support"
              lead="The same general process used across the Techavlon homepage applies to server requirements: establish the context, review needs, plan a fit, put the selected solution in place and consider ongoing support."
            />
          </Reveal>

          <div className="relative mt-12">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block"
            />
            <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <li key={step.number} className="relative">
                  <Reveal delay={index * 70}>
                    <span className="relative z-10 grid size-12 place-items-center border border-accent-500/35 bg-white font-display text-sm font-bold text-accent-700 shadow-card">
                      {step.number}
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 11. Related solutions */}
      <section
        id="related-solutions"
        className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
        aria-labelledby="related-solutions-heading"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="related-solutions-heading"
              eyebrow="Related solutions"
              title="Server infrastructure works alongside the wider stack"
              lead="Compute depends on its connections to data, networks, facilities and security. Explore the related solution areas below."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSolutions.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(index % 3) * 70} className="h-full">
                  <a
                    href={solutionHref(service.slug)}
                    className="group flex h-full items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-accent-500/50 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                  >
                    <span className="grid size-10 shrink-0 place-items-center border border-line bg-surface text-navy-700 transition-colors group-hover:border-accent-500/30 group-hover:text-accent-700">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold text-ink-900">
                        {service.name}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink-600">
                        {service.short}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-700">
                        View in solutions
                        <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 12. FAQ */}
      <section
        id="server-faq"
        className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
        aria-labelledby="server-faq-heading"
      >
        <Container narrow>
          <Reveal>
            <SectionHeading
              id="server-faq-heading"
              eyebrow="Frequently asked questions"
              title="Server infrastructure questions"
              lead="Practical answers to common questions about platform selection, sizing, virtualization and data protection."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-9 border-t border-line">
              {serverFaqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  id={`server-faq-${index + 1}`}
                  question={faq.question}
                  answer={faq.answer}
                  open={openFaq === index}
                  onToggle={() =>
                    setOpenFaq((current) => (current === index ? null : index))
                  }
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 13. Final CTA */}
      <CTASection
        eyebrow="Server solutions"
        title="Let's Discuss Your Server Infrastructure Requirements"
        text="Start with the applications, capacity, operating environment and lifecycle expectations behind your requirements. Contact Techavlon to discuss the next step."
        actions={[{ label: "Talk to an Expert", href: homeAnchor("contact") }]}
      />
    </>
  );
}
