document.getElementById("cep").addEventListener("blur", (evento) => {
  let cep = evento.target.value.replace(/\D/g, ""); // remove tudo que não é número

  if (cep.length !== 8) {
    alert("O CEP deve conter 8 números.");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.erro) {
        document.getElementById("bairro").value = data.bairro || "";
        document.getElementById("cidade").value = data.localidade || "";
        document.getElementById("estado").value = data.uf || "";
      } else {
        alert("CEP não encontrado!");
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao buscar o CEP.");
    });
});
