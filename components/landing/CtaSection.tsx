export function CtaSection() {
  return (
    <section className="py-section-padding-desktop">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="soft-bg-gradient rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl border border-primary/5">
          <div className="relative z-10">
            <h2
              className="text-headline-xl mb-stack-md text-on-surface"
              style={{ fontFamily: "var(--font-display)" }}
            >
              글쓰기를 혁신할 준비가 되셨나요?
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-10">
              10,000명 이상의 작가와 함께 하세요. 당신의 목소리를 더 선명하고
              강력하게 만들어 드립니다.
            </p>
            <div className="flex flex-col items-center gap-4">
              <button
                type="button"
                className="primary-gradient text-white px-10 py-4 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                무료 체험 시작
              </button>
              <span className="text-on-surface-variant text-label-md">
                신용카드 필요 없음 · 14일 무료 체험
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
