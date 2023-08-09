`String8. Satr berilgan. Satrdagi kichik lotin va kirill harflarining umumiy sonini aniqlovchi programma tuzilsin.`

function Char(str) {
   let count = 0;
 
   for (let el of str) {
     if (String(el) || (!Number(el)) ) {
       count++;
     }
   }
 
   return count;
 }
 
 let res = Char("Milliy54674Bro56");
 console.log(res+` ta harf bor bor`);
 