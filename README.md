# udsu_assistance

Для работоспособности проекта надо:
1) установить библиотеки для python:
    - единоразово установить виртуальное окружение для python
    cd src/bot/
    python -m venv venv
    venv\Scripts\activate.bat
    - установить зависимости 
    pip install -r requirements.txt
2) установить бэкенд:
    - cd backend/test-server
    - npm install            (единоразово)
    - npm run dev
3) обновить базу данных:
    - единоразово установить постргу (просто всегда далее) https://repo.postgrespro.ru/win/64/PostgreSQL_18.1_64bit_Setup.exe
    - единораово установить пгадмин https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v9.10/windows/pgadmin4-9.10-x64.exe
    - заходим в пгадмин, нажимаем в списке servers
    - логинимся, login: postgres, пароль пустой
    - тыкаем по database пкм -> create
    - называем её udsu_assistance_db -> создать
    - пкм по созданной дб -> restore
    - в filename указываем путь к дб, которая лежит в /src/db/udsu_assistance_db.sql
    - у вас выйдут ошибки но пофиг
    - готово в schemas/public/tables будут наши таблицы