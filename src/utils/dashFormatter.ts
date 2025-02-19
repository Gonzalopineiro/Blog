export function hyphenate(text: string): string {
  if (!text) return '';
  return text.replace(/\s+/g, '-');
}

export function dehyphenate(text: string): string {
  if (!text) return '';
  return text.replace(/-/g, ' ');
}