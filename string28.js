`String28. Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning nomini (kengaytmasiz) aniqlovchi programma tuzilsin.
Input: D:/Qudrat_c++/books/My_book.exe
Output: My_book`;

let str = "D:/Qudrat_c++/books/My_book.exe";

let arr = str.split("/").pop().split(".")[0];

console.log(arr);

