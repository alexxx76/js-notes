## Установка Git - Windows
-----------------------

### cайт
    https://git-scm.com/
    скачиваем Git

### установка
  можно оставить все настройки по умолчанию

### описание настроек
    Additional icons
      - дополнительные иконки (не понадобится)
    On the Desktop
      - быстрый запуск (не понадобится)
    Windows Explorer integration
      - задает создание новых элементов в контекстном меню директории
        (оставляем)
      Git Bash Here
      Git GUI Here
    Git LFS (Large File Support)
      - специальное расширение Git для работы с очень большими файлами
        (видео, какие то большие исходники) (можно оставить)
    Associate .git* configuration files with the default text editor
      - файлы с расширением .git открываются редактором по умолчанию
        (оставляем)
    Associate .sh files to be run with Bash
      - вместе с Git идет порт Unix оболочки Bash
        файлы с расширением .sh будут идти через Bash (оставляем)
    Use a TrueType font in all console windows
      - не имеет прямого отношения к Git

### далее
    название папки Git оставляем как есть

### далее
    Git идет с большим набором утилит портированных с Unix
      и в этом окне решаем, что из этого будет напрямую запускаться из
      командной строки
    Use Git from Git Bash only
      - ничего
    Use Git from the Windows Command Prompt
      - сам Git и буквально несколько вспомогательных файлов
    Use Git and optional Unix tools from the Windows Command Prompt
      - сам Git и все утилиты
        инсталятор предупреждает, что имена некоторых утилит совпадают
        с установленными в Windows (find, sort) и может быть конфликт
    выбираем второй вариант - только Git
      утилиты Git будут так же доступны, будут находится в каталоге Git,
      просто они не будут добавлены в PATH

### далее
    с Git идет библиотека для сетевых запросов
      и можно выбрать способ проверки HTTP сертификатов, которые она будет
      использовать
    Use the OpenSSL library
      - встроенный
    Use the native Windows Secure Channel library
      - интегрированный с Windows
        возможно это будет удобнее, если используется корпоративная сеть,
        собственные сертификаты...
    в целом - совершенно без разницы что из этого выбирать

### далее
    это окно позволяет задать автоматическое преобразование переводов строк
      может быть важно для кроссплатформенной разработки
    Checkout Windows-style, commit Unix-style line endings
      - "core.autocrlf" is set to "true"
    Checkout as-is, commit Unix-style line endings
      - "core.autocrlf" is set to "input"
    Checkout as-is, commit as-is
      - "core.autocrlf" is set to "false"
    выбираем первый вариант как рекомендованный

### далее
    настраивается оболочка Git Bash
    Use MinTTY (the default terminal of MSYS2)
      - сторонний терминал
    Use Windows' default console window
      - терминал Windows
    раньше терминал Windows был плохой, и выбирали первый вариант,
      сейчас он более-менее - поэтому выбираем воторой вариант

### далее
    Enable file system caching
      - кэширование в памяти - хорошая штука (оставляем)
    Enable Git Credential Manager
      - обеспечивает интеграцию Git со встроенными в Windows средствами
        авторизации
          если его отключить, то при работе по сети логин и пароль при каждом
          запросе придется вводить заново
          и ряд других моментов авторизации перестанет работать
        (обязательно оставляем включенным)
    Enable symbolic links
      - поддержка символических ссылок, которые работают на уровне NTFS
        если пользуетесь включаете, если нет - то нет
