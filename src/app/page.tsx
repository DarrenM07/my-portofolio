// src/app/page.tsx
import CardNav from "@/components/CardNav";
import HeroSpline from "@/components/HeroSpline";
import ShimmerButton from "@/components/ShimmerButton";
import StarBorder from '@/components/StarBorder';
import Year from "@/components/Year";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function Page() {
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

  return (
    <main className="min-h-screen flex flex-col">
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

      <div className="flex-grow">
        {/* HERO */}
        <section className="relative overflow-visible md:overflow-hidden min-h-[100vh] flex flex-col md:flex-row items-center">
          {/* HERO CONTENT */}
          <div className="md:absolute md:inset-0 flex items-center">
            <div className="container-std h-full flex items-start pt-20 md:pt-24 md:max-w-[1600px] lg:max-w-[2000px]">
              <div className="w-full md:w-1/2 pointer-events-auto z-20">
              <br></br><br></br>
                <div className="max-w-xl">

                  <p className="inline-block mb-6 bg-white/5 text-sm text-[var(--accent)] rounded-full px-4 py-1 backdrop-blur">
                    ✨ Innovation For the Future
                  </p>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4 text-gradient drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
                    WELCOME TO Darren's<br/>PORTOFOLIO
                  </h1>

                  <h2 className="text-xl md:text-2xl font-medium mb-4 text-[var(--accent)]">
                    Junior Software Engineer | AI Enthusiast
                  </h2>

                  <p className="text-[var(--muted)] text-base md:text-lg mb-6">
                    I'm a junior full stack developer passionate about creating meaningful digital experiences.
                    My work combines modern web technologies with clean, efficient code.
                  </p>

                  <div className="flex items-center gap-3">
                    <a className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/5 dark:bg-black/5"
                      href="https://github.com/DarrenM07" target="_blank">
                      <SiGithub className="w-5 h-5 text-[var(--foreground)]" />
                    </a>

                    <a className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/5 dark:bg-black/5"
                      href="https://www.instagram.com/darrenms_07" target="_blank">
                      <SiInstagram className="w-5 h-5 text-[var(--foreground)]" />
                    </a>

                    <a className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/5 dark:bg-black/5"
                      href="https://www.linkedin.com/in/darren-sidabutar-811852288/" target="_blank">
                      <SiLinkedin className="w-5 h-5 text-[var(--foreground)]" />
                    </a>
                  </div>

                  <div className="mt-6">
                    <StarBorder className="inline-block" color="var(--foreground)" speed="5s">
                      <Link href="/about">About Me</Link>
                    </StarBorder>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* SPLINE BG (mobile tetap h-96, desktop full) */}
          <HeroSpline
            sceneLight="https://prod.spline.design/2r0vSg8PZVAUrn13/scene.splinecode"
            sceneDark="https://prod.spline.design/LRES4pVbmvSya9aa/scene.splinecode"
            className="w-full md:absolute md:inset-0 md:h-[100vh] h-96 flex items-center justify-center"
            sceneLightOffset={"translateX(1%) translateY(22%) scale(2.00)"}
            sceneDarkOffset={"translateX(-18%) translateY(16%) scale(2.00)"}
            sceneLightClassName={"spline-offset-light"}
            sceneDarkClassName={"spline-offset-dark"}
            sceneLightClassNameMobile={"spline-offset-light-mobile"}
            sceneDarkClassNameMobile={"spline-offset-dark-mobile"}
            sceneLightOffsetDesktop={"translateX(22%) translateY(18%) scale(1.20)"}
            sceneDarkOffsetDesktop={"translateX(12%) translateY(14%) scale(1.20)"}
            sceneLightClassNameDesktop={"spline-offset-light-desktop"}
            sceneDarkClassNameDesktop={"spline-offset-dark-desktop"}
          />
        </section>
      </div>

      {/* (Explore section removed - single About button placed under social icons) */}

      <footer className="border-t border-white/10 py-6 text-center text-sm text-[var(--muted)]">
        © <Year /> Darren. All rights reserved.
      </footer>
    </main>
  );
}
