# Описание Базы данных udsu_assistance_db

## 1. tags
### Список всех тегов.

| поле | тип | назначение |
|-|-|-|
| id | integer PK | уникальный ID |
| tag_name | text(unique) |	имя тега: schedule, dormitory, infrastructure |
| description | text | (опционально) описание тега |

## 2. faq_entries
### Хранит все ответы, которые способен дать бот.

| поле | тип | назначение |
|-|-|-|
| id | integer PK | уникальный ID |
| question | text |	пример вопроса (для разработчиков) |
| answer_text | text | готовый текст ответа |
| tag_id | integer FK -> tags.id | к какому тегу относится |
| updated_at | datetime | дата последнего обновления |