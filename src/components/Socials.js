import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa6";

const socials = [
  { icon: FaGithub, url: "https://github.com/duggalr", label: "GitHub" },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/rahul-duggal-309a432a6/",
    label: "LinkedIn",
  },
  { icon: FaYoutube, url: "https://www.youtube.com/@duggalr", label: "YouTube" },
  { icon: FaXTwitter, url: "https://x.com/duggalr42", label: "X" },
  { icon: FaTiktok, url: "https://www.tiktok.com/@duggalr42", label: "TikTok" },
  { icon: FaEnvelope, url: "mailto:duggalr42@gmail.com", label: "Email" },
];

export default function Socials() {
  return (
    <div className="flex gap-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target={social.url.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-muted transition-colors hover:text-foreground"
        >
          <social.icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
