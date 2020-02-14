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

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
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