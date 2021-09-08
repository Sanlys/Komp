import qrcode
import string
import random

def idGenerator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


qr = qrcode.make('https://158.248.13.241:8080?ID=' + idGenerator())
qr.save('qrCode.png')
