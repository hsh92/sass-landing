import { BRAND_NAME, FEATURES } from "@/lib/landing-data";
import { MaterialIcon } from "./MaterialIcon";

export function Features() {
  return (
    <section
      id="features"
      className="bg-surface-container-low py-section-padding-desktop"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-20">
          <h2
            className="text-headline-xl mb-stack-md"
            style={{ fontFamily: "var(--font-display)" }}
          >
            창의성을 위한 모든 도구
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            글쓰기에만 집중할 수 있도록 {BRAND_NAME}가 나머지를 처리합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-8 rounded-xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg primary-gradient flex items-center justify-center text-white mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                <MaterialIcon name={feature.icon} className="text-[28px]" />
              </div>
              <h3
                className="text-headline-md mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h3>
              <p className="text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
