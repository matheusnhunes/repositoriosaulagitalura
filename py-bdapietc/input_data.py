nome = input('Digiteu seu nome: ')
idade = input('Digita sua idade: ')

with open('dados.txt', 'a', encoding='utf-8') as f:
    f.write(f'Nome: {nome}\nIdade: {idade}\n')