from modelos.restaurante import Restaurante

def main():
    print('Start')
    test()



def test():
    
    restaurante_praca = Restaurante('Praça', 'Gourmet')
    restaurante_praca.alternar_estado()
    restaurante_praca.receber_avaliacao('Gui', 9)
    restaurante_praca.receber_avaliacao('Gua', 7)
    restaurante_praca.receber_avaliacao('Guo', 4)


    # restaurante_pizza = Restaurante('tonho', 'Italiana')

    # print(dir(restaurante_praca))
    # print(vars(restaurante_praca))
    # print(restaurante_praca)
    # print(restaurante_pizza)

    Restaurante.listar_restaurantes()


if __name__ == '__main__':
    main()
