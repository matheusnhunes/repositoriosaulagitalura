from modelos.restaurante import Restaurante

def main():
    print('Start')
    test()

def test():
    restaurante_praca = Restaurante('Praça', 'Gourmet')
    restaurante_praca.alternar_estado()
    restaurante_praca.receber_avaliacao('Gui', 4)
    restaurante_praca.receber_avaliacao('Gua', 5)
    restaurante_praca.receber_avaliacao('Guo', 4)

    Restaurante.listar_restaurantes()

if __name__ == '__main__':
    main()