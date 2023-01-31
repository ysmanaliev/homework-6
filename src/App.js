import {useForm}  from "react-hook-form";

export default function App () {
	const {
		register,
		handleSubmit,	
	}= useForm();

	const onSubmit = (data) => {
        alert(JSON.stringify (data));
		
	}

	return (
		<div className="form ">
			<h1> Регистрация</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
			<label>
				LastName:
				<input className="select" placeholder="Введите ваше фамилие " {...register('Фамилия',{
					required:true,
				})}/>
			</label>
			<br/>
			<label >
				FirstName:
				<input className="select" placeholder="Введите ваше имя " {...register('Имя',{
					required:true,
				})}/>
			</label>
				
				<div><input className="btn" type="submit"/></div>
			</form>
		</div>
	)
}