import React, { useState } from 'react';

function ListaItens() {
  const [itens, setItens] = useState([]);
  const [novoItemNome, setNovoItemNome] = useState(''); // Estado para o nome do novo item

  function adicionarItem() {
    if (novoItemNome.trim() === '') {
      // Evita adicionar itens vazios
      return;
    }

    const novoItem = { id: Date.now(), nome: novoItemNome };
    setItens([...itens, novoItem]);
    setNovoItemNome(''); // Limpa o campo de entrada após adicionar o item
  }

  return (
    <div>
      <button onClick={adicionarItem}>Adicionar Item</button><br/>
      <input
        type="text"
        value={novoItemNome}
        onChange={(e) => setNovoItemNome(e.target.value)}
        placeholder="Digite o nome do novo item"
      />
      
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaItens;