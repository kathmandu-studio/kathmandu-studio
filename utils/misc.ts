export function toCamelCaseFromUrlExtraction(url: string) {
  // Get the last part after splitting by '/'
  const lastSegment = url.split("/").filter(Boolean).pop();

  if (!lastSegment) return "";

  // Convert kebab-case to camelCase
  return lastSegment
    .split("-")
    .map((word: string, index: number) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}

export const setPageTitle = (title: string) => {
  document.title = `${title} | Kathmandu Studio`;
};
