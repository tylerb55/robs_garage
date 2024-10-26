from pymongo import MongoClient
from fastapi import FastAPI
import uvicorn
from typing import List, Dict
import json

app = FastAPI()

@app.get("/api/get-parts/")
async def get_parts(vehicle: str, collection: str):
    uri = "mongodb+srv://make-man:b3TaqsGZ6gYY1H4x@cluster0.r4krv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    client = MongoClient(uri)
    try:
        database = client.get_database(vehicle)
        parts = database.get_collection(collection)
        records = list(parts.find())
        for record in records:
            record["_id"] = str(record["_id"])
            
        return {"records":records}
    except Exception as e:
        raise Exception("Unable to find the document due to the following error: ", e)

    
if __name__ == "__main__":
    uvicorn.run(app, port=8080, host="0.0.0.0")
