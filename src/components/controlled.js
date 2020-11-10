import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: 'Adil',
        lastName: 'Hannouni'
    }

    handleNameChange = (event) =>{
        this.setState({
            name:event.target.value
        })
    }

    handleLastNameChange = (event) =>{
        this.setState({
            lastName:event.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter First Name</label>
                        <input 
                        type="text" 
                        onChange={this.handleNameChange}
                        value={this.state.name}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name</label>
                        <input 
                        type="text" 
                        onChange={this.handleLastNameChange}
                        value={this.state.lastName}
                        />
                    </div>
            </form>
        </div>
        )
    }
}

export default Controlled;