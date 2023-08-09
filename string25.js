`String25. Probel bilan ajratilgan o'zbekcha so'zlardan iborat satr berilgan. Shu satrdagi so'zlarni "." bilan ajratilgan xolda chiqaruvchi programma tuzilsin. Satr oxiriga "." qo'yish shart emas.`

function Str(string) {
   let words = string.split(',');
 
   for (let i = 0; i < words.length; i++) {
     words[i] = words[i].trim();
   }
 
   let res = words.join('. ');
 
   return res;
 }
 
 let inputString = "O'zbek, MilliyBro, Shohruh, React";
 let res = Str(inputString);
 console.log(res);