import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerCompany, site } from "@/data/site";
import { services } from "@/data/services";
import {
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@/lib/icons";

/**
 * Global enterprise footer: brand, solutions index, company links and
 * verified contact information.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950">
      <div
        aria-hidden="true"
        className="bg-grid-dark mask-fade-b pointer-events-none absolute inset-0 opacity-50"
      />
      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-300">
              Enterprise IT infrastructure, networking, data-centre
              technology and security solutions for organizations that
              depend on their technology.
            </p>
            <p className="mt-6 flex items-center gap-2.5 text-xs text-navy-400">
              <IconMapPin className="size-4 shrink-0 text-accent-400" />
              {site.locationLabel}
            </p>
          </div>

          {/* Solutions */}
          <nav aria-label="Solutions" className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-400">
              Solutions
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href="#solutions"
                    className="text-sm text-navy-200 transition-colors hover:text-accent-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-400">
              Company
            </h2>
            <ul className="mt-5 space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-navy-200 transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-400">
              Get in Touch
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-navy-200">
              <p className="leading-relaxed">
                {site.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="space-y-1">
                {site.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="flex items-center gap-2.5 transition-colors hover:text-accent-300"
                  >
                    <IconPhone className="size-4 shrink-0 text-accent-400" />
                    {phone.label}
                  </a>
                ))}
              </p>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 transition-colors hover:text-accent-300"
              >
                <IconMail className="size-4 shrink-0 text-accent-400" />
                {site.email}
              </a>
              <p className="flex items-center gap-2.5">
                <IconClock className="size-4 shrink-0 text-accent-400" />
                {site.hours}
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Enterprise IT Infrastructure · Networking · Data Centres ·
            Security
          </p>
        </div>
      </Container>
    </footer>
  );
}
