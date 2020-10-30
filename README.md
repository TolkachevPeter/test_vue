## Тестовое задание:

### Описание:
Необходимо создать VueJs приложение с динамической загрузкой картинок и роутингом.

Макет приложения: https://xd.adobe.com/spec/5e45d9fa-9d35-4c00-73ab-032e73ee4bef-2874/

API получения картинок: https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA

### Основное:
Приложение будет состоять из 2 страниц:

- Главная - необходимо вывести картинку на экран и добавить кнопку загрузить, при нажатию на которую, картинка будет обновляться.
- История - выводить все загруженные картинки с главной страницы согласно макету (картинка, время загрузки и название картинки). Добавить возможность удалить ранее загруженную картинку.

### Будет преимуществом, если будет выполнен один или более пунктов из списка ниже:
- Использовать TypeScript
- Добавить пагинацию с выводом 5 загруженных картинок. 

#### Стек:
- VueJs
- Любой UI-кит
- Vuex
- VueRouter

#### Цель:
Полученные данные хранить в Vuex. 
 
Результат выложите на github или пришлите исходники.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
