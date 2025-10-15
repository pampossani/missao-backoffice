let pontuacao = 0;

function responder(opcao) {
  const feedback = document.getElementById("feedback");
  const pontuacaoEl = document.getElementById("pontuacao");

  if (opcao === 1) {
    feedback.textContent = "✅ Correto! Verificar o histórico é o primeiro passo.";
    pontuacao += 10;
  } else {
    feedback.textContent = "❌ Incorreto. Essa ação pode gerar mais problemas.";
    pontuacao -= 5;
  }

  pontuacaoEl.textContent = `Pontuação: ${pontuacao}`;
}