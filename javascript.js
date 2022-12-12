// segunda parte dos testes com react

function Header() {
    return (
      <nav className="navbar">
        <ul className="lista">
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    )
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));
  //primeira parte dos testes
  
  class Hello extends React.Component {
      render() {
        return <div>Hell</div>;
      }
    }
  class Teste extends React.Component {
      render() {
          return <div>teste</div>;
      }
  }
  
  function Teste2(){
      return( <div>tcha</div>)
  }
  /*
    ReactDOM.render(
      <Teste2 />,
      document.getElementById('root')
    );
  
    var el = document.createElement("h1");
    el.textContent = "olar";
    var minhaDiv = document.getElementById('root');
    minhaDiv.append(el)
    */
  