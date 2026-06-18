import Container from "@/components/Container";
import PageTop from "@/components/PageTop";
import Socials from "@/components/Socials";

export const metadata = {
  title: "Connect",
};

export default function Connect() {
  return (
    <main className="min-h-screen pt-20 pb-24">
      <Container>
        <PageTop />

        <div className="mt-12 space-y-6 text-[17px] leading-9 text-[#3a3a3a]">
          <p>
            If you&apos;re interested in talking about new ideas, especially
            related to the brain, BCIs, genetic therapy, or deep learning more
            broadly, I&apos;m always eager and would love to chat.
          </p>
          <p>
            Send me an email at{" "}
            <a
              href="mailto:duggalr42@gmail.com"
              className="underline decoration-[#cfcac4] underline-offset-[3px] transition-colors hover:decoration-foreground"
            >
              duggalr42@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Socials />
        </div>
      </Container>
    </main>
  );
}
