const profile = {
  name: "Malipeddi Sekhar",
  role: "Frontend Developer / React Developer",
  githubUrl: "https://github.com/malipeddisekhar?tab=overview&from=2025-10-01&to=2025-10-11",
  linkedinUrl: "https://www.linkedin.com/in/malipeddi-sekhar-08650630b/",
};

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-4xl px-4 py-6 text-center sm:px-6 lg:px-8">
        <p className="text-base font-semibold text-white">{profile.name}</p>
        <p className="mt-1 text-sm text-stone-400">{profile.role}</p>

        <div className="mt-3 flex items-center justify-center gap-4 text-sm">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-stone-300 transition hover:text-white"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.49 0-.24-.01-1.03-.01-1.86-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.69.95.69 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.17.6.67.49A10.27 10.27 0 0022 12.25C22 6.59 17.52 2 12 2z" />
            </svg>
            GitHub
          </a>
          <span className="text-stone-600">|</span>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-stone-300 transition hover:text-white"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.02 2.02 0 003.2 5.02c0 1.11.9 2.02 2 2.02h.03a2.02 2.02 0 100-4.04H5.25zM20.44 12.57c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.12-3.38 1.91V8.5H9.37c.04.59 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.93.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.05 1.88 2.58V20H20v-6.82c0-.36.44-.61.44-.61z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}