from Myro import *
DarkBlue = makeColor(0,51,76)
Red = makeColor(217, 26, 33)
Blue = makeColor(112,150,158)
Yellow = makeColor(252, 227, 166)


pic= makePicture(jaymond obomafication())
show(pic)


for pixel in getPixels(pic):
    gray= getBlue(pixel)
    if gray > 80:
    setRBG(pixel, yellow)