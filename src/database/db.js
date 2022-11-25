import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;

try {
    await mongoClient.connect();
    db = mongoClient.db("ecommerce");
    } catch {
    console.log("Erro na conexão com o servidor");
    }

    export const usersCollection = db.collection("users")
    export const sessionsCollection = db.collection("sessions")