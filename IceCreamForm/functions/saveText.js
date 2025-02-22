const saveText = (text) => {
  const blob = new Blob([text], { type: "text/plain" });
  const fileDownloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = fileDownloadUrl;
  link.download = "downloaded_text.txt"; // název souboru
  document.body.appendChild(link);
  link.click(); // inicializce stahování
  document.body.removeChild(link);
  URL.revokeObjectURL(fileDownloadUrl);
};

export default saveText;