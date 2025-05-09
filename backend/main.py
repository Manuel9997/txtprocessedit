from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas.text_file import TextFile

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/upload-file')
def obtener(body:TextFile):
    print(body.content)
    with open('./archivostxt/archivo.txt', 'w', encoding='utf-8') as archivo:
        archivo.write(body.content)
