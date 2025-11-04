import Link from 'next/link';
import StarBorder from '@/components/StarBorder';
import type { Metadata } from 'next';
import CardNav from '@/components/CardNav';

export const metadata: Metadata = {
  title: 'Contact • Darren',
  description: 'Contact Darren for work or collaboration',
};

export default function ContactPage() {
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
    ctaHref: '#contact',
  };

  return (
    <main>
      <CardNav {...cardNavProps} />
      <br></br><br></br>
      <section className="container-std py-16 md:py-24">
      <div className="rounded-2xl glass p-8 md:p-10 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">Let’s build something</h1>
        <p className="mt-3 text-[var(--muted)]">Open for freelance or collaboration. Say hello anytime.</p>

        <div className="mt-8">
          <StarBorder className="inline-block" color="var(--foreground)" speed="5s">
            <Link href="mailto:darrenms7120@gmail.com" aria-label="Email Darren">Get in touch</Link>
          </StarBorder>
        </div>

        <div className="mt-8">
          <StarBorder>
              <Link href="/" aria-label="Back to home">Back to home</Link>
          </StarBorder>
        </div>
      </div>
      </section>
    </main>
  );
}
