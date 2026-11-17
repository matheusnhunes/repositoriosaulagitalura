import os
import sqlite3

CAMINHO_BANCO = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'database.db')

def conectar():
    conn = sqlite3.connect(CAMINHO_BANCO)
    conn.execute('PRAGMA foreign_keys = ON')
    return conn

def criar_tabela_estudantes():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS estudantes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            idade INTEGER NOT NULL
            )
    ''')
    conn.commit()
    conn.close()

def criar_tabela_matricula():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS matriculas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            estudante_id INTEGER NOT NULL,
            curso TEXT NOT NULL,
            FOREIGN KEY (estudante_id) REFERENCES estudantes (id)
        )
    ''')
    conn.commit()
    conn.close()


def criar_estudante(nome, idade):
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO estudantes (nome, idade) VALUES (?, ?)', (nome, idade))
    conn.commit()
    conn.close()

def listar_estudantes():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM estudantes')
    estudantes = cursor.fetchall()

    for estudante in estudantes:
        print(f"ID: {estudante[0]}, Nome: {estudante[1]}, Idade: {estudante[2]}")

    conn.close()
    return estudantes

def criar_matricula(estudante_id, curso):
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO matriculas (estudante_id, curso) VALUES (?, ?)', (estudante_id, curso))
    conn.commit()
    conn.close()

def listar_matriculas():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('SELECT matriculas.id, estudantes.id, matriculas.curso, estudantes.nome FROM matriculas JOIN estudantes ON matriculas.estudante_id = estudantes.id')
    matriculas = cursor.fetchall()

    for matricula in matriculas:
        print(f"ID da Matrícula: {matricula[0]}, ID do Estudante: {matricula[1]}, Nome do Estudante: {matricula[3]}, Curso: {matricula[2]}")

    conn.close()
    return matriculas



if __name__ == '__main__':
    criar_tabela_estudantes()
    criar_tabela_matricula()
    ##criar_estudante('João', 20)
    ##criar_estudante('Maria', 22)
    listar_estudantes()
    ##criar_matricula(1, 'Matemática')
    ##criar_matricula(2, 'Física')
    listar_matriculas()