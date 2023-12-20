import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  return response.status(200).json({
    chave: "valor",
    updated_at: updatedAt,
  });
}

export default status;
