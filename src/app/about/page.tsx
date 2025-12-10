import Link from 'next/link';
import StarBorder from '@/components/StarBorder';
import CardNav from '@/components/CardNav';
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiLine } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Darren',
  description: 'About Darren background and interests',
};

export default function AboutPage() {
  const navItems = [
    {
      label: "Discover",
      bgColor: "#0D0716",
      textColor: "#fff",
        links: [
        { label: "Home", ariaLabel: "Home pages", href: "/" },
        { label: "About Me", ariaLabel: "About Me", href: "/about" },
      ],
    },
    {
      label: "Work & Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Skills", ariaLabel: "Skills", href: "/skills" },
        { label: "Projects", ariaLabel: "Projects", href: "/projects" },
        { label: "Achievements", ariaLabel: "Achievements", href: "/achievements" },
      ],
    },
    {
      label: "Stay Connect !",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:darrenms7120@gmail.com" },
        { label: "Github", ariaLabel: "Github", href: "https://github.com/DarrenM07" },
        { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/darrenms_07" },
        { label: "Medium", ariaLabel: "Medium", href: "https://medium.com/@darren.marcello" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/darren-sidabutar-811852288/" },
      ],
    },
  ];

  const cardNavProps = {
    logo: '/logo.svg',
    logoAlt: 'Company Logo',
    items: navItems,
    baseColor: '#fff',
    menuColor: '#000',
    buttonBgColor: '#111',
    buttonTextColor: '#fff',
    ease: 'power3.out',
    ctaText: 'Get Started',
    ctaHref: '/contact',
  };

  return (
    <main>
      <CardNav {...cardNavProps} className="about-nav" />
      <section className="container-std mt-2 md:mt-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Left: portrait + intro text */}
          <div className="flex flex-col items-start gap-6 w-full">
            {/* NOTE: place the image file into `public/` as `PASFOTO (2).png` */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 mx-auto md:mx-0 mt-10 md:mt-12">
              <img src="/PASFOTO (2).png" alt="Darren photo" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-md space-y-6 w-full">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">About</h1>
              <p className="text-[var(--muted)] text-base md:text-lg leading-relaxed">
                I'm a junior full stack developer passionate about creating meaningful digital experiences. My work combines modern web technologies with clean, efficient code.
              </p>

              <div className="p-4 rounded-xl border border-white/10 glass">
                <h3 className="font-semibold mb-2">Connect</h3>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <a
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/5 dark:bg-black/5"
                    href="https://github.com/DarrenM07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="github"
                    title="GitHub"
                  >
                    <SiGithub className="w-5 h-5 text-[var(--foreground)]" />
                  </a>

                  <a
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/5 dark:bg-black/5"
                    href="https://www.instagram.com/darrenms_07"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                    title="Instagram"
                  >
                    <SiInstagram className="w-5 h-5 text-[var(--foreground)]" />
                  </a>

                  <a
                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/5 dark:bg-black/5"
                    href="https://www.linkedin.com/in/darren-sidabutar-811852288/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                    title="LinkedIn"
                  >
                    <SiLinkedin className="w-5 h-5 text-[var(--foreground)]" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 glass">
                <h3 className="font-semibold mb-2">Contact Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="mailto:darrenms7120@gmail.com" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-transparent hover:bg-white/5 transition">
                    <HiOutlineMail className="w-5 h-5" />
                    <span className="truncate">darrenms7120@gmail.com</span>
                  </a>

                  <a href="https://wa.me/6281213663540" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-transparent hover:bg-white/5 transition" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="w-5 h-5" />
                    <span>+62 812-1366-3540</span>
                  </a>

                  <a href="https://line.me/ti/p/~darrenms07" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-transparent hover:bg-white/5 transition" target="_blank" rel="noopener noreferrer">
                    <SiLine className="w-5 h-5" />
                    <span>@darrenms07</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: experience + education */}
          <div className="space-y-10">
            <div className="relative mt-10 md:mt-12 glass rounded-2xl border border-white/10 p-6">
              <div className="absolute inset-0 pointer-events-none bg-white/5 dark:bg-white/10 rounded-2xl" aria-hidden />
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Experience</h2>
              <ul className="timeline-list space-y-6 mt-4">
                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">Intern</h3>
                      <p className="text-sm text-[var(--muted)]">Tech Company</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)]">
                      <span>Soon</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative glass rounded-2xl border border-white/10 p-6">
              <div className="absolute inset-0 pointer-events-none bg-white/5 dark:bg-white/10 rounded-2xl" aria-hidden />
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Education</h2>
              <ul className="timeline-list space-y-6 mt-4">

                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">University of Indonesia</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">
                        Relevant Coursework: Data Structures & Algorithms, Databases, Operating Systems, HCI, Numerical Analysis
                      </p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)]">
                      <span>2023</span>
                      <span className="text-xs">2025</span>
                    </div>
                  </div>
                </li>

                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">Queensland University</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">(estimated) Relevant plans for advanced study</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)]">
                      <span>2026</span>
                      <span className="text-xs">2027 (est)</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative glass rounded-2xl border border-white/10 p-6">
              <div className="absolute inset-0 pointer-events-none bg-white/5 dark:bg-white/10 rounded-2xl" aria-hidden />
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Organizations & Volunteer</h2>
              <ul className="timeline-list space-y-6 mt-4">
                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">Interweek - Ticket Seller</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">Handled ticket transactions, kept accurate sales records, and promoted the event.</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)] text-right">
                      <span>Dec 2023</span>
                    </div>
                  </div>
                </li>

                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">Google Developer Student Clubs (GDSC) - Member</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">Joined study jams and tech sessions.</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)] text-right">
                      <span>Oct 2023 - Jan 2024</span>
                    </div>
                  </div>
                </li>

                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">BEM Fasilkom UI - SocieAct Mentor</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">Introduced children to technology and digital innovation through simple materials and demos; strengthened communication and teamwork.</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)] text-right">
                      <span>Sep 2024</span>
                    </div>
                  </div>
                </li>

                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">Pesta Rakyat Komputer - Human Resources Recruiter</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">Screened volunteer candidates, scheduled interviews, and maintained recruitment pipeline documentation.</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)] text-right">
                      <span>Feb 2025 - Oct 2025</span>
                    </div>
                  </div>
                </li>

                <li className="relative pl-8">
                  <span className="timeline-dot absolute left-0 top-2 inline-flex h-3 w-3 rounded-full shadow-sm" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">COMPFEST - Human Resources Recruiter</h3>
                      <p className="mt-2 text-sm text-[var(--muted)]">Defined criteria and recruitment flow, coordinated with cross-divisions, and supported volunteer onboarding.</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)] text-right">
                      <span>Mar 2025 - Nov 2025</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Skills CTA below education */}
            <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
              <StarBorder className="inline-block" color="var(--foreground)">
                <Link href="/CV/CV%20Darren%20Marcello%20Sidabutar.pdf" aria-label="Download CV" download>Download CV</Link>
              </StarBorder>
              <StarBorder className="inline-block" color="var(--foreground)">
                <Link href="/skills" aria-label="See skills and tools">View my skills</Link>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
