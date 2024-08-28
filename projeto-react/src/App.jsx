import { useState } from 'react';

import Perfil from './assets/components/Perfil';
import Formulario from './assets/components/Formulario';
import { ReposList } from './assets/components/ReposList';

function App() {
  const [formularioEstaVisivil, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {/* <Perfil nome="Eleandro" endereco="https://github.com/Eleandrobaldessar.png"/> */}

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {formularioEstaVisivil && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivil)} type='button'>toggle form</button>
    </>
  )
}
export default App
