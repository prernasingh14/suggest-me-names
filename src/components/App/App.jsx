import React,{Component} from 'react';
import Search from '../Search/Search';
import Header from './../Header/Header';
import Results from './../Results/Results';

const name=require('@rstacruz/startup-name-generator');

class App extends Component{
   
    state={
        headerText:'Name It!',
        headerExpanded:true,
        suggestedNames:[]
    };
onInputChange=(inputText)=>{

    this.setState({...this.state,
        headerExpanded:!inputText,
        suggestedNames:inputText?name(inputText):[]})

}
    render(){
return (
    <div>
       <Header headerTitle={this.state.headerText} 
       headerExpanded={this.state.headerExpanded}/>
       <Search onInputChange={this.onInputChange}/>
       <Results namesList={this.state.suggestedNames}/>
    </div>
)
}
}


export default App;