from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['alunos']
alunos = db['alunos']

alunos.insert_one({'nome': 'Matheus', 'nota': 9.5})

for aluno in alunos.find():
    print(aluno)