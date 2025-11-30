UDSU-Assistance/
│
├─ bot/                  # код Telegram/VK бота
│   └─ handlers.py
│   └─ main.py
│
├─ backend/              # серверная часть
│   └─ api.py            # основной API для бота
│   └─ processing.py     # обработка запросов, взаимодействие с NLP
│
├─ nlp/                  # нейронная сеть
│   └─ model.py          # загрузка модели, генерация/классификация
│   └─ prompt_engineering.py
│
├─ db/                   # база знаний
│   └─ schema.sql
│   └─ seed_data.json
│
├─ admin_panel/           # опционально
│   └─ web_interface.py
│
├─ tests/                # тесты для компонентов
│
├─ requirements.txt
└─ README.md