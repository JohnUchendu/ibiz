export function generateNames(keyword: string): string[] {
  const suffixes = ["HQ", "Solutions", "Global", "Hub", "Works", "Labs", "Tech", "Agency"];
  return suffixes.map(suffix => `${keyword}${suffix}`);
}
