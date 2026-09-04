// export interface Service {
//   image: string;
//   title: string;
//   description: string;
//   features: string[];
// }

// export const services: Service[] = [
//   {
//     image: "/services/social-media-management.jpg",
//     title: "Social Media Management",
//     description:
//       "We create engaging content, manage communities, and build meaningful brand presence across Instagram, Facebook, LinkedIn, X, and emerging platforms.",
//     features: ["Content calendar", "Community management", "Cross-platform posting"],
//   },
//   {
//     image: "/services/performance-marketing.jpg",
//     title: "Performance Marketing",
//     description:
//       "Scale your business through highly targeted Meta, Google, and YouTube advertising campaigns designed for maximum ROI.",
//     features: ["Meta & Google Ads", "Conversion tracking", "A/B tested creative"],
//   },
//   {
//     image: "/services/youtube-growth.jpg",
//     title: "YouTube Management",
//     description:
//       "From strategy and scripting to production, optimization, monetization, and analytics — we manage every aspect of your YouTube journey.",
//     features: ["Scripting & production", "SEO optimization", "Analytics reporting"],
//   },
//   {
//     image: "/services/seo.jpg",
//     title: "SEO",
//     description:
//       "Increase your search visibility through technical SEO, keyword optimization, content strategy, and link building.",
//     features: ["Technical audits", "Keyword strategy", "Link building"],
//   },
//   {
//     image: "/services/influencer-marketing.jpg",
//     title: "Influencer Marketing",
//     description:
//       "Collaborate with creators that align with your brand and drive authentic audience engagement.",
//     features: ["Creator matching", "Campaign management", "Performance tracking"],
//   },
//   {
//     image: "/services/website-development.jpg",
//     title: "Website Development",
//     description:
//       "Modern, responsive, SEO-friendly websites designed to convert visitors into customers.",
//     features: ["Responsive design", "SEO-ready structure", "Fast load times"],
//   },
//   {
//     image: "/services/movie-promotions.jpg",
//     title: "Movie Promotions",
//     description:
//       "Digital campaigns including trailer launches, influencer collaborations, meme marketing, paid advertising, and release promotions.",
//     features: ["Trailer campaigns", "Influencer tie-ins", "Meme marketing"],
//   },
//   {
//     image: "/services/mobile-email-marketing.jpg",
//     title: "Mobile & Email Marketing",
//     description:
//       "Reach your audience through personalized WhatsApp, SMS, and email campaigns that improve engagement and conversions.",
//     features: ["WhatsApp campaigns", "SMS automation", "Email sequences"],
//   },
// ];


export interface Service {
  slug: string;
  image: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "social-media-management",
    image: "/services/social-media-management.jpg",
    title: "Social Media Management",
    description:
      "We create engaging content, manage communities, and build meaningful brand presence across Instagram, Facebook, LinkedIn, X, and emerging platforms.",
    features: ["Content calendar", "Community management", "Cross-platform posting"],
  },
  {
    slug: "performance-marketing",
    image: "/services/performance-marketing.jpg",
    title: "Performance Marketing",
    description:
      "Scale your business through highly targeted Meta, Google, and YouTube advertising campaigns designed for maximum ROI.",
    features: ["Meta & Google Ads", "Conversion tracking", "A/B tested creative"],
  },
  {
    slug: "youtube-management",
    image: "/services/youtube-growth.jpg",
    title: "YouTube Management",
    description:
      "From strategy and scripting to production, optimization, monetization, and analytics — we manage every aspect of your YouTube journey.",
    features: ["Scripting & production", "SEO optimization", "Analytics reporting"],
  },
  {
    slug: "seo",
    image: "/services/seo.jpg",
    title: "SEO",
    description:
      "Increase your search visibility through technical SEO, keyword optimization, content strategy, and link building.",
    features: ["Technical audits", "Keyword strategy", "Link building"],
  },
  {
    slug: "influencer-marketing",
    image: "/services/influencer-marketing.jpg",
    title: "Influencer Marketing",
    description:
      "Collaborate with creators that align with your brand and drive authentic audience engagement.",
    features: ["Creator matching", "Campaign management", "Performance tracking"],
  },
  {
    slug: "website-development",
    image: "/services/website-development.jpg",
    title: "Website Development",
    description:
      "Modern, responsive, SEO-friendly websites designed to convert visitors into customers.",
    features: ["Responsive design", "SEO-ready structure", "Fast load times"],
  },
  {
    slug: "movie-promotions",
    image: "/services/movie-promotions.jpg",
    title: "Movie Promotions",
    description:
      "Digital campaigns including trailer launches, influencer collaborations, meme marketing, paid advertising, and release promotions.",
    features: ["Trailer campaigns", "Influencer tie-ins", "Meme marketing"],
  },
  {
    slug: "mobile-email-marketing",
    image: "/services/mobile-email-marketing.jpg",
    title: "Mobile & Email Marketing",
    description:
      "Reach your audience through personalized WhatsApp, SMS, and email campaigns that improve engagement and conversions.",
    features: ["WhatsApp campaigns", "SMS automation", "Email sequences"],
  },
];