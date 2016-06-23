import builtins
import pytesseract
from PIL import Image
from PIL import ImageGrab


ImageGrab.grab().save("screen_capture.jpg", "JPEG")




#Change python encoding and process through tesseract
original_open = open
def bin_open(filename, mode='rb'):
    return original_open(filename, mode)


img = Image.open('screen_capture.jpg')

try:
    builtins.open = bin_open
    bts = pytesseract.image_to_string(img)
finally:
    builtins.open = original_open

print(str(bts, 'cp1252', 'ignore'))
