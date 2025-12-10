import CardNav from '@/components/CardNav';
import SkillsTerminal from '../../components/SkillsTerminal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills • Darren',
  description: 'Skills and tooling showcased in a terminal UI',
};

export default function SkillsPage() {
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

  return (
    <main>
      <CardNav
        logo="/logo.svg"
        logoAlt="Company Logo"
        items={navItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        ctaText="Get Started"
        ctaHref="/contact"
      />

      <section className="container-std py-16 md:py-24">
        <br></br><br></br>
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <p className="text-[var(--muted)] mb-8">I specialize in creating minimal, typography-focused digital experiences using modern web technologies.</p>

        <SkillsTerminal />
      </section>
    </main>
  );
}
