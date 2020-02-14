import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({newTech: e.target.value});
  }

  handleSubmit = e =>
  {
    e.preventDefault(); // para não executar o load da page
    this.setState({
      techs: [...this.state.techs, this.state.newTech ],
      newTech: '', // para limpar o input
    });
  }

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button type="button" onClick={() => this.handleDelete(tech)}>Remover</button>
            </li>           
          ))}
        </ul>
        
        <input 
          type="text"  
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>

      </form>
    );
  }
}

export default TechList;