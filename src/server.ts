import express, { Request, Response } from "express";

import "./database";

const app = express();

/**
 * Tipos de metódos
 * GET: Buscar uma informação
 * POST: Criar uma informação
 * PUT: Atualizar uma informação
 * DELETE: Deletar uma informação
 * PATCH: Atualizar uma informação específica
 */

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

app.post("/", (request: Request, response: Response) => {
  return response.json({
    message: "Usuário salvo com sucesso!",
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
