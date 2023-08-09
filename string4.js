`String4. N natural soni va belgi berilgan. N ta kiritilgan belgidan iborat satr hosil qiling va ekranga chiqaring. Masalan: N = 5; Belgi = 'A'; Natija = AAAAA`

function char(N, belgi) { 
   return belgi.repeat(N);
 }
 
 let res = char(5, `r`);
 console.log(res);