import Link from "next/link";
import NameHeader from "./NameHeader";

// Sub-page header row: the name/title on the left, a "home" link on the right.
export default function PageTop({ label = "Rahul Duggal" }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <NameHeader as="page" label={label} />
      <Link
        href="/"
        className="shrink-0 text-[15px] text-muted transition-colors hover:text-foreground"
      >
        home
      </Link>
    </div>
  );
}
