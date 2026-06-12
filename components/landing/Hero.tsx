import Image from "next/image";
import { BRAND_NAME, HERO_MOCKUP_IMAGE } from "@/lib/landing-data";
import { MaterialIcon } from "./MaterialIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-section-padding-mobile md:pt-section-padding-desktop pb-section-padding-desktop soft-bg-gradient">
      <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-label-md mb-stack-lg">
          <MaterialIcon name="auto_awesome" className="text-[18px]" />
          <span>AI Writing Evolution</span>
        </div>

        <h1
          className="text-display-lg-mobile md:text-display-lg max-w-4xl mx-auto mb-stack-md leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          AI와 함께{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            더 빠르게 더 잘
          </span>{" "}
          쓰세요.
        </h1>

        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. {BRAND_NAME}의
          지능형 어시스턴트가 당신의 집필 속도를 10배 높여드립니다.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <button
            type="button"
            className="primary-gradient text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 active:scale-95 min-w-[200px]"
          >
            무료 체험 시작
          </button>
          <button
            type="button"
            className="bg-surface-container-lowest border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all duration-200 active:scale-95 min-w-[200px] flex items-center justify-center gap-2"
          >
            <MaterialIcon name="play_circle" />
            데모 보기
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
            <Image
              src={HERO_MOCKUP_IMAGE}
              alt={`${BRAND_NAME} AI Assistant Mockup`}
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl shadow-inner"
              priority
            />
          </div>
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10 animate-float" />
          <div
            className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-float"
            style={{ animationDelay: "-2s" }}
          />
        </div>
      </div>
    </section>
  );
}
