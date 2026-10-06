from modelos.restaurante import Restaurante
from modelos.cardapio.bebida import Bebida
from modelos.cardapio.prato import Prato

def main():
    print('Start')
    test()

def test():
    restaurante_praca = Restaurante('Praça', 'Gourmet')
    bebida_suco = Bebida('Suco de Melão', 5.50, 'Grande')
    prato_paozinho = Prato('Paozinho', 1.50, 'O melhor pão da cidade.')
    bebida_suco.aplicar_desconto()
    prato_paozinho.aplicar_desconto()

    restaurante_praca.adicionar_item_no_cardapio(bebida_suco)
    restaurante_praca.adicionar_item_no_cardapio(prato_paozinho)

    Restaurante.listar_restaurantes()

    print('**********')

    restaurante_praca.exibir_cardapio

if __name__ == '__main__':
    main()