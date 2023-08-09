`String11. Satr berilgan. Agar satrda butun son ifodalangan bo'lsa 1 chiqarilsin, agar haqiqiy son bo'lsa 2 chiqarilsin. Agar satrni songa aylantirish imkoni bo'lmasa 0 chiqarilsin. Haqiqiy sonning kasr qismi nuqta "." Bilan ajratilgan deb qabul qilinsin.`

function Char(str) {
   if (Number.isInteger(Number(str))) {
     return 1; 
   } else if (!isNaN(parseFloat(str))) {
     return 2; 
   } else {
     return 0;
   }
 }
 
 let res = Char('1Milliybro');
 console.log(res);