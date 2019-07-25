## ОБЪЕКТЫ
-------

### сокращение определения свойств
    function createPerson(name, age) {
        return {
            name,
            age
        };
    }
    let o = createPerson('Alex', 32);

### сокращение определения методов
    var person = {
        name: 'Mike',
        sayName() {
            console.log(this.name);
        }
    };
    person.sayName();

### вычисляемые свойства
    let lastName = 'last name';
    let person = {
        'first name': 'Alex',
        [lastName]: 'Karpenko'
    };
    console.log(person['first name'], person[lastName], person['last name']);
    let suffix = ' name';
    let person = {
        ['first' + suffix]: 'Alex',
        ['last' + suffix]: 'Karpenko'
    };
    console.log(person['first name'], person['last name']);

### идентичность
    (Object.is(+0, -0))
    (Object.is(NaN, NaN))

### примеси
    var receiver = {};
    Object.assign(receiver,
        {
            type: 'js',
            name: 'file.js'
        },
        {
            type: 'css'
        }
    );

### дублирование свойств
    var person = {
        name: 'Alex',
        name: 'Greg'
    };
    person.name   > 'Greg'

### порядок вывода свойств
    var o = { a: 1, 0: 1, c: 1, 2: 1, b: 1, 1: 1 };
    o.d = 1;
    o     > 012acbd

### доступ к прототипу через super
    let friend = {
        getGreeting() { // только в сокращенном объявлении метода
            return super.getGreeting() + ', hi!';
        }
    };

### определение прототипа
    (Object.getPrototypeOf(friend) === person)

### переопределение прототипа
    Object.setPrototypeOf(friend, person)
