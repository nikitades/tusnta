import React from "react";
import {connect} from "react-redux";
import SearchForm from "../_components/SearchForm";
import Filter from "../_components/Filter";
import SearchResults from "../_components/SearchResults";
import ClientInfo from "../_components/ClientInfo";

class UserPage extends React.Component {
    render() {
        return <div className="container">
            <ClientInfo/>
            <SearchForm/>
            <Filter/>
            <SearchResults/>
        </div>
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps)(UserPage);