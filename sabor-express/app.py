import os

restaurantes = []

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
    print(subtitulo)
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
    restaurantes.append(nome_do_restaurante)
    print(f'O restaurante {nome_do_restaurante} foi cadastrado com sucesso!\n')
    voltar_ao_menu_principal()

def listar_restaurantes():
    exibir_subtitulo('Segue a lista dos restaurantes cadastrados:')
    
    for item in restaurantes:
        print('- ' + item)
    
    print('_____ \n')
    voltar_ao_menu_principal()

def escolher_opcoes():
    try:
        opcao_escolhida = int(input('Escolha uma opção: '))

        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            print('Ativar Restaurante.')
        elif opcao_escolhida == 4:
            sair_do_app()
        else:
            opcao_invalida()
    except:
        opcao_invalida()

def main():
    os.system('cls')
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcoes()

if __name__ == '__main__':
    main()