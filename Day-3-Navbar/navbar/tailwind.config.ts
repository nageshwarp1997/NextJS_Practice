/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "ctruh-light-primary": "var(--ctruh-light-primary)",
        "ctruh-dark-primary": "var(--ctruh-dark-primary)",
        "ctruh-light-secondary": "var(--ctruh-light-secondary)",
        "ctruh-dark-secondary": "var(--ctruh-dark-secondary)",
        "davys-gray": "var(--davys-gray)",
        "ctruh-background-dark": "var(--ctruh-background-dark)"
      },
      backgroundImage: {
        "ctruh-navbar-dark":
          "linear-gradient(180deg, #080808 0%, rgba(8, 8, 8, 0.75) 50%, rgba(8, 8, 8, 0.50) 75%, rgba(8, 8, 8, 0.00) 100%)",
        "ctruh-navbar-dark-reverse":
          "linear-gradient(180deg, rgba(8, 8, 8, 0.00) 0%, rgba(8, 8, 8, 0.50) 25%, rgba(8, 8, 8, 0.75) 50%, #080808 100%)",
        "sky-blue-burst": "radial-gradient(circle at 0 0, #25a6f9, #244cf8)",
        "fading-shadow":
          "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%)",
        "soft-silver-gradient": "linear-gradient(180deg, #FFF 0%, #999 100%)",
        "ctruh-gradient-accent":
          " linear-gradient(114deg, #00E5D1 6.19%, #25ADF9 37.23%, #07F 94.85%)",
        "silver-fade": "linear-gradient(180deg, #FFF 24.54%, #B2B2B2 87.96%)",
        "gradient-line":
          "linear-gradient(to right, black, black, white, black, black)",
        "gradient-line-two":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.70) 50%, rgba(255, 255, 255, 0.00) 100%)",
        "gradient-vertical-line":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.70) 50%, rgba(255, 255, 255, 0.00) 100%)",
        "gradient-border": "linear-gradient(to top, #999999,#ffffff)",
        "card-background":
          "radial-gradient(50% 100% at 50% 0%,rgba(255, 255, 255, 0.44) 0%,rgba(255, 255, 255, 0) 100%)), rgba(255, 255, 255, 0.8)",
        "active-shadow":
          "radial-gradient(39.35% 50% at 50.37% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
        "business-hero-gradient":
          "linear-gradient(249deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);",
        "business-why-do-icon-gradient":
          "radial-gradient(188.17% 70.71% at 50% 50%, #24ADF9 0%, rgba(36, 173, 249, 0.00) 100%);",
        "highlighted-gradient":
          "linear-gradient(180deg, rgba(0, 119, 255, 0.00) 0%, #07F 63.32%);",
        "why-ctruh-hero-blue":
          "linear-gradient(transparent, rgb(59 130 246 / 0.5))",
        "why-ctruh-image-black":
          "linear-gradient(90deg, #080808 35%, rgba(8, 8, 8, 0.00) 80%)",
        "why-ctruh-hero-black":
          "linear-gradient(90deg, #080808 28.83%, rgba(8, 8, 8, 0.00) 100%)",
        "industry-gallery-image-gradient": `radial-gradient(69.87% 69.87% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), radial-gradient(165.54% 50% at 50% 0%, #FFF 0%, rgba(255, 255, 255, 0.00) 71.08%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60%, rgba(0, 0, 0, 0.60) 100%)`,
        "industry-gallery-gradient-bottom":
          "radial-gradient(106.87% 50% at 50% 50%, #080808 0%, rgba(8, 8, 8, 0.00) 100%)",
        "industry-gallery-gradient-top":
          "radial-gradient(106.87% 50% at 50% 50%, rgba(8, 8, 8, 0.00) 0%, #080808 100%)",
        "catalogue-card-gradient":
          "linear-gradient(90deg, #141414 44%, rgba(20, 20, 20, 0.00) 80%);",
        "catalogue-card-three-gradient":
          "linear-gradient(90deg, #141414 49%, rgba(20, 20, 20, 0.00) 80%);",
        "catalogue-card-mobile-gradient":
          "linear-gradient(180deg, #141414 64%, rgba(20, 20, 20, 0.00) 90%)",
        "product-card-img-mobile":
          "linear-gradient(180deg, rgba(8, 8, 8, 0.00) 0%, rgba(8, 8, 8, 0.90) 59.33%)",
        "product-card-img":
          "radial-gradient(100.5% 60.76% at 71.6% 100%, #080808 26.82%, rgba(8, 8, 8, 0.00) 100%)",
        "usecase-hero-placeholder-gradient":
          "linear-gradient(0deg, #212121 0%, #212121 100%)",
        "usecase-hero-desktop-gradient":
          "linear-gradient(270deg, #080808 0%, rgba(8, 8, 8, 0.00) 50%), linear-gradient(90deg, #080808 0%, rgba(8, 8, 8, 0.00) 50%), linear-gradient(180deg, rgba(8, 8, 8, 0.00) 50%, #080808 100%), radial-gradient(50% 50% at 50% 50%, rgba(8, 8, 8, 0.00) 0%, rgba(8, 8, 8, 0.20) 100%)",
        "usecase-hero-mobile-gradient":
          "linear-gradient(0deg, rgba(8, 8, 8, 0.00) 50%, #080808 100%), radial-gradient(50% 50% at 50% 50%, rgba(8, 8, 8, 0.00) 0%, rgba(8, 8, 8, 0.20) 100%)",
        "home-ai-btn":
          "conic-gradient(#25ADF9, #ffffff33, #ffffff33, #00E5D1, #ffffff33, #ffffff33, #25ADF9)",
        "usecases-application-card-border":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.03) 100%)",
        "platform-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(8, 8, 8, 0.00) 0%, #000000 100%)",
        "rank-reveal":
          "linear-gradient(180deg, #080808 0%, rgba(8, 8, 8, 0.75) 50%, rgba(8, 8, 8, 0.50) 75%, rgba(8, 8, 8, 0.00) 100%)",
        "careers-gradient":
          "linear-gradient(180deg, rgba(8, 8, 8, 0.00) 50%, #080808 100%)",
        "mission-vision-dekstop-gradient":
          "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)",
        "mission-vision-dekstop-gradient-two":
          "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)",
        "mission-vision-mobile-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)",
        "mission-vision-mobile-gradient-two":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)",
        "editor-card-bg":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "button-border": "linear-gradient(270deg, #5070f9 0%, #5098f9 100%)",
        "coming-soon-overlay":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%)",
        "industry-card-border":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%)",
        "home-card-one-btn":
          "conic-gradient(#fff, #ffffff33, #ffffff33, #fff, #ffffff33, #ffffff33, #fff)",
      },

      boxShadow: {
        "stats-card-glow":
          "0px 0px 250px 0px rgba(255, 255, 255, 0.03), 0px 0px 95px 0px rgba(255, 255, 255, 0.10) inset ",
        "custom-white":
          "0px 0px 53.438px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 140.625px 0px rgba(255, 255, 255, 0.03)",
        "instudry-gallery": "-24px 24px 32px 0px rgba(0, 0, 0, 0.50)",
        "catalogue-card": "0px -16px 94px 0px rgba(24, 41, 122, 0.20)",
        "testimonial-capsule": "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        "home-ai-btn":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 52px 0px rgba(37, 166, 249, 0.25), 0px 2px 32px 0px rgba(37, 166, 249, 0.20), 0px 2px 32px 0px rgba(37, 166, 249, 0.15)",
        "rank-reveal":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 32px 0px rgba(255, 202, 59, 0.30)",
        "second-rank-points":
          "linear-gradient(90deg, #C98100 -0.01%, #FFCA3B 21.11%, #FFDF72 32.8%, #FFF1A4 52.4%, #FFDF72 72.98%, #C98100 100%)",
        "profile-card":
          "0px 0px 38px 0px rgba(255, 255, 255, 0.10), 0px 0px 58px 0px rgba(0, 0, 0, 0.60)",
        "mission-vision": "0px 0px 48px 0px rgba(0, 0, 0, 0.06)",
        "primary-btn":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 32px 0px rgba(37, 166, 249, 0.3)",
        "primary-btn-hover":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 64px 0px rgba(37, 166, 249, 0.1), 0px 2px 32px 0px rgba(37, 166, 249, 0.5)",
        "solid-btn":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 32px 0px rgba(255, 255, 255, 0.30)",
        "solid-btn-hover":
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 2px 64px 0px rgba(255, 255, 255, 0.10), 0px 2px 32px 0px rgba(255, 255, 255, 0.50)",
        "versa-ai-hover":
          "0px 0px 16px 0px rgba(37, 173, 249, 0.48), 0px 0px 32px 0px rgba(37, 173, 249, 0.48);",
      },

      rotate: {
        "9": "9deg",
      },
      screens: {
        "280px": "281px",
        "320px": "321px",
        "360px": "361px",
        "375px": "376px",
        "393px": "394px",
        "414px": "415px",
        "425px": "425px",
        "426px": "426px",
        "430px": "431px",
        "480px": "480px",
        "540px": "540px",
        "541px": "541px",
        "580px": "581px",
        "600px": "601px",
        "738px": "738px",
        "769px": "769px",
        "780px": "781px",
        "820px": "821px",
        "824px": "825px",
        "850px": "851px",
        "900px": "900px",
        "912px": "913px",
        "980px": "981px",
        "1024px": "1024px",
        lg: "1025px",
        "1100px": "1100px",
        "1270px": "1271px",
        "1400px": "1401px",
        "1440px": "1440px",
        "3xl": "2560px",
      },
      keyframes: {
        xFromLeft: {
          "0%": { opacity: "0", transform: "translate3d(-20px, 0, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        yFromTop: {
          "0%": { opacity: "0", transform: "translate3d(0, -10px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        yFromBottom15px: {
          "0%": { opacity: "0", transform: "translate3d(0, 15px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        yFromBottom20px: {
          "0%": { opacity: "0", transform: "translate3d(0, 20px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        yFromBottom100px: {
          "0%": { opacity: "0", transform: "translate3d(0, 100px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        xFromRight: {
          "0%": { opacity: "0", transform: "translate3d(20px, 0, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        fadeInOut: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        growAndFade: {
          "0%": { opacity: "0.25", transform: "scale(0)" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
        bottomBounce: {
          "0%": { transform: "translateY(20px)" },
          "20%": { opacity: "1", transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        "border-spin": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      // Custom utilities
      textFillColor: {
        transparent: "-webkit-text-fill-color: transparent;",
      },
      textShadow: {
        "shadow-text": "0px 0.079px 0.016px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        degular: ["var(--font-degular)"],
        metropolis: ["var(--font-metropolis)"],
        raleway: ["var(--font-raleway)"],
        pathway: ["var(--font-pathway)"],
        outfit: ["var(--font-outfit)"],
        satoshi: ["var(--font-satoshi)"],
        panchang: ["var(--font-panchang)"],
      },
      height: {
        "screen-minus-86": "calc(100vh - 86px)",
        "screen-minus-313": "calc(100vh - 313px)",
      },
      objectPosition: {
        "top-quarter": "0px -20px",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "border-spin": "border-spin 5s linear infinite",
        fadeIn: "fadeInOut 500ms ease-in-out",
      },
    },
  },
  plugins: [
    // @ts-ignore
    function ({ addUtilities }) {
      addUtilities({
        ".custom-input": {
          background: "var(--ctruh-dark-secondary)",
          fontFamily: "var(--font-metropolis)",
          outline: "none !important",
          padding: "24px 32px",
          borderRadius: "20px",
          border: "1px solid #333",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
        ".text-shadow-sm": {
          "text-shadow": "0px 0.079px 0.016px rgba(0, 0, 0, 0.08)",
        },
        ".text-shadow-md": {
          "text-shadow": "0px 0.216px 0.043px rgba(0, 0, 0, 0.08)",
        },
        ".text-shadow-lg": {
          "text-shadow": "0px 12px 14.4px rgba(0, 0, 0, 0.15)",
        },
        ".usecases-application-heading": {
          "text-shadow": "0px 4px 24px rgba(0, 0, 0, 0.40)",
        },
        ".bg-text": { "-webkit-background-clip": "text" },
        ".editor-box-shadow": {
          "box-shadow": "0px 0px 90px 0px rgba(255, 255, 255, 0.05)",
        },
        ".editor-bg": {
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.01)",
        },
        ".gradient-chip": {
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.15)",
        },
        ".careers-software-bg": {
          background:
            "radial-gradient(67.31% 80.26% at 0% 0%, rgba(37, 166, 249, 0.30) 0%, rgba(37, 166, 249, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".careers-sales-bg": {
          background:
            "radial-gradient(67.31% 80.26% at 0% 0%, rgba(247, 144, 9, 0.30) 0%, rgba(247, 144, 9, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000;",
        },
        ".careers-marketing-bg": {
          background:
            "radial-gradient(67.31% 80.26% at 0% 0%, rgba(247, 209, 88, 0.30) 0%, rgba(247, 209, 88, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".careers-design-bg": {
          background:
            "radial-gradient(67.31% 80.26% at 0% 0%, rgba(238, 70, 188, 0.30) 0%, rgba(238, 70, 188, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000;",
        },
        ".careers-product-bg": {
          background:
            "radial-gradient(67.31% 80.26% at 0% 0%, rgba(151, 71, 255, 0.30) 0%, rgba(151, 71, 255, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".careers-bottom-btn": {
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(107deg, #25A6F9 -65.15%, #244CF8 90.95%)",
        },
        ".careers-software-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(37, 166, 249, 0.30) 0%, rgba(37, 166, 249, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
          borderImage:
            "linear-gradient(to right, #2E90FA00, #2E90FA,  #2E90FA00)",
          "border-image-slice": "1",
        },
        ".careers-sales-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(247, 144, 9, 0.30) 0%, rgba(247, 144, 9, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000;",
          borderImage:
            "linear-gradient(to right, #F7900900, #F79009,  #F7900900)",
          "border-image-slice": "1",
        },
        ".careers-marketing-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(247, 209, 88, 0.30) 0%, rgba(247, 209, 88, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
          borderImage:
            "linear-gradient(to right, #F7D15800, #F7D158,  #F7D15800)",
          "border-image-slice": "1",
        },
        ".careers-design-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(238, 70, 188, 0.30) 0%, rgba(238, 70, 188, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000;",
          borderImage:
            "linear-gradient(to right, #EE46BC00, #EE46BC,  #EE46BC00)",
          "border-image-slice": "1",
        },
        ".careers-product-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(151, 71, 255, 0.30) 0%, rgba(151, 71, 255, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
          borderImage:
            "linear-gradient(to right, #9747FF00, #9747FF,  #9747FF00)",
          "border-image-slice": "1",
        },
        ".careers-founders-office-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(18, 183, 106, 0.30) 0%, rgba(18, 183, 106, 0.00) 100%), linear-gradient(0deg, rgba(18, 183, 106, 0.01) 0%, rgba(18, 183, 106, 0.01) 100%), #000",
          borderImage:
            "linear-gradient(to right, #12B76A00, #12B76A,  #12B76A,#12B76A, #12B76A, #12B76A00)",
          "border-image-slice": "1",
        },
        ".careers-all-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)",
          borderImage:
            "linear-gradient(to right, #FFFFFF00, #FFFFFF,  #FFFFFF00)",
          "border-image-slice": "1",
        },
        ".careers-human-resourses-heading-bg": {
          background:
            "radial-gradient(39.35% 50% at 50.37% 100%, rgba(0, 229, 209, 0.30) 0%, rgba(0, 229, 209, 0.00) 100%), linear-gradient(0deg, rgba(0, 229, 209, 0.01) 0%, rgba(0, 229, 209, 0.01) 100%), #000",
          borderImage:
            "linear-gradient(to right, #00E5D100, #00E5D1,  #00E5D1,#00E5D1,#00E5D1, #00E5D100)",
          "border-image-slice": "1",
        },
        ".business-hero-tags-gradient": {
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(0, 0, 0, 0.55)",
        },
        ".showcase-even-gradient": {
          background: ` linear-gradient(270deg, rgba(8, 8, 8, 0.00) 40%, #080808 100%),
          linear-gradient(270deg, rgba(8, 8, 8, 0.00) 40%, #080808 100%),
          radial-gradient(100% 100% at 50% 0%, rgba(8, 8, 8, 0.00) 59.65%, #080808 100%)`,
        },
        ".showcase-odd-gradient": {
          background: `linear-gradient(270deg, #080808 0%, rgba(8, 8, 8, 0.00) 60%),
          linear-gradient(270deg, #080808 0%, rgba(8, 8, 8, 0.00) 60%),
          radial-gradient(100% 100% at 50% 0%, rgba(8, 8, 8, 0.00) 59.65%, #080808 100%)`,
        },
        ".showcase-mobile-gradient": {
          background: `linear-gradient(180deg, rgba(8, 8, 8, 0.00) 40%, #080808 100%), linear-gradient(180deg, rgba(8, 8, 8, 0.00) 40%, #080808 100%), radial-gradient(100% 100% at 50% 0%, rgba(8, 8, 8, 0.00) 59.65%, #080808 100%)`,
        },
        ".timeline-card": {
          background:
            "radial-gradient(66.85% 66.85% at 50% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".founder-aboutus-card": {
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.00) 0%, #FFF 50%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(50% 50% at 50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(86.82% 86.82% at 50% 0.91%, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.00) 100%)",
        },
        ".team-card-bg": {
          background:
            "linear-gradient(270deg, #030303 0%, rgba(3, 3, 3, 0.00) 100%)",
        },
        ".walkthrough-bg": {
          background:
            "linear-gradient(360deg, #030303 0%, rgba(3, 3, 3, 0.00) 100%)",
        },
        ".team-card-img-bg": {
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60%, rgba(0, 0, 0, 0.60) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60%, rgba(0, 0, 0, 0.60) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 60%, rgba(0, 0, 0, 0.60) 100%)",
        },
        ".careers-border": {
          borderImage:
            "linear-gradient(to right, #33333300, #333333, #333333,  #333333 ,  #333333,  #33333300)",
          "border-image-slice": "1",
        },
        ".top-left-corner-hover": {
          background:
            "linear-gradient(133deg, rgba(20, 20, 20, 0.00) 15.26%, #141414 113.69%)",
        },
        ".top-right-corner-hover": {
          background:
            "  linear-gradient(-133deg, rgba(20, 20, 20, 0.00) 15.26%, #141414 113.69%)",
        },
        ".bottom-right-corner-hover": {
          background:
            "linear-gradient(313deg, rgba(20, 20, 20, 0.00) 15.26%, #141414 113.69%)",
        },
        ".bottom-left-corner-hover ": {
          background:
            "linear-gradient(-313deg, rgba(20, 20, 20, 0.00) 15.26%, #141414 113.69%)",
        },
        ".middle-hover ": {
          background:
            "linear-gradient(180deg, #141414 36.68%, rgba(20, 20, 20, 0.00) 100%)",
        },
        ".product-catalogue-tabs-gradient": {
          background: `radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.08)`,
        },
        ".position-bg": {
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)",
        },
        ".partner-shadow": {
          boxShadow: "0px 0px 90px 0px rgba(255, 255, 255, 0.05)",
        },
        ".catalogue-card-gradient-two": {
          background:
            "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), #080808",
        },
        ".testomonial-bg-gradient": {
          background:
            "radial-gradient(69.19% 69.19% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(0deg, rgba(52, 66, 84, 0.10) 0%, rgba(52, 66, 84, 0.10) 100%), #080808",
        },
        ".testomonial-border-gradient": {
          background:
            "radial-gradient(50% 50% at 50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(86.82% 86.82% at 50% 0.91%, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.00) 100%)",
        },
        ".home-hero-capsule": {
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.01)",
        },
        ".home-hero-capsule-hover": {
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.01)",
        },
        ".editor-capsule-bg": {
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #080808;",
        },
        ".usecases-application-bg": {
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.40) 100%), radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%)",
        },
        ".usecases-application-card-bg": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), rgba(0, 0, 0, 0.6)",
        },
        ".usecases-application-card-bg:hover": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), rgba(0, 0, 0, 0.8)",
        },
        ".platform-feature-one": {
          background:
            "radial-gradient(141.42% 141.42% at 100% 100%, rgba(37, 83, 248, 0.40) 0%, rgba(37, 173, 249, 0.00) 58.56%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".platform-feature-two": {
          background:
            "radial-gradient(113.26% 141.42% at 0% 100%, rgba(37, 83, 248, 0.40) 0%, rgba(37, 173, 249, 0.00) 58.56%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".platform-feature-three": {
          background:
            "radial-gradient(128.24% 138.61% at 95.98% 0%, rgba(37, 83, 248, 0.40) 0%, rgba(37, 173, 249, 0.00) 64.24%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".platform-feature-four": {
          background:
            "radial-gradient(148.98% 141.42% at 0% 0%, rgba(37, 83, 248, 0.40) 0%, rgba(37, 173, 249, 0.00) 58.56%), linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
        ".platform-key-features": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
          boxShadow:
            "0px 0px 95px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 250px 0px rgba(255, 255, 255, 0.03)",
        },
        ".leaderboard-gradient": {
          background:
            "radial-gradient(19.38% 30.19% at 50% 100%, rgba(37, 173, 249, 0.50) 0%, rgba(36, 76, 248, 0.00) 100%), radial-gradient(25.7% 31.67% at 50% 100%, rgba(36, 76, 248, 0.40) 0%, rgba(36, 76, 248, 0.00) 100%), radial-gradient(45.55% 56.11% at 50% 100%, rgba(37, 173, 249, 0.60) 0%, rgba(36, 76, 248, 0.00) 100%), transparent",
        },
        ".leaderboard-profile": {
          border: "0.8px solid rgba(255, 255, 255, 0.40)",
          boxShadow:
            "0px 0px 102.4px 0px rgba(255, 255, 255, 0.25), 0px 0px 38.4px 0px rgba(0, 0, 0, 0.06)",
        },
        ".leaderboard-second": {
          border: "3.2px solid rgba(255, 255, 255, 0.40)",

          boxShadow: "0px 0px 46.08px 0px rgba(0, 0, 0, 0.06)",
        },
        ".platform-community": {
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url('/images/platform/91f4ccdbb152507da306c3dd2d56c7c0.jpeg') lightgray 50% / cover no-repeat",
        },
        ".platform-cta-gradient": {
          background:
            " radial-gradient(20.71% 32.25% at 50% -0.09%, rgba(37, 173, 249, 0.50) 0%, rgba(36, 76, 248, 0.00) 100%), radial-gradient(33.59% 41.38% at 50% -0.09%, rgba(36, 76, 248, 0.40) 0%, rgba(36, 76, 248, 0.00) 100%), radial-gradient(65.55% 80.75% at 50% -0.09%, rgba(37, 173, 249, 0.60) 0%, rgba(36, 76, 248, 0.00) 100%), #080808",
        },
        ".why-ctruh-gradient-hover": {
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), #1A1A1A",
        },
        ".card-one-data-bg": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 100%), #000",
        },
      });
    },
  ],
};
