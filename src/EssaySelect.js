import React from "react";

class EssaySelect  extends React.Component {
	constructor(props) {
        super(props);

		this.state = {
			value: "Моя жизнь как у обычного студента, учусь работаю и иногда гуляю с друзьями "
        };
			


		this.handleChange = this.handleChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleChange(event) {
		this.setState({value: event.target.value});
    }

	handleSubmit(event) {
            alert ("Вы точно хотите отправить это?:" + " " + this.state.value);
		event.preventDefault();
    
	}

	render() {
		return (
            <div className="select">
            <form onSubmit={this.handleSubmit}>
               <label >
				Расскажите о совоей жизни:
				<textarea  className="texta" value= {this.state.value} onChange={this.handleChange}/>

			   </label>
			   <input  className="btn1" type="submit" value="Отправить"/>
            </form>
            </div>
		)
		
	}

}
export default EssaySelect

