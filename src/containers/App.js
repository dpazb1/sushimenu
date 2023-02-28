import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/Search';
import CardList from '../components/CardList';
import { sushis } from '../sushiList';
import Error from '../components/Error';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super()
        this.state = {  // State is what changes our App.
            sushis: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        this.setState({sushis: sushis});  // As soon as App.js loads or mounts, we set state for sushis.
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const { sushis, searchfield } = this.state;
        let nameFilter = sushis.filter(sushis => {
            return sushis.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        let fullFilter = sushis.filter(sushis => {
            return sushis.ingredients.toLowerCase().includes(searchfield.toLowerCase())
        })
        
        for (let i of nameFilter) {
            if (!fullFilter.includes(i)) {
                fullFilter.push(i);
            }
        }

        return (
            <div>
                <Header />
                <SearchBox searchChange = {this.onSearchChange} />
                {!fullFilter.length &&
                    <Error />
                }
                <ErrorBoundry>
                    <CardList sushis = {fullFilter}/>
                </ErrorBoundry>
            </div>
        )
    }
}

export default App;