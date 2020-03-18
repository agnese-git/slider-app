import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`

`;

export default class Slider extends React.Component {

    state = {
        value: 0
    }

    handleOnChange = (e) => this.setState({value: e.target.value})

    render() {
        return  (
            <Styles>
                <input type="range" min={0} max={1000} value={this.state.value} className="slider" onChange={this.handleOnChange}/>
                <div className="value">{this.state.value}</div>
            </Styles>
        )
    }
}