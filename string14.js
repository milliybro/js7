`String14. N1, N2 natural sonlari va S1, S2 satr berilgan. S1 satrning dastlabki N1 ta belgisidan va S2 satrning oxirgi N2 ta belgisidan iborat yangi satr hosil qiling.`

function Str(N1, N2, S1, S2) {
   
   let part1 = S1.slice(0, N1);
   let part2 = S2.slice(-N2);
   
   return part1 + part2;
   }
   
   let N1 = 6;
   let N2 = 3;
   let S1 = "Milliylik";
   let S2 = "Aka - Bro";

   let res = Str(N1, N2, S1, S2);
   console.log(res);