## Игнорирование: .gitignore
-------------------------

В этом файле указываются шаблоны файлов, на которые Git не должен
  обращать внимания - игнорировать

### Синтаксис
    # - комментарий
    Thumbs.db - файл
      # path/to/anywhere/Thumbs.db
    .DS_Store - файл
      # any/folder/.DS_Store
    *.log - файл с расширением .log
      (имя должно подходить под шаблон целиком)
      # anywhere/my.log, NOT my.logs, my.log.tmp
    *.class - скомпилированный файл .class
    *.py[co] - [] - один из перечисленных символов
      # same as: *.pyc OR *.pyo, NOT *.pyco
    migrate-201[5-7]* - [] - можно указать диапазон через дефис и
      * - дальше может идти что угодно
      # anywhere/migrate-2015, migrate-20170101.db, NOT migrate-2018
    *.py? - ? - ровно один произвольный символ
      # anywhere/*.py<any char>, *.pyc OR *.pyo OR *.pyd, NOT *.py
    отсутствие - / - означает поиск происходит без учета пути
      то есть совпадение по имени в любом месте проекта
      причем как файлы так и директории - лишь бы имя совпадало
    build/ - игнорирование директории build, но не файла
      слеш в конце - поиск директории
      здесь возможноа частая ошибка
      такая запись говорит не о директории в корне, а о директории
      в любом месте проекта
      # Patterns above match anywhere in the project
      # build/
      # scripts/build/
    если в шаблоне хоть где нибудь, кроме как в конце есть слеш, то git
      будет искать не где нибудь по всему проекту, а четко по указанному
      пути начиная от корня проекта (вообще то от .gitignore)
    /build/ - корневая директория проекта
      если точнее, то относительно .gitignore (а он обычно в корне)
      # build, but NOT scripts/build
    secret/key - слеш в середине - по указанному пути каталог или файл
      # secret/key, NOT docs/secret/key
    doc/*.html - игнорирование .html файлов в директории doc
      # doc/file.html, NOT somewhere/doc/file.html
    /.*txt - игнорирование .txt файлов в корневой директории
      # my.txt, NOT somewhere/my.txt
    звездочка - * - всегда работает для одного сегмента пути
    var/www*/tmp
      # var/www/tmp
      # var/www-home/tmp
      # NOT var/www/info/tmp
    или для замены имени целиком
    users/*/private
      # users/john/private
      # users/alice/private
      # NOT
      # users/private
      # users/john/project/private
      # scripts/users/john/private
    две звездочки - ** - используется для произвольного количества фрагментов
      пути
    **/*.log - произвольный путь за которым следует файл с .log
      # same as *.log
    **/app/cache
      # shop/app/cache
      # main/front/app/cache
    docs/**/*.html
      # docs/module/generated.html
      # docs/general/info/performance.html
      # NOT
      # subdir/docs/my.html
    две звездочки - ** - не могут заменять часть имени
    они заменяют только фрагмент пути целиком
      # ** can only be used as **/...
      # or .../**/...
      # or .../**
        в конце практически не используются - потому как при игнорировании
        директории игнорируется и все что внутри
    восклицательный знак отменяет предыдущее значение об игнорировании
    .*
    !.gitattributes
    !.gitignore
      .* - игнорирует все - это бывает оправдано, так как многие
        вспомогательные файлы начинаются с - . (IDE, утилиты...)
      ! - кроме указанного файла (.gitattributes, .gitignore)
    /install/
    !install/packages.xml
      не работает, так как при игнорировании директории git даже не смотрит
      внутрь и не знает о нахождении там файла - packages.xml
    /install/*
    !install/packages.xml
      это работает
      игнорировать надо не всю директорию, а то что находится внутри
      тогда git видит эти файлы, и может отменить игнорирование - packages.xml

### Команда для проверки шаблонов .gitignore
    > git check-ignore -v install/something
    .gitignore:2:/install/  install/something
        выполняешь команду с флагом -v и передаешь интересующий путь
        команда выдает в результате строку из .gitignore, котрая за это отвечает
    если команда ничего не выводит - то значит этот путь ни под один шаблон
    не попадает

### Места расположения .gitignore
    <project>/.../.gitignore
    <project>/.gitignore
    <project>/.git/info/exclude
    config: core.excludesFile - ~/.gitignore
      > git config --global core.excludesFile ~/.gitignore
    (default) $XDG_CONFIG_HOME/git/ignore
    (default) ~/.config/git/ignore
