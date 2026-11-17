from datetime import datetime
from pydantic import BaseModel, ConfigDict

class EstudanteBase(BaseModel):
    nome: str
    idade: int
    email: str

class EstudanteCreate(EstudanteBase):
    pass

class EstudanteResponse(EstudanteBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    data_criacao: datetime



class MatriculaBase(BaseModel):
    estudante_id: int
    curso: str
    data_matricula: datetime
    nota_final: float

class MatriculaCreate(MatriculaBase):
    pass

class MatriculaResponse(MatriculaBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
