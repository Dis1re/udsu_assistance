import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType
import re
from token import VKBOT_TOKEN 

TOKEN = VKBOT_TOKEN

vk_session = vk_api.VkApi(token=TOKEN)
vk = vk_session.get_api()
longpoll = VkLongPoll(vk_session)

def send_message(user_id, text):
    vk.messages.send(
        user_id=user_id,
        message=text,
        random_id=0
    )

def replace_ya(text):
    return re.sub(r"\bя\b", "ты", text, flags=re.IGNORECASE)

print("Бот запущен...")

for event in longpoll.listen():
    if event.type == VkEventType.MESSAGE_NEW and event.to_me:
        user_id = event.user_id
        msg = event.text

        modified = replace_ya(msg)

        send_message(user_id, modified)
