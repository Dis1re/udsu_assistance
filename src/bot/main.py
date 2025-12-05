import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType
import re

TOKEN = "vk1.a.enfIkdHF4ATCZye1G1Ds9T6ESVIhFNdJPVQzWTveU4niXPFfltT3JtnidWvE39znNGVcIpaR1PR3JBj8W0X9HoJ5cKpW2Ok6vFGBsG0bLSWU-SiI2sOS5bOLVe5HhxPWVhHxG6V6uokt_LVRkI0iE7nG3h_8VnzQ8MM1OPjl8gveXMQVf0ALLQMapBY3zWP3ziI9juAZrT6cMtD-QLSYkw"

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
