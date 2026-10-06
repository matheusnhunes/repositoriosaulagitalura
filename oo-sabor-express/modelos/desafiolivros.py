
class Livros():

    livros = []

    def __init__(self, titulo, autor, ano_publicacao):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicacao = ano_publicacao
        self._disponivel = True
        Livros.livros.append(self)


# Na classe Livro, adicione um método especial str que retorna uma mensagem formatada com o título, autor e ano de publicação 
# do livro. Crie duas instâncias da classe Livro e imprima essas instâncias.

    def __str__(self):
        return f'O título do livro é > {self.titulo} <, por >{self.autor} < com o ano de publicação de > {self.ano_publicacao} <. \n {self.disponivel}'

    @property
    def disponivel(self):
        return '↗ Disponivel' if self._disponivel else '↘ Indisponivel'
    
# Adicione um método de instância chamado emprestar à classe Livro que define o atributo
#  disponivel como False. Crie uma instância da classe, chame o método emprestar e imprima se o livro está disponível ou não.
    def emprestar(self):
        self._disponivel = not self._disponivel


# Adicione um método estático chamado verificar_disponibilidade à classe Livro que recebe um ano como parâmetro
#  e retorna uma lista dos livros disponíveis publicados nesse ano.
    @staticmethod
    def verificar_disponibilidade(ano):
        livros_disponiveis = [livro for livro in Livros.livros if livro.ano_publicacao == ano and livro._disponivel]
        return f'Livros Disponíveis no ano {ano}: {len(livros_disponiveis)}'


livro_a = Livros('Titulo A', 'Autor A', 1987)
livro_b = Livros('Titulo B', 'Autor B', 1930)

print(livro_a)
print(livro_b)

Livros.emprestar(livro_a)
print(livro_a)

print(Livros.verificar_disponibilidade(1930))