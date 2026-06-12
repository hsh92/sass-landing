import { BRAND_NAME, FOOTER_LINKS } from "@/lib/landing-data";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-variant py-section-padding-mobile md:py-16">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div
            className="text-headline-md font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {BRAND_NAME}
          </div>
          <p className="text-on-surface-variant text-body-md">
            최첨단 AI 기술로 당신의 글쓰기에 날개를 달아드립니다. 더 빠르고
            완벽한 결과물을 경험하세요.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-on-surface">Product</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.product.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-on-surface">Support</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.support.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-on-surface">Social</h4>
          <ul className="space-y-3">
            {FOOTER_LINKS.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-surface-variant/50">
        <p className="text-on-surface-variant text-body-md text-center md:text-left">
          © 2024 {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
