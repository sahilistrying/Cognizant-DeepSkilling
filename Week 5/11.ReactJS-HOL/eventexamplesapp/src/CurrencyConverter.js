import React from "react";
class CurrencyConverter extends React.Component{
    state={
        amount:""
    };
    handleChange=(e)=>{
        this.setState({amount:e.target.value});
    };
    handleSubmit =(e)=>{
        e.preventDefault();
        const euro=this.state.amount/90;
        alert("Euro :"+euro.toFixed(2));
    }
    render(){
        return(
            <div>
                <h2>Currency Converter</h2>
                <form onSubmit={this.handleSubmit}>
                    Amount:
                    <input type="number" value={this.state.amount} onChange={this.handleChange}></input>
                    <button type="submit">Convert</button>
                </form>
            </div>
        )
    }
}
export default CurrencyConverter;
