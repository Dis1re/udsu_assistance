import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType
import re
from vk_token import VKBOT_TOKEN 
from config import CONFIG
import requests

SERVER_URL = CONFIG['url']
TOKEN = VKBOT_TOKEN
vk_session = vk_api.VkApi(token=TOKEN)
vk = vk_session.get_api()
longpoll = VkLongPoll(vk_session)

# функции
def send_message(user_id: int, text: str):
    vk.messages.send(
        user_id=user_id,
        message=text,
        random_id=0
    )

def post_to_server(user_id: int, message: str):
    data = {
        "user_id": user_id,
        "type": "text",
        "text": message
    }
    try:
        response = requests.post(SERVER_URL, json=data)
        if response.status_code == 200:
            print(f"Успешно отправлено на сервер: {data}")
            data = response.json().get("data")
            print(data)
            return data.get("text", "Сервер не прислал ответа.")
        else:
            print(f"Ошибка при отправке на сервер: {response.status_code}")
    except Exception as e:
        print(f"Ошибка при POST-запросе: {e}")

def handle_message(event):
    user_id = event.user_id
    msg = event.text

    server_ans = post_to_server(user_id, msg)

    send_message(user_id, server_ans)

# главный цикл
def main():
    print("Бот запущен...")

    for event in longpoll.listen():
        if event.type == VkEventType.MESSAGE_NEW and event.to_me:
            handle_message(event)


if __name__ == "__main__":
    main()