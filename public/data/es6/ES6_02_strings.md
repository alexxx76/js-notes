## СТРОКИ
------

### UTF-16
    text.codePointAt(0);
    String.fromCodePoint(134071);

### эквивалентность символов - normalize()
    text.normalize();
    text.normalize('NFC');
    text.normalize('NFD');
    text.normalize('NFKC');
    text.normalize('NFKD');

### идентификация подстрок
    text.indexOf(str);      > index
    text.lastIndexOf(str);  > index
    text.includes(str);     > true
    text.startsWith(str);   > true
    text.endsWith(str);     > true

### повтор
    'x'.repeat(3);          > 'xxx'

### регулярные выражения
### RegExp
### флаги
- u - режим работы с символами, а не с кодовыми единицами
- y - sticky - lastIndex

### пример
    var re1 = /ab/i,
        re2 = new RegExp(re1, g);
    let re = /ab/g;
    console.log(re.source); > 'ab'
    console.log(re.flags);  > 'g'
