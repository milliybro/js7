`String27. Satr berilgan. Satrdagi tinish belgilari sonini chiqaruvchi programma tuzilsin.
marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"]`;

function Mark(str) {
  let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (marks.includes(str[i])) {
      count++;
    }
  }

  return count;
}

let res = Mark("O'zbekiston - buyuk davlat!");
console.log(res+ ` ta`); 