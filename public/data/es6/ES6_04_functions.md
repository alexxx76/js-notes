## ФУНКЦИИ
-------

    function makeRequest(url, timeout = 2000, callback = function () {}) {...}
    function getValue(value) {...}
    function add(first, second = getValue(first)) {...}

### геттеры и сеттеры
    const o = {
        _name: 'Alex',
        set name(value) {
            this._name = value;
        },
        get name() {
            return this._name;
        }
    };

### неименованные параметры
    function pick(object, ...keys) {...}
    let bookData = pick(book, 'author', 'year');

### конструктор Function
    var add = new Function('first', 'second = first', 'return first + second');
    var pickFirst = new Function('...args', 'return args[0]');

### расширение - spread
    let values = [-25, -50, -75, -100];
    console.log(Math.max.apply(Math, values));  > -25
    console.log(Math.max(...values));           > -25
    console.log(Math.max(...values, 0));        > 0

### name
    function one() {}
    function two() {}
    var three = function () {};
    console.log(one.name);
    console.log(two.name);
    console.log(three.name);

### способ вызова - с/без new
    function Person(name) {
        ...
        (typeof new.target !== 'undefined')
        ...
        (typeof new.target === Person)
        ...
    }

### функции уровня блока
    if (true) {
        function doSomething() {...}
        doSomething();
    }

### стрелочные функции
    let reflect = value => value;
    let summ = (num1, num2) => num1 + num2;
    let getName = () => 'Mike';
    let res = (num1, num2) => {
        ...
        return value;
    };
    let doNothing = () => {};
    let getTempItem = id => ({ id: id, name: 'Temp'});
    let personA = ((name) => {
        return {
            getName: () => name
        }
    })('Alex');
    let PageHandler = {
        id: '123456',
        init: function () {
            document.addEventListener('click', event => this.doSomething(event.type), false);
        },
        doSomething: function (type) {
            console.log(this);
        }
    };
    var values = [1, 15, 25, 2, 17, -20, -7, 8, 10, 30],
    var sortres = values.sort((a, b) => a - b);
    var mapres = values.map(item => item * 2);
    var reduceres = values.reduce((a, b) => a + b);
    var rnd = () => Math.round(Math.random() * 10);
    var boundSum = sum.bind(null, rnd(), rnd());
    boundSum();

### оптимизация
    function factorial(n, p = 1) {
        if (n <= 1) {
            return 1 * p;
        } else {
            let result = n * p;
            return factorial(n - 1, result);  // хвостовой вызов в том же кадре
        }
    }
    factorial(150);
