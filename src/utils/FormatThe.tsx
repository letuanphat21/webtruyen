export default function formatThe(text: string) {
  if (text.startsWith("<p>") && text.endsWith("</p>")) {
    const start = "<p>";
    const end = "</p>";
    const startIndex = text.indexOf(start) + start.length;
    const endIndex = text.indexOf(end);
    const result = text.slice(startIndex, endIndex);
    return result;
  } else {
    return text;
  }
}
