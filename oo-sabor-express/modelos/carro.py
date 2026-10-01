class Carro:

    carros = []

    def __init__(self, modelo, carroceria, cor, ano):
        self.modelo = modelo
        self.carroceria = carroceria
        self.cor = cor
        self.ano = ano
        Carro.carros.append(self)

    def __str__(self):
        return f'{self.modelo} é um Carro na cor {self.cor} do ano de {self.ano} sob a carroceria {self.carroceria}.'

    def listar_carros():
        for carro in Carro.carros:
            print(f'{carro.modelo} | {carro.cor} | {carro.ano} | {carro.carroceria}.')

carro_sw4 = Carro('SW4', 'SUV', 'Verde Musgo', '2001')
carro_hilux = Carro('Hilux','Pick-up', 'Amarelo', '1998')

print(carro_sw4)
print(carro_hilux)
print()
Carro.listar_carros()