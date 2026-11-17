from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List
import models
import schemas
from database import SessionLocal, engine

# cria as tabelas no PostgreSQL caso não existam
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post('/estudantes/', response_model=schemas.EstudanteResponse)
def create_estudante(estudante: schemas.EstudanteCreate, db: Session = Depends(get_db)):
    if db.query(models.Estudante).filter_by(email=estudante.email).first():
        raise HTTPException(status_code=400, detail="E-mail já cadastrado")

    db_estudante = models.Estudante(
        nome=estudante.nome,
        idade=estudante.idade,
        email=estudante.email,
    )
    db.add(db_estudante)
    db.commit()
    db.refresh(db_estudante)
    return db_estudante

@app.get('/estudantes/', response_model=List[schemas.EstudanteResponse])
def read_estudantes(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    estudantes = db.query(models.Estudante).offset(skip).limit(limit).all()
    return estudantes
