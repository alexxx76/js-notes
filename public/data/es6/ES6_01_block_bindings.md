## БЛОЧНЫЕ ПРИВЯЗКИ
----------------

    let
    const

### объявления на уровне блока
    if (true) {
        let value = 1;
    } else {
        console.log(value);   > Error
    }

### объявление оъектов при помомщи const
    const person = { name: 'Alex' };
    person.name = 'Greg';
    person = { name: 'Greg' };    > Error

### временная мертвая зона - TDZ
    if (true) {
        console.log(typeof value);    > Error -> TDZ
        let value = 1;
    }

### блочные привязки в циклах
    for (let i = 0; i < 10; i++) {...}
    var o = { a: 1, b: 2, c: 3 };
    for (const key in o) {...}
    let iterable = [10, 20, 30];
    for (const value of iterable) {...}
    let iterable = new Map([['a': 1], ['b': 2], ['c': 3]]);
    for (let [key, value] of iterable) {...}

### функции в циклах
    var funcs = [];
    for (let i = 0; i < 10; i++) {
        funcs.push(function () {
            console.log(i);       > i - всегда разное, так как новая let
        });
    }

### блочные привязки на глобальном уровне
    let RegExp = 'Hello';
    (window.RegExp === RegExp)    > false
    const ncz = 'Hi!';
    ('ncz' in window)             > false
