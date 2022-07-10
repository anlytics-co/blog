/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "anlytics-privacy-focused-analytics",
  titleTemplate: "%s | anlytics",
  defaultTitle: "anlytics",
  description: "Privacy focused, lightweight alternative to google anlytics",
  canonical: "https://anlytics.co",
  openGraph: {
    url: "https://anlytics.co",
    title: "anlytics",
    description: "Privacy focused, lightweight alternative to google anyltics",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-chakra",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
