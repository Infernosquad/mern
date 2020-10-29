import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ConversationList from "./conversations/ConversationList";
import Login from "./Login";
import axios from '../service/client'
import {startLoading,endLoading} from "../actions/loadingActions";
import LinearProgress from "@material-ui/core/LinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class Root extends React.Component {
    componentDidMount() {
        const self = this
        axios.interceptors.request.use(function (config) {
            self.props.startLoading();
            return config;
        }, function (error) {
            self.props.endLoading();
            return error;
        });

        axios.interceptors.response.use(function (response) {
            self.props.endLoading();
            return response;
        }, function (error) {
            let data = null;
            if (error.response && error.response.data){
                data = error.response.data;
            }
            self.props.endLoading(data);
            return error;
        });
    }

    render() {
        let loading = this.props.loading.loading;
        let error = this.props.loading.error;

        return (
            <Provider store={this.props.store}>
                {loading ? <LinearProgress /> : ''}
                <Snackbar open={error != null} autoHideDuration={6000}>
                    <Alert severity="error" onClose={() => {}}>{error ? error.message:''}</Alert>
                </Snackbar>
                <Router>
                    <Route exact path="/" component={ConversationList}/>
                    <Route path="/login" component={Login}/>
                </Router>
            </Provider>
        )
    }
}


Root.propTypes = {
    store: PropTypes.object.isRequired
}
const mapStateToProps  = (state) => ({
    loading:state.loading
})

export default connect(mapStateToProps,{startLoading,endLoading})(Root)