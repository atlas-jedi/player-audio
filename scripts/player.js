function playAudio(event) {
  const fileInput = document.querySelector("#file");
  const fileSpan = document.querySelector("#fileSpan");
  const fileStatus = document.querySelector("#fileStatus");
  const labelFile = document.querySelector(".labelFile");
  const player = document.querySelector("#player");

  if (fileInput.files.length === 0 ) {
    alert("Selecione uma música válida para tocar.")
    return;
  }

  const file = fileInput.files[0];
  const fileUrl = URL.createObjectURL(file);
  player.src = fileUrl;
  fileSpan.textContent = file.name;
  fileStatus.hidden = false;
  labelFile.textContent = "Mudar Arquivo";
}
