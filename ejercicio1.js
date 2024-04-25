const { google } = require("googleapis");
const fs = require("fs");

const credenciales = require("./serviceaccount.json");

const clienteAutenticado = new google.auth.GoogleAuth({
  credentials: credenciales,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({
  version: "v3",
  auth: clienteAutenticado,
});

async function generarReporte() {
  try {
    const folderId = "1dK-KbLt9eVC7jw_LXpNdyq6NIHV1jvqu";
    const archivos = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/pdf'`,
      fields: "files(name, createdTime, modifiedTime, owners, webViewLink)",
      orderBy: "modifiedTime desc",
    });

    let csvContent =
      "Título del documento - Fecha de creación - Fecha de última modificación - Nombre del creador (owner) del documento - Hipervínculo para acceder al documento\n";
    archivos.data.files.forEach((archivo) => {
      const nombre = archivo.name || "";
      const fechaCreacion = archivo.createdTime || "";
      const fechaModificacion = archivo.modifiedTime || "";
      const creador = archivo.owners?.[0]?.displayName || "";

      const hipervinculo = archivo.webViewLink || "";
      csvContent += `${nombre} - ${fechaCreacion} - ${fechaModificacion} - ${creador} - ${hipervinculo}\n`;
    });

    fs.writeFile("reporte.csv", csvContent, { encoding: 'utf8' }, (err) => {
      if (err) {
        console.error("Error al escribir el archivo CSV:", err);
      } else {
        console.log("Reporte generado correctamente.");
      }
    });
  } catch (error) {
    console.error("Error al generar el reporte:", error);
  }
}

generarReporte();
