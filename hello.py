str1 = input("Introduce una palabra: ")

def Convert(string):
    lista = []
    listaDos = []
    lista[:0] = string
    for i, val in enumerate(lista):
        listaDos.append(val)
    return listaDos

print(Convert(str1))

