### Установка Docker в Windows

В Linux этот пункт пропускаем  
1. Установка WSL (windows subsystem linux)

Версия Windows 10 и выше  
В powershell ```wsl --install```

2. Установить Docker Desktop

Убедитесь, что все команды ```docker```  исполняются при запущенном Docker Desktop

### Создать свой образ с angular

- Создать в любой папке файл *Dockerfile*

- Внутри написать команды
```
FROM node:current-alpine3.20 # Базовый образ с node js
RUN npm i -g @angular/cli # Выполнить команду, которая установит angular 
                          # и сохранит его файлы новым слоем, образовав
                          # новый образ
```

- Запустить комнду сборки нового образа
```
docker build -t <new-image-name> .
```

- Проверить что новый образ создался командой `docker images`

В результате будет похожий вывод:
```
REPOSITORY           TAG            IMAGE ID       CREATED              SIZE
my-nodejs-app        latest         56607f1d2804   About a minute ago   235MB
```
- Запустить контейнер на базе свежесозданного образа с командой:
`docker run --rm -it -v $PWD:/app -w /app -p 4200:4200 <name-of-your-image> ng new <name-of-your-project>`

> В Windows CMD вместо $PWD пишите путь к текущей директории полностью.
> 
> В Windows PS пишите ${pwd}

- Убедитесь, что в текущей директории появилась папка *name-of-your-project* с проектом angular внутри

### Запуск development сервера
`ng serve` или `npm start` или `docker run --rm -it -v $PWD:/app -w /app -p 4200:4200 <name-of-your-image> ng serve --host 0.0.0.0`

##### Если не удается сохранить файлы в папке ./src/app или ./public/

---
`chown` (change owner) - изменяет фладельца файла/папки
```
-rwxr--r--   1 root    root      2969 авг 30 19:03 angular.json  
               ^^^^ - владелец
```
Пример команды: `sudo chown <owner-name> <filename>`  
Для папки указывайте аргумент -R: `sudo chown -R <owner-name> <directory>`  

---

`chgrp` (change group) - изменяет группу файла/папки
```
-rwxr--r--   1 root    root      2969 авг 30 19:03 angular.json
                       ^^^^ - группа
```
Пример команды: `sudo chgrp <group-name> <filename>`  
Для папки указывайте аргумент -R: `sudo chgrp -R <group-name> <directory>`  

---

`chmod` (change mode) - изменяет права владельца, группы и остальных  
```
-rwxr--r--   1 root    root      2969 авг 30 19:03 angular.json
 ^^^ - права владельца [r - чтение, w - запись, x - выполнение]
 
-rwxrwxr--   1 root    root      2969 авг 30 19:03 angular.json
    ^^^ - права группы [r - чтение, w - запись, x - выполнение]
    
-rwxrwxrwx   1 root    root      2969 авг 30 19:03 angular.json
       ^^^ - права всех остальных [r - чтение, w - запись, x - выполнение]
```
Пример команды: 
```
sudo chmod 754 <filename>
           ВГО (В - владелец, Г - группа, О - остальные)
```
7 = 0b111 = rwx  
5 = 0b101 = r-x  
4 = 0b100 = r--  

Для папки указывайте аргумент -R: `sudo chmod -R 754 <filename>`

Запуск дополнительного процесса в контейнере производится командой `exec`  
Дать полные права на папку src со всем содержимым - `docker exec <container-name> chmod -R 777 /app/src`




