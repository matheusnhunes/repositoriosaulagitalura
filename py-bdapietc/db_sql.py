import sqlite3

conn = sqlite3.connect('alunos.db')
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    nota REAL NOT NULL
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS disciplina (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_disciplina TEXT NOT NULL,
    estudante_id INTEGER NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES alunos (id)
)
''')

# cursor.execute(
#     "INSERT INTO alunos (nome, nota) VALUES (?, ?)",
#     ('Matheus', 9.5)
# )

# cursor.execute(
#     """
#     UPDATE alunos SET nome = ? WHERE id = ?
#     """,
#     ("Matheus Ruim", "3")
# )

# cursor.execute(
#     "INSERT INTO disciplina (nome_disciplina, estudante_id) VALUES (?, ?)",
#     ('Matemática', 1)
# )

conn.commit()

cursor.execute("SELECT * FROM alunos")
for row in cursor.fetchall():
    print(row)

print("\n********\n")

cursor.execute("SELECT * FROM disciplina")
for row in cursor.fetchall():
    print(row)

print("\n********\n")

cursor.execute(
    """
    SELECT alunos.nome, disciplina.nome_disciplina FROM disciplina JOIN alunos ON disciplina.estudante_id = alunos.id
    """
)
print(cursor.fetchall())

conn.close()