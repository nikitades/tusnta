import React from "react";
import {connect} from "react-redux";
import SearchForm from "../_components/SearchForm";
import Filter from "../_components/Filter";
import SearchResults from "../_components/SearchResults";

class MainPage extends React.Component {
    render () {
        return <div className="container">
            <h1>The Social Network Test App</h1>
            <SearchForm/>
            <Filter/>
            <SearchResults/>
        </div>
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(MainPage);