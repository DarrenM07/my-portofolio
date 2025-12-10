import Link from 'next/link';
import StarBorder from '@/components/StarBorder';
import CardNav from '@/components/CardNav';
import ProjectsListClient from '@/components/ProjectsListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements & Certifications | Darren',
  description: 'Highlights of Darren achievements and certifications',
};

const achievements = [
  {
    id: 'socieact-bem',
    title: 'SOCIEACT BEM FASILKOM - Volunteer Certificate',
    subtitle: 'BEM Fasilkom UI',
    desc: 'Volunteer certificate for SocieAct community outreach.',
    details: {
      tech: ['Community', 'Mentoring'],
      period: 'Issued Sep 2024',
      notes: 'Contributed to outreach sessions focused on digital literacy.',
    },
  },
  {
    id: 'toefl-itp',
    title: 'TOEFL ITP',
    subtitle: 'Certification',
    desc: 'English proficiency certificate.',
    details: {
      tech: ['English Proficiency'],
      period: 'Issued Jul 2023 - Expires Jul 2025',
      notes: 'Covers listening, structure, and reading comprehension.',
    },
  },
  {
    id: 'hology-ub',
    title: 'HOLOGY UB - Participant Certificate',
    subtitle: 'Credential ID: 106/STF.E/HOLOGY7.0/XI/2024',
    desc: 'Participation in HOLOGY UB event.',
    details: {
      tech: ['Competition'],
      period: '2024',
      notes: 'Engaged in tech event activities and submissions.',
    },
  },
  {
    id: 'pekan-ristek',
    title: 'Pekan RISTEK - 3rd Place Mini Hackathon Competition',
    subtitle: 'Credential: R2025-5786-9696',
    desc: 'Placed 3rd in the Mini Hackathon.',
    details: {
      tech: ['Hackathon', 'Product'],
      period: '2025',
      notes: 'Built and pitched a prototype under time constraints.',
    },
  },
];

export default function AchievementsPage() {
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
      <CardNav {...cardNavProps} />

      <section className="container-std py-16 md:py-24">
      <br></br><br></br>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Achievements & Certifications</h1>
      <ProjectsListClient projects={achievements} />

      <div className="mt-8">
        <StarBorder>
            <Link href="/" aria-label="Back to home">Back to home</Link>
        </StarBorder>
      </div>
      </section>
    </main>
  );
}
