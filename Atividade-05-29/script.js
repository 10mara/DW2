document.getElementById('isbnForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const isbn = document.getElementById('isbn').value.trim();
  const mensagemErro = document.getElementById('mensagemErro');
  const resultadoLivro = document.getElementById('resultadoLivro');
  
  mensagemErro.textContent = '';
  resultadoLivro.innerHTML = '';
  
  if (!isbn.match(/^\d{10}(\d{3})?$/)) {
    mensagemErro.textContent = 'ISBN inválido. Deve conter 10 ou 13 dígitos numéricos.';
    return;
  }

  fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Livro não encontrado');
      }
      return response.json();
    })
    .then(data => {
      resultadoLivro.innerHTML = `
        <p><strong>Título:</strong> ${data.title}</p>
        <p><strong>Autores:</strong> ${data.authors.join(', ')}</p>
        <p><strong>Editora:</strong> ${data.publisher}</p>
        <p><strong>Ano:</strong> ${data.year}</p>
        <p><strong>Sinopse:</strong> ${data.synopsis}</p>
        <p><strong>Assuntos abordados:</strong> ${data.subjects}</p>
        <p><strong>Qtd de páginas:</strong> ${data.page_count}</p>
        
        
      `;
    })
    .catch(error => {
      mensagemErro.textContent = error.message;
    });
});
