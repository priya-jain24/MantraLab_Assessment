import React from 'react';
import { obj } from './data';
import Movies from './Movies';
import Search from './search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'movies_arr': obj,
      'searched_val': '',
      'year_val': ''
    }
  }
  searchedVal = (event) => {
    this.setState({ 'searched_val': event.target.value.toLowerCase() });
  }
  dropchanges = (event) => {
    this.setState({'year_val':event.target.value});
  }
 
  render() {
    const filtered_records = this.state.movies_arr.filter(x => {
      if(this.state.searched_val !== '' && this.state.year_val !== ''){
        return x.name.toLowerCase().includes(this.state.searched_val) && x.year === this.state.year_val;
      }       
      else if(this.state.year_val !== ''){
        return x.year === this.state.year_val;
      }
      else  
        return x.name.toLowerCase().includes(this.state.searched_val)
    })
    console.log(filtered_records)
    return (
      <React.Fragment>
        <Search searchChange={this.searchedVal} dropchanges= {this.dropchanges}></Search>
        <Movies data={filtered_records} />
      </React.Fragment>

    )
  }
}

export default App;
