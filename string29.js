`String29. Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning kengaytmasini aniqlovchi programma tuzilsin.
Input: D:/Qudrat_c++/books/My_book.exe
Output: exe`

let str = "D:/Qudrat_c++/books/My_book.exe";

let arr = str.split("/").pop().split(".")[1];

console.log(arr);

