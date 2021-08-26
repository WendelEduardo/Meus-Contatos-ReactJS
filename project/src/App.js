import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <main class="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Wendel Eduardo</h1>
        <h2>A procura de uma vaga de programação!</h2>

        <div class="boxes">
          <a href="https://github.com/WendelEduardo" target="_blank">
            <div class="box">
              <h2>GitHub</h2>
              <p>Visite meus projetos!</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/wendel-eduardo-b72b231a2/" target="_blank">
            <div class="box">
              <h2>Linkedin</h2>
              <p>Veja meu perfil no linkedin!</p>
            </div>
          </a>

        </div>
        <div class="boxes">
          <a href="mailto:wendeleduardo2002@gmail.com">
            <div class="box">
              <h2>Gmail</h2>
              <p>Entre em contato comigo!</p>
            </div>
          </a>

          <a href="https://www.instagram.com/eduardo.wendel.35/" target="_blank">
            <div class="box">
              <h2>Instagram</h2>
              <p>Visite meu instagram.</p>
            </div>
          </a>

        </div>
      </main>

    </div>
  );
}

export default App;
