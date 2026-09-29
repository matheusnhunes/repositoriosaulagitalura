# numero = int(input('Digite um número: '))

# if numero >= 0:
#     print(f'O número {numero} é positivo.')
# else:
#     print(f'O número {numero} é negativo.')

# # 1 - Solicite ao usuário que insira um número e, em seguida, use uma estrutura if else para determinar se o número é par ou ímpar.
# numero = int(input('Digite um número para definir se é par ou ímpar: '))

# if numero % 2 == 0:
#     print(f'O número {numero} é par.')
# else:
#     print(f'O número {numero} é ímpar.')

# # 2 - Pergunte ao usuário sua idade e, com base nisso, use uma estrutura if elif else para classificar a idade em categorias de acordo com as seguintes condições:

# # Criança: 0 a 12 anos;
# # Adolescente: 13 a 18 anos;
# # Adulto: acima de 18 anos.

# idade = int(input('Qual é a sua idade? '))
# if 0 < idade <= 12:
#     print('Criança!')
# elif 12 < idade <= 18:
#     print('Adolescente!')
# else:
#     print('Adulto!')

# # 3 - Solicite um nome de usuário e uma senha e use uma estrutura if else para verificar se o nome de usuário e a senha fornecidos correspondem aos valores esperados determinados por você.

# login_chave = 'mthnunes'
# senha_chave = 123

# login = input('Digite o seu usuário: ')
# senha = int(input('Digite a sua senha numérica: '))

# if login == login_chave:
#     if senha == senha_chave:
#         print('Usuário conectado!')
#     else:
#         print('Senha incorreta!')
# else:
#     print('Usuário incorreto!')

# # 4 - Solicite ao usuário as coordenadas (x, y) de um ponto qualquer e utilize uma estrutura if elif else para determinar em qual quadrante do plano cartesiano o ponto se encontra de acordo com as seguintes condições:

# # Primeiro Quadrante: os valores de x e y devem ser maiores que zero;
# # Segundo Quadrante: o valor de x é menor que zero e o valor de y é maior que zero;
# # Terceiro Quadrante: os valores de x e y devem ser menores que zero;
# # Quarto Quadrante: o valor de x é maior que zero e o valor de y é menor que zero;
# # Caso contrário: o ponto está localizado no eixo ou origem.

# coord_x = int(input('Insira a coordenada para X: '))
# coord_y = int(input('Insira a coordenada para Y: '))

# if coord_x > 0 and coord_y > 0:
#     print('Primeiro')
# elif coord_x < 0 and coord_y > 0:
#     print('Segundo')
# elif coord_x < 0 and coord_y < 0:
#     print('Terceiro')
# elif coord_x > 0 and coord_y < 0:
#     print('Quarto')
# else:
#     print('O ponto está localizado no eixo.')


# 1 - Crie uma lista para cada informação a seguir:

# Lista de números de 1 a 10;
# Lista com quatro nomes;
# Lista com o ano que você nasceu e o ano atual.

lista_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lista_nomes = ['Matheus', 'Janaina', 'Solano', 'Layla']
lista_ano = ['1996', '2026']

for i in lista_numeros:
    print(f'. {i}')

for i in lista_nomes:
    print(f'. {i}')

for i in lista_ano:
    print(f'. {i}')

# 2 - Crie uma lista e utilize um loop for para percorrer todos os elementos da lista.
# já fiz com o loop for em cima

# 3 - Utilize um loop for para calcular a soma dos números ímpares de 1 a 10.

somaimpar = 0
for i in lista_numeros:
    if i % 2 != 0:
        somaimpar += i    

print(somaimpar)

# 4 - Utilize um loop for para imprimir os números de 1 a 10 em ordem decrescente.

lista_numeros.sort(reverse=True)
for i in lista_numeros:
    print(f'. {i}')

# 5 - Solicite ao usuário um número e, em seguida, utilize um loop for para imprimir a tabuada desse número, indo de 1 a 10.

numero_tabuada = int(input('Digite um número inteiro para exibir a tabuada: '))

while i < 11:
    print(f'{numero_tabuada} x {i} = {numero_tabuada*i}')
    i += 1

# 6 - Crie uma lista de números e utilize um loop for para calcular a soma de todos os elementos. Utilize um bloco try-except para lidar com possíveis exceções.

somatodos = 0
try:
    for i in lista_numeros:
        somatodos += i
    print(f'Somatória ficou em {somatodos}.')
except:
    print('Vacilou errou.')

# 7 - Construa um código que calcule a média dos valores em uma lista. Utilize um bloco try-except para lidar com a divisão por zero, caso a lista esteja vazia.

soma_valores = 0
media = 0

try:
    for valor in lista_numeros:
        soma_valores += valor
    media = soma_valores / len(lista_numeros)
    print(f"Média dos valores: {media}")
except ZeroDivisionError:
    print("A lista está vazia, não é possível calcular a média.")
except Exception as e:
    print(f"Ocorreu um erro: {e}")
