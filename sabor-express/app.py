import os

restaurantes = [{'nome' : 'Restaurante de Sushi', 'categoria' : 'Japonesa', 'ativo' : False}, 
                {'nome' : 'Restaurante de Pizzas', 'categoria' : 'Italiana', 'ativo' : True},
                {'nome' : 'Churrinhos', 'categoria' : 'Guloseima', 'ativo' : False}]

def exibir_nome_do_programa():
    print("Sabor Express \n")

def exibir_opcoes():
    print('1. Cadastrar Restaurante')
    print('2. Listar Restaurante')
    print('3. Ativar Restaurante')
    print('4. Sair\n')

def sair_do_app():
    exibir_subtitulo('Sair do app.')

def exibir_subtitulo(subtitulo):
    os.system('cls')
    linha = '*' * (len(subtitulo))
    print(linha)
    print(subtitulo)
    print (linha)
    print()

def voltar_ao_menu_principal():
     input('Digite qualquer coisa para retornar ao menu. ')
     main()

def opcao_invalida():
    print('Opção inválida. \n')
    voltar_ao_menu_principal()

def cadastrar_novo_restaurante():
    exibir_subtitulo('Cadastro de Novos Restaurantes')
    nome_do_restaurante = input('Digite o nome do restaurante que deseja cadastrar: ')
    categoria_do_restaurante = input(f'Digite a categoria do restaurante {nome_do_restaurante}: ')
    dados_do_restaurante = {'nome' : nome_do_restaurante, 'categoria' : categoria_do_restaurante, 'ativo' : False}
    restaurantes.append(dados_do_restaurante)
    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!\n')
    voltar_ao_menu_principal()

def listar_restaurantes():
    exibir_subtitulo('Segue a lista dos restaurantes cadastrados:')

    ajuste = 10
    print(f'{'- Nome do Restaurante'.ljust(ajuste)} | {'Categoria'.ljust(ajuste)} | {'Status'.ljust(ajuste)}')

    
    for item in restaurantes:
        nome = item['nome']
        categoria = item['categoria']
        ativo = 'Ativado' if item['ativo'] else 'Desativado'
        print(f'- {nome.ljust(ajuste)} | {categoria.ljust(ajuste)} | {ativo.ljust(ajuste)}')

    print('_____ \n')
    voltar_ao_menu_principal()

def alternar_estado_restaurante():
    exibir_subtitulo('Alterando estado do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alterar o estado: ')
    restaurante_encontrado = False
    
    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'
            print(mensagem)
    
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado.')

    voltar_ao_menu_principal()


def escolher_opcoes():
    try:
        opcao_escolhida = int(input('Escolha uma opção: '))

        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_restaurante()
        elif opcao_escolhida == 4:
            sair_do_app()
        else:
            opcao_invalida()
    except:
        pass

def main():
    os.system('cls')
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcoes()

if __name__ == '__main__':
    main()