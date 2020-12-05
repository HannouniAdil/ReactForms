import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmitButton = (event) =>{
        event.preventDefault();
        const values = {
            name: this.name.value,
            lastname: this.lastName.value
        }

        console.log(values)
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter First Name</label>
                        <input 
                        type="text" 
                        ref={input => this.name=input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name</label>
                        <input 
                        type="text" 
                        ref={input => this.lastName=input}
                        />
                    </div>
                    <button onClick={this.handleSubmitButton}>
                        Submit
                    </button>
            </form>
        </div>
        )
    }
}

export default Uncontrolled;