class ContaBancaria:

    contas_cadastradas = []

    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = float(saldo)
        self._ativo = False

    def __str__(self):
        return f'Leitor chamado, listando o titular {self.titular} com o saldo atual de {self.saldo}, {self.ativo}.'

    @property
    def ativo(self):
        return 'Conta Ativa' if self._ativo else 'Conta Inativa'

    def alternar_estado(self):
        self._ativo = not self._ativo

conta_a = ContaBancaria('Matheus', 10000.50)

print(conta_a)
print('**********')
print('Utilizar VARS')
print(vars(conta_a))
print('**********')
print('Utilizando DIR')
print(dir(conta_a))
print('**********')

ContaBancaria.alternar_estado(conta_a)
print(conta_a)
print('**********')
print(conta_a.titular)
print('**********')