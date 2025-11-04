import Link from 'next/link';
import StarBorder from '@/components/StarBorder';
import CardNav from '@/components/CardNav';
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiLine } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About • Darren',
  description: 'About Darren — background and interests',
};

export default function AboutPage() {
  const navItems = [
    {
      label: "Discover Pages",
      bgColor: "#0D0716",
      textColor: "#fff",
        links: [
        { label: "Home", ariaLabel: "Home pages", href: "/" },
        { label: "About Me", ariaLabel: "About Me", href: "/about" },
        { label: "Skills", ariaLabel: "Skills", href: "/skills" },
        { label: "Projects", ariaLabel: "Projects", href: "/projects" },
      ],
    },
    {
      label: "My Projects & Skills",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Skills", ariaLabel: "Skills", href: "/skills" },
        { label: "Projects", ariaLabel: "Projects", href: "/projects" },
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
      <section className="container-std mt-2 md:mt-4 py-16 md:py-24">
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: portrait + intro text */}
          <div className="flex flex-col items-start gap-6">
            {/* NOTE: place the image file into `public/` as `PASFOTO (2).png` */}
            <div className="w-48 h-48 rounded-full overflow-hidden border border-white/10">
              <img src="/PASFOTO (2).png" alt="Darren photo" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-3">About</h1>
              <p className="text-[var(--muted)] text-lg leading-relaxed">
                I'm a junior full stack developer passionate about creating meaningful digital experiences. My work combines modern web technologies with clean, efficient code.
              </p>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Connect</h3>
                <div className="flex items-center gap-3">
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

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Contact Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="mailto:darrenms7120@gmail.com" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-transparent">
                    <HiOutlineMail className="w-5 h-5" />
                    <span className="truncate">darrenms7120@gmail.com</span>
                  </a>

                  <a href="https://wa.me/6281213663540" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-transparent" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="w-5 h-5" />
                    <span>+62 812-1366-3540</span>
                  </a>

                  <a href="https://line.me/ti/p/~darrenms07" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-transparent" target="_blank" rel="noopener noreferrer">
                    <SiLine className="w-5 h-5" />
                    <span>@darrenms07</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: experience + education */}
          <div className="space-y-8">
            <div className="relative">
              <br></br>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <span className="absolute left-3 top-6 bottom-0 w-px bg-white/10" aria-hidden />
              <ul className="space-y-6 pl-8">
                <li className="relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">Intern</h3>
                      <p className="text-sm text-[var(--muted)]">Tech Company</p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)]">
                      <span>2023</span>
                      <span className="text-xs">Soon</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <span className="absolute left-3 top-6 bottom-0 w-px bg-white/10" aria-hidden />
              <ul className="space-y-6 pl-8">

                <li className="relative">
                  <div className="flex items-start justify-between">
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

                <li className="relative">
                  <div className="flex items-start justify-between">
                    <div className="max-w-xl">
                      <h3 className="font-semibold">University of Indonesia</h3>
                      <ul className="mt-2 list-disc list-inside text-sm text-[var(--muted)]">
                        <li>Relevant Coursework: Data Structures & Algorithms, Databases, Operating Systems, HCI, Numerical Analysis</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-end text-sm text-[var(--muted)]">
                      <span>2023</span>
                      <span className="text-xs">2025</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Skills CTA below education */}
            <div className="mt-6">
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
