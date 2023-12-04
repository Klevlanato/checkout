
// Script para mostrar o modal
// $(document).ready(function () {
//   $("#staticBackdrop").modal("show");
// });

// Script para abrir o WhatsApp
$(document).ready(function () {
  $('#abrirWhatsApp').click(function () {
    const telefone = $('#telefone').val();
    const numeroFormatado = telefone.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
    if (numeroFormatado.length > 0) {
      const url = `https://web.whatsapp.com/send?phone=${numeroFormatado}`;
      window.open(url, '_blank');
    } else {
      alert('Por favor, insira um número de telefone válido.');
    }
  });
});