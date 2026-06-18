import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import Container from "@/components/Container";
import PageTop from "@/components/PageTop";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";

export const metadata = {
  title: "About",
};

const projects = [
  {
    title: "Dysarthria speech translation",
    href: null,
    github: null,
    blurb:
      "My primary research focus right now: an app that translates the slurred speech of people with dysarthria into clear, understandable speech.",
  },
  {
    title: "Joygram",
    href: "https://www.joygram.io",
    github: null,
    blurb:
      "A side project that's quietly taken off, with 10-15 cards made every day and no marketing.",
  },
  {
    title: "PoolShark",
    href: "https://www.youtube.com/watch?v=2B5g7iU7ulU",
    github: null,
    blurb:
      "A reinforcement-learning agent that learned to play 9-ball at a professional level, including spin, position play, safeties, and kicks. Built in 6 weeks with an AlphaGo-style approach (value/policy networks + MCTS, trained via self-play). Now co-writing a paper with researchers at Cornell.",
  },
  {
    title: "Companion AI",
    href: "https://www.youtube.com/watch?v=4Plt_sh_cIg",
    github: null,
    blurb:
      "A personal AI tutor for learning to code, guiding you through exercises and side projects with real-time help, like a tutor available 24/7.",
  },
  {
    title: "Curiso",
    href: "https://curiso.app/",
    github: "https://github.com/duggalr/cursio",
    blurb:
      "A web app that generates 3Blue1Brown style videos on any topic you want to learn about.",
  },
  {
    title: "CreatorCoin",
    href: "https://www.youtube.com/watch?v=iYg_-q4DqJU",
    github: "https://github.com/duggalr/creator-coin-main",
    blurb:
      "A medium to help individuals fund their personal side projects through NFTs.",
  },
  {
    title: "Natural Language to SQL Playground",
    href: "https://www.youtube.com/watch?v=0l16BQMCFtA",
    github: null,
    blurb: "A playground to convert natural language into SQL queries.",
  },
  {
    title: "Conversational AI over ArXiv papers",
    href: "https://www.youtube.com/watch?v=VpFRkbKprLE",
    github: null,
    blurb: "Conversational AI search across ArXiv research papers.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen pt-20 pb-24">
      <Container>
        <PageTop />

        <div className="mt-8 space-y-5 text-[17px] leading-8 text-[#3a3a3a]">
          <p>
            I&apos;m Rahul, a Software Engineer at <a href="https://www.lambda.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground">Lambda AI</a>. I went to school at UofT from 2016 to 2019 but ended up taking a gap year in 2019 to study CS on my own, primarily from MIT OCW and textbooks.
            <br/><br/>
            Since then, I&apos;ve done various internships and full-time SWE roles at various YC startups, and currently I am a SWE at Lambda AI.
            <br/><br/>
            Outside of work, I spend a lot of my time building various side projects, from cryptography to reinforcement learning to AI tutoring to now, dysarthria speech translation.
            I like working on technically challenging problems that ideally can have a large impact on humanity.
            <br/><br/>
            At the moment, I am primarily focused on building an app that translates the slurred speech of people with dysarthria into clear, understandable speech. It&apos;s been a lot of fun and I post updates on my blog <Link href="/writings" className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground">here</Link>.
            <br/><br/>
            I also make motivational videos on{" "}
            <a
              href="https://www.tiktok.com/@duggalr42"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
            >
              TikTok
            </a>{" "}
            videos in my spare time. 😊
          </p>
        </div>

        <h2 className="mt-10 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground">
          A few recent projects
        </h2>

        <ul className="mt-7 space-y-9">
          {projects.map((project) => (
            <li key={project.title}>
              <div className="flex items-center justify-between gap-4">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[17px] font-medium text-foreground underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="text-[17px] font-medium text-foreground">
                    {project.title}
                  </span>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="shrink-0 text-muted transition-colors hover:text-foreground"
                  >
                    <FaGithub className="h-[18px] w-[18px]" />
                  </a>
                )}
              </div>
              <p className="mt-1.5 text-[16px] leading-7 text-[#5a5a5a]">
                {project.blurb}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <Nav />
          <Socials />
        </div>
      </Container>
    </main>
  );
}
