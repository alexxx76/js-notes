## ЛИТЕРАЛЫ ШАБЛОНОВ
-----------------

    let htmltext = `
        <div>
            <h1>Title</h1>
        </div>`.trim();
    let name = 'Nicholas',
        str = `Hello, ${name}.`;
    let nm = 'Mike',
        messnm = `Hello, ${
            `my name is ${name}`
        }.`;

### теги шаблонов
    function tag(literals, ...sub) {...}
    function raw(literals, ...sub) {
        ...
        result += literals.raw[i];
        result += sub[i];
        ...
    }
    let message = tag`${count} items cost $${(count * price).toFixed(2)}.`;
    let mess = raw`Multiline\nstring`;
    let message1 = `Multiline\nstring`,
        message2 = String.raw`Multiline\nstring`;
