import React, { Component } from "react";
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            input:"",
        }
    }
    handleFormData=(event)=>{
        event.preventDefault();
        this.props.action(this.state.input);
    }
    render(){
        return(
            <>
            <div className="row" style={{"marginTop":"20px"}}>
                <div className="col-md-10">
                    <form onSubmit={this.handleFormData}>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="search here" 
                             onChange={e=>{this.setState({input:e.target.value})}} />
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    }
}
export default Search;