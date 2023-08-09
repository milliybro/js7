`String3. Satr berilgan. Satrning birinchi va oxirgi belgisini UTF-16 jadvalidagi kodini chiqaruvchi programma tuzilsin.`

function character(str) {
   
   let firstChar = str.charCodeAt(0);
   let lastChar = str.charCodeAt(str.length - 1);
   
   return {
     birinchi: String.fromCharCode(firstChar),
     oxirgi: String.fromCharCode(lastChar)
   };
 }
 
 let result = character("MilliyBro");
 console.log(result);