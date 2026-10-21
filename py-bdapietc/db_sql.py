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

cursor.execute(
    "INSERT INTO alunos (nome, nota) VALUES (?, ?)",
    ('Matheus', 9.5)
)

conn.commit()

cursor.execute("SELECT * FROM alunos")
for row in cursor.fetchall():
    print(row)

conn.close()