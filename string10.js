`String10. Satr berilgan. Satrdagi xamma katta harflarini kichigiga, kichiklarini kattasiga almashtiruvchi programma tuzilsin.`

function Char(str) {
   let newStr = '';
   
   for (let i = 0; i < str.length; i++) {
     let belgi = str[i];
     
     if (belgi === belgi.toUpperCase()) {
       newStr += belgi.toLowerCase();
     } else {
       newStr += belgi.toUpperCase();
     }
   }
   
   return newStr;
 }
 
 let res = Char("MilliyBro");
 console.log (res);