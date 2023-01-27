import React from "react";
import EssaySelect from './EssaySelect';

class EssayForm  extends React.Component {
	constructor(props) {
        super(props);

		this.state = {
			value: "BMW"
        };
			


		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleChange(event) {
		this.setState({value: event.target.value});
    }

	handleSubmit(event) {
        alert ("Ваш выбор:"  + "" + this.state.value + " " + "Все верно?");
		event.preventDefault();
    
	}

	render() {
		return (
			<div className="form">
				<EssaySelect />
			
            <form onSubmit={this.handleSubmit}>
               <label >
				Выберите марку машины пожалуйста:
				<select className="select" value = {this.state.value} onChange={this.handleChange}>
				
				<option value="BMW">BMW</option>
				<option value="Mersedes">Mersedes</option>
				<option value="Lexus">Lexus</option>
				<option value="Tayota">Tayota</option>
				<option value="Ford">Ford</option>
				</select> 
			   </label>
			   <input className="btn2" type="submit" value="Отправить"/>
            </form>
			</div>
		)
		
	}

}
export default EssayForm

