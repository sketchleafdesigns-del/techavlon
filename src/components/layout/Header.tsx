import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNav, site } from "@/data/site";
import { services } from "@/data/services";
import {
  IconChevronDown,
  IconClock,
  IconMail,
  IconMapPin,
  IconMenu,
  IconPhone,
  IconX,
} from "@/lib/icons";

/**
 * Sticky global header:
 *  - slim utility bar with verified contact details (desktop, top of page)
 *  - primary navigation with a Solutions dropdown
 *  - full-screen mobile menu with an expandable Solutions list
 *
 * Solutions links point to the homepage solutions section for now;
 * each entry swaps to its dedicated page route once the page exists.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openSolutions = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };

  const closeSolutionsDelayed = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(
      () => setSolutionsOpen(false),
      140
    );
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header id="top" className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar — verified office details */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-white/5 bg-navy-950 transition-all duration-300 lg:block",
          scrolled ? "max-h-0 border-transparent" : "max-h-10"
        )}
      >
        <Container className="flex h-9 items-center justify-between text-xs text-navy-300">
          <p className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <IconMapPin className="size-3.5 text-accent-400" />
              {site.locationLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconClock className="size-3.5 text-accent-400" />
              {site.hours}
            </span>
          </p>
          <p className="flex items-center gap-6">
            <a
              href={site.primaryPhone.href}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <IconPhone className="size-3.5 text-accent-400" />
              {site.primaryPhone.label}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <IconMail className="size-3.5 text-accent-400" />
              {site.email}
            </a>
          </p>
        </Container>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b backdrop-blur-md transition-all duration-300",
          scrolled || mobileOpen
            ? "border-white/10 bg-navy-950/95 shadow-[0_12px_32px_-14px_rgba(4,7,14,0.8)]"
            : "border-white/5 bg-navy-950/85"
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <li
                onMouseEnter={openSolutions}
                onMouseLeave={closeSolutionsDelayed}
              >
                <button
                  type="button"
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setSolutionsOpen((open) => !open)
                  }
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    solutionsOpen
                      ? "bg-white/5 text-white"
                      : "text-navy-100 hover:bg-white/5 hover:text-white"
                  )}
                >
                  Solutions
                  <IconChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      solutionsOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Solutions dropdown */}
                <div
                  className={cn(
                    "absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-3 transition-all duration-200",
                    solutionsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  )}
                >
                  <div className="overflow-hidden rounded-lg border border-line bg-white shadow-lift">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <a
                            key={service.slug}
                            href="#solutions"
                            onClick={closeMobile}
                            className="rounded-md px-3.5 py-2.5 transition-colors hover:bg-surface"
                          >
                            <span className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                              <Icon className="size-4 shrink-0 text-accent-600" />
                              {service.name}
                            </span>
                            <span className="mt-0.5 block pl-6 text-xs leading-snug text-ink-500">
                              {service.short}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-line bg-surface px-4 py-2.5">
                      <span className="text-xs text-ink-500">
                        Delivered individually or as an integrated solution
                      </span>
                      <a
                        href="#contact"
                        className="shrink-0 text-xs font-semibold text-accent-700 transition-colors hover:text-ink-900"
                      >
                        Talk to an Expert →
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {primaryNav
                .filter((item) => item.label !== "Solutions")
                .map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block rounded-md px-3.5 py-2 text-sm font-medium text-navy-100 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href="#contact"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Talk to an Expert
            </ButtonLink>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-md border border-white/15 text-white transition-colors hover:border-accent-400/60 lg:hidden"
            >
              {mobileOpen ? (
                <IconX className="size-5" />
              ) : (
                <IconMenu className="size-5" />
              )}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-navy-950 lg:hidden"
        >
          <div className="bg-grid-dark min-h-full pb-12 pt-4">
            <Container>
              <nav aria-label="Mobile">
                <ul className="divide-y divide-white/10">
                  <li className="py-1">
                    <button
                      type="button"
                      aria-expanded={mobileSolutionsOpen}
                      onClick={() =>
                        setMobileSolutionsOpen((open) => !open)
                      }
                      className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-white"
                    >
                      Solutions
                      <IconChevronDown
                        className={cn(
                          "size-4 text-navy-300 transition-transform duration-200",
                          mobileSolutionsOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileSolutionsOpen ? (
                      <ul className="mb-2 space-y-0.5 border-l border-white/10 pl-4">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <li key={service.slug}>
                              <a
                                href="#solutions"
                                onClick={closeMobile}
                                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-[15px] text-navy-100 transition-colors hover:bg-white/5 hover:text-white"
                              >
                                <Icon className="size-4 shrink-0 text-accent-400" />
                                {service.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                  {primaryNav
                    .filter((item) => item.label !== "Solutions")
                    .map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={closeMobile}
                          className="flex items-center justify-between py-3.5 text-base font-semibold text-white transition-colors hover:text-accent-300"
                        >
                          {item.label}
                          <span
                            aria-hidden="true"
                            className="text-navy-500"
                          >
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>

              <ButtonLink
                href="#contact"
                onClick={closeMobile}
                className="mt-8 w-full"
                size="lg"
              >
                Talk to an Expert
              </ButtonLink>

              <div className="mt-8 space-y-2.5 text-sm text-navy-300">
                <a
                  href={site.primaryPhone.href}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <IconPhone className="size-4 text-accent-400" />
                  {site.primaryPhone.label}
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <IconMail className="size-4 text-accent-400" />
                  {site.email}
                </a>
                <p className="flex items-start gap-2.5 leading-relaxed">
                  <IconMapPin className="mt-0.5 size-4 shrink-0 text-accent-400" />
                  {site.addressLines.join(" ")}
                </p>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
