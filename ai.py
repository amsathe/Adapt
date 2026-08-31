import random
uinput = float(input())
a = uinput
ranvar = random.random()
ranvar = round(ranvar, 0)
preans = uinput*ranvar
correctans = uinput*3

while abs(preans-correctans)!=0:
    ranvar = ranvar + 1
    preans = uinput*ranvar

print (preans)