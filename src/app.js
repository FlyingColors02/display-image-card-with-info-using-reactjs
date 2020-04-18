import React, { Component } from "react";
import Search from "./component/search.jsx";
import axios from "axios";
import ShowImages from "./component/image.show.jsx";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            inputData:"",
            source:[],
            loading:null
        }
    }
    FetchData=async (data)=>{
        this.setState({inputData:data})
        this.setState({loading:true})
        let response= await axios.get(`https://pixabay.com/api/?key=16049560-3ba9262f7dc76fbd5f3772390&q=${this.state.inputData}&image_type=photo&pretty=true`);
        setTimeout(()=>{
            this.setState({loading:false})
            this.setState({source: response.data.hits})
        },2000);
        
    }
    render(){
        return(
            <div className="container">
            <Search action={this.FetchData}/> 
            {this.state.loading ? "loading..": <ShowImages d={this.state.source}/>}
            </div>
        )
    }
}
export default App;