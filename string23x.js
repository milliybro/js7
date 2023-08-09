`String23. Probel bilan ajratilgan va faqat katta harflar bilan terilgan o'zbekcha so'zlardan iborat satr berilgan. Satrdagi aniq 2 ta 'A' harfi bor so'zlar sonini aniqlovchi programma tuzilsin.`

function Str(string) {
   const words = string.split(" ");
 
   let count = 0;
 
   for (let i = 0; i < words.length; i++) {
     const word = words[i].trim();
 
     if (word.length > 0 && word[0] === word[word.length - 1]) {
       count++;
     }
   }
 
   return count;
 }
 const res = Str("BFENB BCJHDBCS DSJNCSJD");
 console.log(res + ` ta`);
 

 