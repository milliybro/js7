`String6. Satr va N natural soni berilgan. Shu satr belgilari orasiga N tadan "*" belgisi qo’yib yangi satr qaytaruvchi char(N) nomli funksiya tuzilsin.`;

function char(str, N) {
  let string = "";

  for (let i = 0; i < str.length; i++) {
    string += str[i];

    if (i !== str.length - 1) {
      string += "*".repeat(N);
    }
  }

  return string;
}

const res = char("MilliyBro", 3);
console.log(res);
