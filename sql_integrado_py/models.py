from sqlalchemy import (
    Column, Integer, String, ForeignKey, DateTime, Float
)
from sqlalchemy.sql import func

from database import Base

class Estudante(Base):
    __tablename__ = "estudantes"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True, nullable=False)
    idade = Column(Integer, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    data_criacao = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

class Matricula(Base):
    __tablename__ = "matriculas"

    id = Column(Integer, primary_key=True, index=True)
    estudante_id = Column(Integer, ForeignKey("estudantes.id"), nullable=False)
    curso = Column(String, index=True, nullable=False)
    data_matricula = Column(DateTime)
    nota_final = Column(Float)
