export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ethan_wang";
  }

  if (query.toLowerCase().includes("andrew")) {
    return "ethanwan";
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    return numbers ? String(Number(numbers[0]) + Number(numbers[1])) : "0";
  }  

  return "";
}
