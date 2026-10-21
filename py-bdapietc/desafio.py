# # Importa os módulos usados para criar e ler arquivos CSV e JSON.
import csv
import json

# # Exibe uma saudação e pula uma linha após o texto.
# print('Halo\n')

# # Cria uma lista de filmes e mostra os títulos armazenados nela.
# lista_filme = ["Arcane", "Kung Fu Panda", "Shrek"]
# print(lista_filme)

# # Cria uma tupla com o ano de lançamento de cada filme e mostra os anos.
# tupla_data = (2022, 2026, 2016)
# print(tupla_data)

# # Associa o primeiro filme ao primeiro ano em um dicionário e exibe o resultado.
# dict_filmedata = {
#     "nome_filme" : lista_filme[0],
#     "data_filme" : tupla_data[0]
# }

# print(dict_filmedata)

# # Percorre os índices da lista para criar um dicionário que relaciona cada filme ao seu ano.
# dict_filmes = {}
# for i in range(len(lista_filme)):
#     dict_filmes[lista_filme[i]] = tupla_data[i]

# # Mostra o dicionário completo de filmes e anos.
# print(dict_filmes)

# # Exibe uma linha separadora antes de listar os filmes e seus anos.
# print('**********')
# for chave, valor in dict_filmes.items():
#     print(chave, valor)

# # Abre dados.txt no modo de escrita, substitui seu conteúdo e grava uma mensagem.
# with open('dados.txt', 'w', encoding='utf-8') as arquivo:
#     arquivo.write('Olá, mundo!\n')

# # Abre dados.txt para leitura e exibe o conteúdo atual.
# with open('dados.txt', 'r', encoding='utf-8') as arquivo:
#     print(arquivo.read())

# # Abre dados.txt no modo de acréscimo e adiciona uma nova linha ao final.
# with open('dados.txt', 'a', encoding='utf-8') as arquivo:
#     arquivo.write('Adicionando uma nova linha.\n')

# # Lê e exibe novamente o arquivo, agora incluindo a linha acrescentada.
# with open('dados.txt', 'r', encoding='utf-8') as arquivo:
#     print(arquivo.read())

# # Cria dados.csv com cabeçalho e duas linhas de dados, usando UTF-8.
# with open('dados.csv', 'w', newline='', encoding='utf-8') as f:
#     escritor = csv.writer(f)
#     escritor.writerow(['Nome', 'Idade'])
#     escritor.writerow(['Matheus',30])
#     escritor.writerow(['Janaína',30])

# # Lê cada linha de dados.csv e a exibe como uma lista de valores.
# with open('dados.csv', newline='', encoding='utf-8') as f:
#     leitor = csv.reader(f)
#     for linha in leitor:
#         print(linha)

# # Define os dados de uma pessoa, incluindo uma lista de endereços.
# dados = {
#     'nome': 'Matheus',
#     'idade': 30,
#     'enderecos': ['a', 'b', 'c']
# }

# # Salva o dicionário dados no arquivo dados.json no formato JSON.
# with open('dados.json', 'w', encoding='utf-8') as f:
#     json.dump(dados, f)

# # Lê os dados de dados.json, converte-os para objetos Python e exibe o resultado.
# with open('dados.json', 'r', encoding='utf-8') as f:
#     dados_lidos = json.load(f)
#     print(dados_lidos)

with open('alunos.csv', 'w', newline='', encoding='utf-8') as f:
    escritor = csv.writer(f)
    escritor.writerow(['Nome do Aluno', 'Nota do Aluno'])
    escritor.writerow(['Matheus', 9.5])
    escritor.writerow(['Janaína', 9.9])
    escritor.writerow(['Matheus Ruim', 5.0])

with open('alunos.csv', 'r', encoding='utf-8') as f:
    leitor = csv.reader(f)
    for linha in leitor:
        if linha[1] != 'Nota do Aluno' and float(linha[1]) >= 7.0:
            print(linha)
