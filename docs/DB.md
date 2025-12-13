# Описание Базы данных udsu_assistance_db

## Сущности

1. Пользователь
2. FAQ элемент

## Таблицы

### Пользователь

**Таблица users**
| поле | тип | назначение |
|-|-|-|
| id | integer PK | уникальный ID |
| vk_id | integer |	вк id пользователя |

### FAQ элемент

**Таблица topics**

| поле | тип | назначение |
|-|-|-|
| id | integer PK | уникальный ID |
| parent_id | integer FK -> Topic.id | id родительского элемента из этой же таблицы |
| tag | text | текст тега |
| path | UNIQUE TEXT | путь из тегов с разделением "/" exm: "root/tag1/podtag2" |
| topic | text | тема |
| content | text | текст темы |
| updated_at | date | время обновления|
