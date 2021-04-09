import React from 'react';

class search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'searchChnage': this.props.searchChange, 'dropdownChnage':this.props.dropchanges }
    }
    render() {
        return (
            <div className="filter_div">
                <input type="text" id="search_movie" placeholder="Search movies here" onSelect={this.state.searchChnage} />
                <select id="year_dropdown" onChange={this.state.dropdownChnage}>
                    <option value="">Select year</option>
                    <option value="2010">2010</option>
                    <option value="2020">2020</option>
                    <option value="2000">2000</option>
                </select>
            </div>

        )
    }
}
export default search;