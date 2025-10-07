export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "woody li";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return  "wuli" ;
  }

  // Handle queries asking for the largest (or greatest) number among a list
  const lower = query.toLowerCase();
  if (lower.includes("largest") || lower.includes("greatest")) {
    // Extract numbers (integers and decimals) from the query
    const numMatches = query.match(/-?\d+\.?\d*/g);
    if (numMatches && numMatches.length > 0) {
      // Parse to numbers and find the maximum
      const numbers = numMatches.map(n => Number(n));
      const max = numbers.reduce((a, b) => (a > b ? a : b));
      // Return as integer string if it's an integer, otherwise keep as-is
      if (Number.isInteger(max)) return String(max);
      return String(max);
    }
    // If no numbers found, return empty string (fallback)
    return "";
  }

  // Handle simple addition queries like "What is 40 plus 58?"
  // Recognize words: plus, add, sum, or the '+' symbol
  if (lower.includes("plus") || lower.includes(" add ") || lower.includes("sum") || query.includes("+")) {
    const numMatches = query.match(/-?\d+\.?\d*/g);
    if (numMatches && numMatches.length > 0) {
      // If there are at least two numbers, sum them all (or you could limit to first two)
      const numbers = numMatches.map(n => Number(n));
      const total = numbers.reduce((a, b) => a + b, 0);
      // Return integer without decimal when applicable
      if (Number.isInteger(total)) return String(total);
      return String(total);
    }
    return "";
  }

  return "";
}
