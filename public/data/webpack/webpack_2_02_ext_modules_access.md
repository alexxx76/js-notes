## Внешний доступ к модулям
------------------------

### Экспорт модуля (home.js)
    exports.welcome = welcome;

### Изменение конфига webpack
    module.exports = {
      entry: "./home",
      output: {
        filename: "build.js",
        library: "home"     // после сборки экспорт этого модуля будет помещен
                            // в эту переменную (var home)
      }
    }
    после пересборки в файле build.js появилась глобальная переменная home,
    которую можно использовать в home.html

### Использование модуля вне сборки
    home.html
    <script>
      home.welcome('something?');
    </script>
