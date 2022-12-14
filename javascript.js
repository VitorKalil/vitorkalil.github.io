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
/**var myCanvas = document.querySelector("#myCanvas");
console.log(document.querySelector(".navbar").clientWidth);
var context = myCanvas.getContext("2d");
var gradiente = context.createLinearGradient(0,0,document.querySelector(".navbar").clientWidth,0);
gradiente.addColorStop(0,"red");
gradiente.addColorStop(1,"white");
context.fillStyle = gradiente;
context.fillRect(0,0,document.querySelector(".navbar").clientWidth,document.querySelector(".navbar").clientHeight);
console.log(window.innerWidth)
**/

  

  