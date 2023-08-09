`String21. S1, S2 va S3 satrlari berilgan. S1 satrida oxirgi uchragan S2 satrini S3 satriga o'zgartiruvchi programma tuzilsin.`

function Str(S1, S2, S3) {
   let lines = S1.split('\n');
   
   for (let i = 0; i < lines.length; i++) {
     if (lines[i] == S2) {
       lines[i] = S3;
       break;
     }
   }
   return lines.join('\n');
 }
 
 let S1 = "O'zbekiston \nbuyuk\ndavlat";
 let S2 = "buyuk";
 let S3 = "qudratli";

 let res = Str(S1, S2, S3);
 console.log(res);