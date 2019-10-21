import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions";
import { Button, Classes } from "@blueprintjs/core";
// import { Example, handleBooleanChange, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";
interface IProps {
    count: number,
    plusOne: any,
    minusOne: any
}
interface IState {}

class Home extends React.Component<IProps, IState> {
    render() {
        return (
            <div>
                <p>count: {this.props.count}</p>
                <p>
                <Button intent="success" className={Classes.FILL} text="增加" onClick={this.props.plusOne} />
                <Button className={Classes.FILL} text="减少" onClick={this.props.minusOne} />
                </p>
            </div>
        );
    }
}

function mapStateToProps(state:any) {
    return {
        count: state.counter.count
    };
}

function mapDispatchToProps(dispatch:any) {
    return bindActionCreators(actions, dispatch);
}

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export default ConnectedHome;
