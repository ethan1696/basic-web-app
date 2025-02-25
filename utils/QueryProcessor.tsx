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

  if (/(\d+)\s*plus\s+(\d+)/i.test(query)) {
    const numbers = query.match(/\d+/g);
    return numbers ? String(Number(numbers[0]) + Number(numbers[1])) : "0";
  }
  
  if (/largest.*\d+/i.test(query)) {
    const numbers = query.match(/\d+/g);
    return numbers ? String(Math.max(...numbers.map(Number))) : "0";
  }
  
  if (/square.*cube|cube.*square/i.test(query)) {
    const numbers = query.match(/\d+/g);
    const result = numbers ? numbers.filter(n => {
      const num = Number(n);
      const root = Math.round(Math.pow(num, 1/6)); // A number is both a square and a cube if it's a sixth power
      return root ** 6 === num;
    }) : [];
    return result.length ? result.join(", ") : "None";
  }

  if (/(\d+)\s*multiplied\s*by\s*(\d+)/i.test(query)) {
    const numbers = query.match(/\d+/g);
    return numbers ? String(Number(numbers[0]) * Number(numbers[1])) : "0";
  }  

  return "";
}
