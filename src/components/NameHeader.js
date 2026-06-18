import Link from "next/link";

// The single typographic anchor of the site. Large on the home page,
// compact (and linking home) on every sub-page.
export default function NameHeader({ as = "home", label = "Rahul Duggal" }) {
  if (as === "home") {
    return (
      <h1 className="text-[40px] font-semibold leading-none tracking-[-0.03em] text-foreground sm:text-[52px]">
        {label}
      </h1>
    );
  }

  return (
    <Link
      href="/"
      className="text-[22px] font-semibold tracking-[-0.02em] text-foreground transition-opacity hover:opacity-70"
    >
      {label}
    </Link>
  );
}
