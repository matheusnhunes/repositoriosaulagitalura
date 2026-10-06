class Musica:

    musicas = []

    def __init__(self, nome, artista, duracao):
        self.nome = nome
        self.artista = artista
        self.duracao = duracao
        Musica.musicas.append(self)

    def __str__(self):
        return f'{self.nome} | {self.artista} | {self.duracao}'

    def listar_musicas():
        for musica in Musica.musicas:
            print(f'{musica.nome} | {musica.artista} | {musica.duracao}')


musica1 = Musica('Musica A', 'Artista A', 320)

musica2 = Musica('Musica B', 'Artista B', 358)

musica3 = Musica('Musica C', 'Artista C', 224)

Musica.listar_musicas()