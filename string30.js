`String30. Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan oxirgi papka nomini aniqlovchi programma tuzilsin. Agar papka tub bo'lsa (корневой), "/" belgisi chiqarilsin.
Input: D:/Qudrat_c++/books/My_book.exe
Output: books`

let str = "D:/Qudrat_c++/books/My_book.exe";

let arr = str.split("/");

console.log(arr[2]);
