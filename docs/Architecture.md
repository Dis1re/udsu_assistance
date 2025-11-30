
# структура папок проекта
UDSU-Assistance/
│
├─ bot/                   # код Telegram и VK ботов
│   ├─ __init__.py
│   ├─ main.py            # точка входа бота
│   ├─ handlers.py        # обработка сообщений
│
├─ backend/                # серверная часть (API)
│   ├─ __init__.py
│   ├─ api.py             # основной API для бота
│   ├─ processing.py      # логика работы с NLP и БД
│   └─ utils.py           # вспомогательные функции
│
├─ nlp/                    # офлайн-модель
│   ├─ __init__.py
│   ├─ model.py           # загрузка модели, генерация ответа
│   └─ prompt_engineering.py # функции подготовки промптов
│
├─ db/                     # база знаний / данные
│   ├─ schema.sql          # структура базы данных
│   ├─ seed_data.json      # начальные данные
│   └─ db_utils.py         # функции работы с базой
│
│
├─ tests/                  # тесты проекта
│   ├─ test_bot.py
│   ├─ test_backend.py
│   └─ test_nlp.py
│
├─ docs/                   # документация
│   ├─ Specification.docs
│   ├─ Architecture.md
│   ├─ Architecture.png
|   ├─ Roadmap.png
|   └─ Concept.docs
|   
│
├─ requirements.txt        # зависимости Python
├─ README.md               # описание проекта
└─ run.py                  # единый запуск проекта (опционально)
