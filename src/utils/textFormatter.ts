export function formatExcerpt(text: string): string {
  if (!text) return '';
  const words = text.split(/\s+/).slice(0, 30);
  return words.join(' ') + (words.length >= 30 ? '...' : '');
}