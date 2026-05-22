# Лабораторная работа 4

## Структура проекта

.
├── package.json
├── package-lock.json
├── README.md
├── SCSS_SASS
│   ├── css
│   │   ├── main.css
│   │   ├── main.css.map
│   │   ├── main-less.css
│   │   ├── main-sass.css
│   │   └── main-sass.css.map
│   ├── layout.html
│   ├── less
│   │   ├── base.less
│   │   ├── layout.less
│   │   ├── main.less
│   │   └── numbers.less
│   ├── numbers.html
│   ├── sass
│   │   ├── _base.sass
│   │   ├── _layout.sass
│   │   ├── main.sass
│   │   └── _numbers.sass
│   └── scss
│       ├── _base.scss
│       ├── _layout.scss
│       ├── main.scss
│       └── _numbers.scss
└── TypeScript
    ├── dist
    │   ├── binary-search-tree.js
    │   ├── distance.js
    │   ├── index.js
    │   ├── patterns
    │   │   ├── adapter.js
    │   │   ├── observer.js
    │   │   └── strategy.js
    │   ├── user-interface.js
    │   ├── user.js
    │   └── user-type-alias.js
    ├── src
    │   ├── binary-search-tree.ts
    │   ├── distance.ts
    │   ├── index.ts
    │   ├── patterns
    │   │   ├── adapter.ts
    │   │   ├── observer.ts
    │   │   └── strategy.ts
    │   ├── user-interface.ts
    │   ├── user.ts
    │   └── user-type-alias.ts
    └── tsconfig.json

11 directories, 41 files

## Установка зависимостей

```bash
npm install
```

Команда устанавливает зависимости из `package.json`: `sass`, `less`, `less-watch-compiler` и `typescript`.

## Задание SCSS/SASS

### (1) Компиляция SCSS в CSS

```bash
npm run scss:watch
```

Запускаем компиляцию SCSS в режиме наблюдения. При каждом изменении файла `SCSS_SASS/scss/main.scss` CSS-файл `SCSS_SASS/css/main.css` будет пересобираться автоматически.

Если нужно скомпилировать один раз:

```bash
npm run scss:build
```

### (2) Страница со списком чисел

Результат в файле `SCSS_SASS/numbers.html`.

Цвета чисел заданы циклом SCSS в файле `SCSS_SASS/scss/_numbers.scss` по формуле:

```scss
color: rgb($n, 256 - $n, 0);
```

### (3) Верстка страницы по картинке

Результат в файле `SCSS_SASS/layout.html`.

Вложенные правила и миксины SCSS используются в файлах:

- `SCSS_SASS/scss/_base.scss`;
- `SCSS_SASS/scss/_layout.scss`.

### (4) Переписывание SCSS-кода на синтаксис SASS

Результат находится в директории `SCSS_SASS/sass`.

Компиляция SASS в CSS:

```bash
npm run sass:build
```

Команда компилирует файл `SCSS_SASS/sass/main.sass` в файл `SCSS_SASS/css/main-sass.css`.

Компиляция SASS в режиме наблюдения:

```bash
npm run sass:watch
```

### (5) Переписывание кода на Less

Результат находится в директории `SCSS_SASS/less`.

Компиляция Less в CSS:

```bash
npm run less:build
```

Команда компилирует файл `SCSS_SASS/less/main.less` в файл `SCSS_SASS/css/main-less.css`.

Компиляция Less в режиме наблюдения:

```bash
npm run less:watch
```

## Задание TypeScript

### (1) Компиляция TypeScript в JavaScript

```bash
npm run ts:watch
```

Запускаем компиляцию TypeScript в режиме наблюдения. При каждом изменении файлов из директории `TypeScript/src` JavaScript-файлы в директории `TypeScript/dist` будут пересобираться автоматически.

Если хотим скомпилировать один раз:

```bash
npm run ts:build
```

### (2) Класс User с типизацией через интерфейс

Результат находится в файлах `TypeScript/src/user-interface.ts` и `TypeScript/src/user.ts`.

Реализованы:

- интерфейс `UserInterface`;
- класс `User`;
- метод `hello()`.

### (3) Типизация класса User через псевдоним типа

Результат находится в файлах `TypeScript/src/user-type-alias.ts` и `TypeScript/src/user.ts`.

Реализован псевдоним типа `UserType`.

### (4) Перегруженная функция distance

Результат находится в файле `TypeScript/src/distance.ts`.

Функцию можно вызвать двумя способами:

```ts
distance(x1, y1, x2, y2);
distance(p1, p2);
```

Тип точки описан как `Point`. Явный и неявный `any` не используется.

### (5) Бинарное дерево

Результат находится в файле `TypeScript/src/binary-search-tree.ts`.

Реализован класс `BinarySearchTree` с методами:

- `search()`;
- `insert()`;
- `delete()`;
- `update()`;
- `height()`.

Настройки `strict` и `noImplicitAny` включены в файле `TypeScript/tsconfig.json`.

### (6) Паттерны Adapter, Strategy, Observer

Результат находится в директории `TypeScript/src/patterns`.

Реализованы паттерны:

- `Adapter` — `TypeScript/src/patterns/adapter.ts`;
- `Strategy` — `TypeScript/src/patterns/strategy.ts`;
- `Observer` — `TypeScript/src/patterns/observer.ts`.

### Запуск результата TypeScript

```bash
npm run ts:start
```

Команда запускает скомпилированный файл `TypeScript/dist/index.js`, в котором находятся примеры использования реализованных модулей.
