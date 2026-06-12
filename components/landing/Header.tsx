import { BRAND_NAME, NAV_LINKS } from "@/lib/landing-data";

export function Header() {
  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-surface-variant/30">
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-headline-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {BRAND_NAME}
          </a>
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-label-md transition-colors duration-200 ${
                  index === 0
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant font-medium hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="hidden sm:block text-on-surface-variant font-medium hover:text-primary transition-all duration-150 active:scale-95 text-label-md"
          >
            Login
          </button>
          <button
            type="button"
            className="primary-gradient text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 active:scale-95 text-label-md"
          >
            무료 체험 시작
          </button>
        </div>
      </div>
    </header>
  );
}
