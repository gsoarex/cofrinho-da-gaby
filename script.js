let total = 0;

function depositar() {
  const input = document.getElementById('valor');
  const valor = parseFloat(input.value);

  if (!isNaN(valor) && valor > 0) {
    total += valor;
    document.getElementById('total').textContent = total.toFixed(2);
    input.value = '';
  } else {
    alert('Digite um valor válido!');
  }
}
