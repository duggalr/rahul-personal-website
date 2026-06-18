import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/writings", label: "writings" },
  { href: "/connect", label: "connect" },
];

export default function Nav() {
  return (
    <nav className="flex gap-7 text-[15px] text-muted">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="-my-2 py-2 transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
