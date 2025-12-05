// tailwind.config.cjs
module.exports = {
  // Hugo Blox uses hugo_stats.json for class scanning
  content: ["./hugo_stats.json"],
  theme: { extend: {} },
  safelist: [
    // Figure sizing/centering
    "w-7/12", "md:w-2/5", "lg:w-1/3",
    "w-3/4", "md:w-1/2",
    "w-full", "mx-auto", "text-center",

    // Optional caps if you switch to max-width sizing
    "max-w-xs", "sm:max-w-sm", "md:max-w-sm", "max-w-sm", "max-w-md", "max-w-lg",

    // Image decoration
    "rounded-lg", "shadow-sm", "hover:shadow-md", "transition-shadow",

    // Caption styling
    "italic", "text-xs", "md:text-sm", "leading-snug"
  ],
  plugins: []
};
