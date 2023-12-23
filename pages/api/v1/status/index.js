import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const version = await database.query("SHOW server_version;");
  const maxConnections = await database.query("SHOW max_connections;");

  return response.status(200).json({
    chave: "valor",
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: `${version.rows[0].server_version}`,
        maxConnections: `${maxConnections.rows[0].max_connections}`,
      },
    },
  });
}

export default status;
