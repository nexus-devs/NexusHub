# Image Processing
# ----------------------
from PIL import Image
from PIL import ImageGrab
from PIL import ImageEnhance
import PIL.ImageOps
import pytesseract
import builtins



# Take Screenshot and resize
def shot():

    global img
    img = ImageGrab.grab(bbox=(0,365,1525,755))

    basewidth = 5300
    wpercent = (basewidth / float(img.size[0]))
    hsize = int((float(img.size[1]) * float(wpercent)))
    img = img.resize((basewidth, hsize), PIL.Image.ANTIALIAS)


# Grayscale, invert colors, increase contrast
def enhance():

    global img
    converter = PIL.ImageEnhance.Color(img)
    img = converter.enhance(0.0)

    img = PIL.ImageOps.invert(img)

    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(2)


# Tesseract. Returns array with each line in chat
def ocr():

    original_open = open
    def bin_open(filename, mode='rb'):
        return original_open(filename, mode)

    try:
        builtins.open = bin_open
        bts = pytesseract.image_to_string(img).decode("utf-8")
    finally:
        builtins.open = original_open

    Msg = []
    for line in bts.splitlines():
        if not line.isspace() and not line == '':
            Msg.append(line)

    return (Msg)

