// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Importar CSS
import './estilos.css';

// Importar o formulário
import Formulario from './Formulario';

// Importar a tabela
import Tabela from './Tabela';

// Componente
class Principal extends React.Component{

  // Contrutor
  constructor(props){
    super(props);

    this.state = {
      nome : '',
      idade : null
    }
  }

  // Função ao digitar (onChange)
  aoDigitar = (campo) => {
    this.setState({[campo.target.name] : [campo.target.value]});
  }

  // Função clique (onSubmit)
  aoClicar = (botao) => {
    botao.preventDefault();
    console.log(this.state);
  }

  // Render
  render(){
    return(
      <div>
        <Formulario funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar} />
        <Tabela />
      </div>
    )
  }
}

// Render
ReactDOM.render(<Principal />, document.getElementById('root'));
