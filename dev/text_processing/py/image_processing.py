import builtins
import pytesseract
from PIL import Image
from PIL import ImageGrab
import PIL.ImageOps
from PIL import ImageEnhance



#Take screenshot
ImageGrab.grab().save("screen_capture.jpg", "JPEG")
img = Image.open('screen_capture.jpg')


#desaturate
converter = PIL.ImageEnhance.Color(img)
img = converter.enhance(0.0)
img.save('screen_capture.jpg')
img = Image.open('screen_capture.jpg')


#invert
inverted_image = PIL.ImageOps.invert(img)
inverted_image.save('screen_capture.jpg')
img = Image.open('screen_capture.jpg')


#add contrast
contrast = ImageEnhance.Contrast(img)
img = contrast.enhance(2.0)
img.save('screen_capture.jpg')


#Change python encoding and process through tesseract
original_open = open
def bin_open(filename, mode='rb'):
    return original_open(filename, mode)

try:
    builtins.open = bin_open
    bts = pytesseract.image_to_string(img)
finally:
    builtins.open = original_open

print(str(bts, 'cp1252', 'ignore'))
