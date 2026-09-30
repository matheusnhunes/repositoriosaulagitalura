numero = int(input('Digite um número: '))

if numero >= 0:
    print(f'O número {numero} é positivo.')
else:
    print(f'O número {numero} é negativo.')

# 1 - Solicite ao usuário que insira um número e, em seguida, use uma estrutura if else para determinar se o número é par ou ímpar.
numero = int(input('Digite um número para definir se é par ou ímpar: '))

if numero % 2 == 0:
    print(f'O número {numero} é par.')
else:
    print(f'O número {numero} é ímpar.')

# 2 - Pergunte ao usuário sua idade e, com base nisso, use uma estrutura if elif else para classificar a idade em categorias de acordo com as seguintes condições:

# Criança: 0 a 12 anos;
# Adolescente: 13 a 18 anos;
# Adulto: acima de 18 anos.

idade = int(input('Qual é a sua idade? '))
if 0 < idade <= 12:
    print('Criança!')
elif 12 < idade <= 18:
    print('Adolescente!')
else:
    print('Adulto!')

# 3 - Solicite um nome de usuário e uma senha e use uma estrutura if else para verificar se o nome de usuário e a senha fornecidos correspondem aos valores esperados determinados por você.

login_chave = 'mthnunes'
senha_chave = 123

login = input('Digite o seu usuário: ')
senha = int(input('Digite a sua senha numérica: '))

if login == login_chave:
    if senha == senha_chave:
        print('Usuário conectado!')
    else:
        print('Senha incorreta!')
else:
    print('Usuário incorreto!')

# 4 - Solicite ao usuário as coordenadas (x, y) de um ponto qualquer e utilize uma estrutura if elif else para determinar em qual quadrante do plano cartesiano o ponto se encontra de acordo com as seguintes condições:

# Primeiro Quadrante: os valores de x e y devem ser maiores que zero;
# Segundo Quadrante: o valor de x é menor que zero e o valor de y é maior que zero;
# Terceiro Quadrante: os valores de x e y devem ser menores que zero;
# Quarto Quadrante: o valor de x é maior que zero e o valor de y é menor que zero;
# Caso contrário: o ponto está localizado no eixo ou origem.

coord_x = int(input('Insira a coordenada para X: '))
coord_y = int(input('Insira a coordenada para Y: '))

if coord_x > 0 and coord_y > 0:
    print('Primeiro')
elif coord_x < 0 and coord_y > 0:
    print('Segundo')
elif coord_x < 0 and coord_y < 0:
    print('Terceiro')
elif coord_x > 0 and coord_y < 0:
    print('Quarto')
else:
    print('O ponto está localizado no eixo.')


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

# 1 - Crie um dicionário representando informações sobre uma pessoa, como nome, idade e cidade.

informacoes_pessoais = [{'nome' : 'Matheus', 'idade' : '30', 'cidade' : 'Florianópolis'}]

print(informacoes_pessoais[0]['nome'])

# 2 - Utilizando o dicionário criado no item 1:

# Modifique o valor de um dos itens no dicionário (por exemplo, atualize a idade da pessoa);
# Adicione um campo de profissão para essa pessoa;
# Remova um item do dicionário.

informacoes_pessoais[0]['idade'] = 29
print(informacoes_pessoais[0]['idade'])

informacoes_pessoais[0]['profissao'] = 'Garoto de Programa'
print(informacoes_pessoais[0])

informacoes_pessoais.pop()
print(informacoes_pessoais)

# 3 - Crie um dicionário que relacione os números de 1 a 5 aos seus respectivos quadrados.

numeros_quadrados = {x: x**2 for x in range(1, 6)}
print(numeros_quadrados)

# 4 - Crie um dicionário e verifique se uma chave específica existe dentro desse dicionário.

dicionario_chaves = [{'chave' : 'abobora', 'ativo' : True}, {'chave' : 'batata', 'ativo' : True}, {'chave' : 'abacate', 'ativo' : True}, {'chave' : 'melao', 'ativo' : True}]
print(dicionario_chaves)
print()

existe_em_algum = any('conta' in item for item in dicionario_chaves)
print(existe_em_algum)   # True

print('ativo' in dicionario_chaves[0])   # True, checa dentro do primeiro item

# 5 - Escreva um código que conte a frequência de cada palavra em uma frase utilizando um dicionário.

frase = "Python se tornou uma das linguagens de programação mais populares do mundo nos últimos anos."
contagem_palavras = {}
palavras = frase.split()
for palavra in palavras:
    contagem_palavras[palavra] = contagem_palavras.get(palavra, 0) + 1
print(contagem_palavras)

# Monitorando vendas no comércio

macas_vendidas = input('Digite o número de Maçãs vendidas no período: ')
bananas_vendidas = input('Digite o número de Bananas vendidas no período: ')

if macas_vendidas > bananas_vendidas:
    print('Vendemos mais maçãs!')
elif macas_vendidas < bananas_vendidas:
    print('Vendemos mais bananas!')
else:
    print('Vendemos foi tudo igual!')

# Calculando o tempo total de projeto

valor_a = int(input('Digite a quantidade de dias de A: '))
valor_b = int(input('Digite a quantidade de dias de B: '))
valor_c = int(input('Digite a quantidade de dias de C: '))

