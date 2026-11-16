function somar(a, b) {
  if (typeof a !== "number") {
    return "Erro, o primeiro parâmetro não é um número";
  }
  return Number(a) + Number(b);
}

exports.somar = somar;
