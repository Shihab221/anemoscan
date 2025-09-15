export const GA_MEASUREMENT_ID = "G-2X939C5YEW";

export const pageview = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
  }
};

export const event = ({ action, params }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};
