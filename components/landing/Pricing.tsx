"use client";

import { useState } from "react";
import { PRICING_PLANS } from "@/lib/landing-data";
import { MaterialIcon } from "./MaterialIcon";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-section-padding-desktop bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2
            className="text-headline-xl mb-stack-md"
            style={{ fontFamily: "var(--font-display)" }}
          >
            합리적인 플랜
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span
              className={`font-medium ${!isYearly ? "text-on-surface" : "text-on-surface-variant"}`}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setIsYearly((prev) => !prev)}
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                isYearly ? "bg-primary/20" : "bg-surface-container-highest"
              }`}
              aria-label="연간 결제 토글"
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full primary-gradient transition-all duration-300 shadow-sm ${
                  isYearly ? "translate-x-6" : ""
                }`}
              />
            </button>
            <span
              className={`font-medium ${isYearly ? "text-on-surface" : "text-on-surface-variant"}`}
            >
              Yearly <span className="text-primary text-sm">(20% Off)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            if (plan.highlighted) {
              return (
                <div
                  key={plan.id}
                  className="relative bg-surface-container-lowest p-12 rounded-2xl border-4 border-primary pro-glow flex flex-col transform scale-110 z-20 transition-transform hover:scale-[1.12]"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 primary-gradient text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                    {plan.badge}
                  </div>
                  <h3
                    className="text-headline-md mb-2 text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-extrabold">${price}</span>
                    <span className="text-on-surface-variant font-medium">
                      /mo
                    </span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={feature} className="flex items-center gap-3">
                        <MaterialIcon
                          name="check_circle"
                          className={`text-primary ${index === 0 ? "font-bold" : ""}`}
                        />
                        {index === 0 ? <b>{feature}</b> : feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-full py-4 rounded-xl font-bold primary-gradient text-white hover:shadow-xl hover:shadow-primary/40 transition-all duration-200 active:scale-95 text-lg"
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            }

            return (
              <div
                key={plan.id}
                className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant flex flex-col h-fit opacity-90 hover:opacity-100 transition-opacity"
              >
                <h3
                  className="text-headline-md mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${price}</span>
                  <span className="text-on-surface-variant">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <MaterialIcon
                        name="check_circle"
                        className="text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="w-full py-3 rounded-lg font-bold border border-outline-variant hover:bg-surface-container-low transition-colors duration-200"
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