if valor_a < 0 or valor_b < 0 or valor_c < 0:
    print('Os dias não podem ser negativos!')
else:
    print(f'O total de dias investidos nos projetos foram de {valor_a + valor_b + valor_c}!')

# Temperatura dos servidores

temperatura_servidor = int(input('Digite a temperatura que o servidor se encontra: '))

if temperatura_servidor > 25:
    print('Alerta! temperatura acima do limite permitido.')
else:
    print('Temperatura OK, aguardando próxima medição.')

# Calculando o IMC

peso = float(input('Digite seu peso (em KG): '))
altura = float(input('Digite sua altura (em METROS): '))

imc = peso/(altura ** 2)
print (f'Seu IMC é de {imc}.')

if imc < 18.5:
    print('Abaixo do peso.')
elif imc < 25:
    print('Peso normal.')
else:
    print('Acima do peso.')

# Controlando o orçamento mensal

despesas = float(input('Digite o total de despesas do mês (R$): '))
limite = 3000;

if despesas > limite:
    print('Atenção! Você ultrapassou o limite do orçamento!')
else:
    print('Tá de boas!')

# Controle de acesso ao escritório

horario_vintequatro = int(input('Digite a hora atual (formato 24 horas): '))

if 8 <= horario_vintequatro < 18:
    print('Acesso liberado.')
else:
    print('Acesso negado, fora do horário!')

# Classificando estudantes por média

nota_a = float(input('Digite a primeira nota: '))
nota_b = float(input('Digite a segunda nota: '))
nota_c= float(input('Digite a terceira nota: '))

media = (nota_a + nota_b + nota_c) / 3

print(f'Sua média é de {media}.')

if media >= 7:
    print('Aprovado.')
elif media > 5:
    print('Recuperação.')
else:
    print('Reprovado.')

# Calculando pedágio

quilometragem = int(input('Digite a quilometragem percorrida (em KM): '))

if quilometragem < 100:
    print('Custo do pedágio: R$ 10,00.')
elif quilometragem < 200:
    print('Custo do pedágio: R$ 20,00.')
else:
    print('Custo do pedágio: R$ 30,00')

# Verificando a paridade de um número

numero = int(input('Digite um número para verificar se é par ou ímpar: '))

if numero % 2 == 0:
    print('Número é par.')
else:
    print('Número é impar.')

renda_mensal = float(input('Digite sua renda mensal: '))
parcela_desejada = float(input('Digite o valor de parcela desejada: '))

renda_minima = 2000
parcela_maxima = renda_mensal * 0.3

print(f'Renda mínima em {renda_minima} e parcela máxima em {parcela_maxima}. \n')

if renda_mensal < renda_minima or parcela_desejada > parcela_maxima:
    print('Empréstimo negado: parcela acima de 30% da renda.')
else:
    print('Empréstimo aprovado.')

# Compreendendo laços

clientes = ["João", "Maria", "Carlos", "Ana", "Beatriz"]

for cliente in clientes:
    print(cliente)

# Quantas vezes a mensagem será exibida?

for i in range(5):
    print('Bem-vindo ao Buscante!')

# Calculando a soma de números

valores = [10, 20, 30, 40, 50]
soma = 0

for valor in valores:
    soma += valor

print(f'O valor total é de {soma}.')

# Organizando seu portfólio

projetos = ["website", "jogo", "análise de dados", None, "aplicativo móvel"]

for i in projetos:
    if i is None:
        print('Projeto Ausente')
    else:
        print(i)

# Entendendo o uso do break

livros = ["1984", "Dom Casmurro", "O Pequeno Príncipe", "O Hobbit", "Orgulho e Preconceito"]

for i in livros:
    if i == 'O Hobbit':
        print(i)
        break

# Controle de estoque

estoque = 5

while estoque > 0:
    estoque -= 1
    print(f'Venda realizada! Estoque restante: {estoque}')

# Contagem Regressiva

contagem_promocao = 10

while contagem_promocao >= 1:
    if contagem_promocao % 2 == 0:
        print(f'Faltam apenas {contagem_promocao} segundos - Não perca essa oportunidade!')
    elif contagem_promocao % 2 != 0:
        print(f'A contagem continua: {contagem_promocao} segundos restantes.')
    else:
        print('Aproveite a promoção agora!')
    contagem_promocao -= 1

# Utilidade do continue em laços

livros = [

    {"nome": "1984", "estoque": 5},

    {"nome": "Dom Casmurro", "estoque": 0},

    {"nome": "O Pequeno Príncipe", "estoque": 3},

    {"nome": "O Hobbit", "estoque": 0},

    {"nome": "Orgulho e Preconceito", "estoque": 2}

]

for i in livros:
    if i['estoque'] > 0:
        print(f'Livro disponível: {i['nome']}')

# Validação de entrada para login

# O nome de usuário deve ter pelo menos 5 caracteres.
# A senha deve ter pelo menos 8 caracteres.

while True:
    nome_usuario = input("Digite seu nome de usuário: ")
    senha = input("Digite sua senha: ")

    if len(nome_usuario) < 5:
        print("O nome de usuário deve ter pelo menos 5 caracteres.")
        continue

    if len(senha) < 8:
        print("A senha deve ter pelo menos 8 caracteres.")
        continue

    print("Cadastro realizado com sucesso!")
    break