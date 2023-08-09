`String17. S1 va S2 satrlari berilgan. S2 satrini S1 satrida takrorlanishlar sonini chiqaruvchi programma tuzilsin.`

function Str(S1, S2) {
   let count = 0;
   let index = 0;
   
   while (true) {
     index = S1.indexOf(S2, index);
     
     if (index == -1) {
       break;
     }
     count++;
     index += S2.length;
   }
   return count;
 }
 
 let S1 = "hello, hello, hello!";
 let S2 = "hello";
 let res = Str(S1, S2 );
 console.log(res);