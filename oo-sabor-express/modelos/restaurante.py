from modelos.avaliacao import Avaliacao

class Restaurante:

    restaurantes = []

    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self._categoria = categoria.title()
        self._ativo = False
        self._avaliacao = []
        Restaurante.restaurantes.append(self)

    def __str__(self):
        return f'{self._nome} | {self._categoria}'

    @classmethod
    def listar_restaurantes(cls):
        print(f"{'Nome do Restaurante'.ljust(25)} | {'Categoria'.ljust(25)} | {'Avaliação'.ljust(25)} | {'Status'.ljust(25)}")
        for restaurante in cls.restaurantes:
            print(f'{restaurante._nome.ljust(25)} | {restaurante._categoria.ljust(25)} | {str(restaurante.media_avaliacoes).ljust(25)} | {restaurante.ativo.ljust(25)}')

    @property
    def ativo(self):
        return '↗ Verdadeiro' if self._ativo else '↘ Desativado'

    def alternar_estado(self):
        self._ativo = not self._ativo

    def receber_avaliacao(self, cliente, nota):
        avaliacao = Avaliacao(cliente, nota)
        self._avaliacao.append(avaliacao)

    @property
    def media_avaliacoes(self):
        if not self._avaliacao:
            return 0
        soma_das_notas = sum(avaliacao.nota for avaliacao in self._avaliacao)
        quantidade_de_notas = len(self._avaliacao)
        media = round(soma_das_notas / quantidade_de_notas, 1)
        return media