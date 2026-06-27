import Link from "next/link";
import Container from "@/components/Container";
import NameHeader from "@/components/NameHeader";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="min-h-screen pt-28 pb-24 sm:pt-[22vh]">
      <Container>
        <NameHeader as="home" />

        <p className="mt-9 text-[17px] leading-9 text-[#3a3a3a]">
          My primary focus right now is building <Link
            href="https://www.sayra.dev/"
            className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
          >Sayra</Link>, an app that helps people with dysarthria turn slurred speech into clear, understandable speech.
          I post updates on my blog{" "}
          <Link
            href="/writings"
            className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            here
          </Link>{" "}
          and on{" "}
          <a
            href="https://x.com/duggalr42"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            X
          </a>.
        </p>

        <p className="mt-7 text-[17px] leading-9 text-[#3a3a3a]">
          Other than that, I also recently built{" "}
          <a
            href="https://www.joygram.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            Joygram
          </a>
          , where 10-15 cards get made every day with no marketing, and{" "}
          <a
            href="https://www.youtube.com/watch?v=2B5g7iU7ulU"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            PoolShark
          </a>
          , a reinforcement-learning based AI agent that plays 9-ball like a professional player.
        </p>

        <div className="mt-12">
          <Nav />
        </div>

        <div className="mt-12">
          <Socials />
        </div>
      </Container>
    </main>
  );
}
