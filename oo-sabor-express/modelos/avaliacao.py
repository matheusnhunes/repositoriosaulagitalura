class Avaliacao():
    def __init__(self, cliente, nota):
        self._cliente = cliente
        self._nota = 0
        self.nota = nota  # passa pelo setter, já valida na criação

    @property
    def nota(self):
        return self._nota

    @nota.setter
    def nota(self, valor):
        if valor < 0 or valor > 5:
            raise ValueError(f'A nota deve ser entre 0 e 5, recebido: {valor}')
        self._nota = valor