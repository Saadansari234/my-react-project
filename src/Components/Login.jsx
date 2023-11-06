import React from "react";
import "./Style.css"

//1. validation
//2. state (email, password)
//3. product list
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",

            data: {
                username: "saad",
                password: "123",
            }
        }
    }

    updateInput = (event, key) => {
        this.setState(
            {
                [key]: event.target.value
            }
        )
    }

    HandleSubmit = () =>{
     const username= this.state.username
     const password= this.state.password
     const data= this.state.data

       if (username=== data.username && password=== data.password) {
          console.log("loged in")
          localStorage.setItem("LogediIn", 1)

        //   this.setState({'username': '', 'password': ''});

       }
      
    }

    render() {
        return (
            <div className="login">
                <div className="login-heading">

                    <h1>E-commerce Shop</h1>
                </div>
                <div className="login-Details">

                    <input placeholder="enter username" type="text"
                        onChange={(event) => this.updateInput(event, "username")}
                    />

                    <input placeholder="enter password" type="password"
                        onChange={(event) => this.updateInput(event, "password")}
                    />

                    <button onClick={this.HandleSubmit}>submit</button>
                </div>
            </div>
        )
    }
}

export default Login;