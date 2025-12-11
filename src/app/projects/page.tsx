import Link from 'next/link';
import StarBorder from '@/components/StarBorder';
import CardNav from '@/components/CardNav';
import ProjectsListClient from '@/components/ProjectsListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Darren',
  description: 'Projects by Darren',
};

const projects = [
  {
    id: 'urbaneat',
    title: 'UrbanEat - Food and NYC Restaurant Discovery',
    subtitle: '',
    desc: 'UrbanEat is a food guide and review platform that focuses exclusively on restaurants and eateries in New York City (NYC), United States. UrbanEat allows users to discover, rate, and review their dining experiences. Users can also view photos of restaurants and check out detailed reviews from fellow diners. UrbanEat is a resource for locals and tourists looking to explore NYC\'s iconic culinary scene where one can find all types of restaurant to cater to their cravings, from Italian to Mediterranean.',
    details: {
      tech: ['Python', 'CSS', 'HTML'],
      period: '2024',
      notes: 'Mock discovery app with search, filters and responsive UI. Focused on component reusability and UX.',
    },
    image: '',
    repo: 'https://github.com/kevinadriano1/urbaneat',
    live: 'https://urbaneat.example.com',
  },
  {
    id: 'papikos',
    title: 'PapiKos - Rental and Boarding Finder',
    subtitle: '',
    desc: 'PapiKos is a boarding house rental application that connects landlords with potential tenants safely and quickly. This application allows tenants to search for, rent, and pay for boarding houses easily, while also helping landlords manage their properties more practically and in an organized manner.',
    details: {
      tech: ['Next.js', 'Node', 'PostgreSQL', 'Tailwind'],
      period: '2024-2025',
      notes: 'Full-stack app with auth, file uploads and owner dashboard for managing listings.',
    },
    image: '/image2.png',
    repo: 'https://github.com/Group3-AdvProg/papikos',
    live: 'https://unacceptable-martelle-group3-advprog-7fb35194.koyeb.app/',
  },
  {
    id: 'mist-feb',
    title: 'MIST FEB UI Website - Campus Event',
    subtitle: '',
    desc: 'Campus event site (mock) showcasing schedules, speakers and event highlights. Emphasizes fast static pages and deployability.',
    details: {
      tech: ['Next.js', 'Tailwind', 'HTML', 'Vercel'],
      period: '2025 - 2026',
      notes: 'Designed for quick publishing and event management; uses static-generation where appropriate.',
    },
    image: ['/MIST/image3.png','/MIST/image4.png','/MIST/image5.png','/MIST/image6.png','/MIST/image7.png'],
    repo: 'https://github.com/MIST-FEB',
    live: 'https://www.mistfebui.info/',
  },
  {
    id: 'pantautular',
    title: 'PantauTular by BRIN - Public Health Monitoring Platform',
    subtitle: 'React/Next.js, Django/DRF, PostgreSQL, Tailwind, JWT | 2025',
    desc: 'Web app to report and visualize public health incidents. Features role based access, simple data CRUD, charts dashboard, PNG export, and activity logs.',
    details: {
      tech: ['React/Next.js', 'Django/DRF', 'PostgreSQL', 'Tailwind', 'JWT'],
      period: '2025',
      notes: 'Health incident reporting platform with data visualization and role-based access control.',
    },
    image: ['/PantauTular/PantauTular.png', '/PantauTular/PantauTular4.png','/PantauTular/PantauTular1.png', '/PantauTular/PantauTular2.png','/PantauTular/PantauTular6.png', '/PantauTular/PantauTular3.png', '/PantauTular/PantauTular5.png'],
    repo: 'https://github.com/PPL-BRIN-2025',
    live: 'https://keen-jewelle-samuellapnadia-71c13d07.koyeb.app/',
  },
  {
    id: 'IndoXport',
    title: 'IndoExport – Traceable Export & QC Platform',
    subtitle: 'React/Next.js | 2025',
    desc: 'Web platform that digitizes shrimp export workflows. Supports batch registration, simulated contaminant QC, immutable ledger logging, verified marketplace listings, buyer–supplier matchmaking, auto-generated export documents, and basic T/T–L/C payment simulation.',
    details: {
      tech: ['React/Next.js'],
      period: '2025',
      notes: 'Comprehensive export management platform with focus on traceability and workflow automation.',
    },
    image: ['/IndoXport/IndoXport.png', '/IndoXport/IndoXport1.png', '/IndoXport/IndoXport2.png', '/IndoXport/IndoXport3.png', '/IndoXport/IndoXport4.png', '/IndoXport/IndoXport5.png', '/IndoXport/IndoXport6.png', '/IndoXport/IndoXport7.png'],
    repo: 'https://github.com/geordievannese/IndoXport',
    live: 'https://indo-xport.vercel.app/',
  },
];

const publications = [
  {
    title: '180-Day Mortality Prediction for Critically Ill Patients',
    outlet: 'Co-author, Fasilkom UI',
    year: '2025',
    href: '/Publications/180-Day%20Mortality%20Prediction%20for%20Critically%20Ill%20Patients.pdf',
    summary:
      'Built ML experiments (XGBoost with hyper-parameter tuning), evaluated with Accuracy/ROC-AUC, and led feature-importance analysis.',
  },
];

export default function ProjectsPage() {
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
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Projects</h1>
      <ProjectsListClient projects={projects} />

      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Publications</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {publications.map((pub) => (
            <article key={pub.title} className="glass rounded-2xl p-6 border border-white/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{pub.title}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{pub.outlet} - {pub.year}</p>
                </div>
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline underline-offset-4"
                  aria-label={`Read ${pub.title}`}
                  download
                >
                  Read
                </a>
              </div>
              <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed">{pub.summary}</p>
            </article>
          ))}
        </div>
      </section>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <StarBorder>
              <Link href="/skills" aria-label="cd skills">cd skills</Link>
          </StarBorder>
          <StarBorder>
              <Link href="/achievements" aria-label="cd achievements">cd achievements</Link>
          </StarBorder>
        </div>
      </section>
    </main>
  );
}
