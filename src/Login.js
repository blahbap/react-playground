import React, {Component} from 'react';
import MyShellbar from './MyShellbar';
import { FormFieldset, FormInput, FormItem, FormLabel, FormLegend, FormMessage, FormRadioGroup, FormRadioItem, FormSelect, FormSet, FormTextarea } from 'fundamental-react/lib/Forms';
import { Button, ButtonGroup } from 'fundamental-react/lib/Button';

class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            user: "",
            password: ""
          };    
        
        // This binding is necessary to make `this` work in the callback
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);

      }

    handleLogin(event) {
        let url = '/sap/bc/login/login';
        let username = this.state.user; 
        let password = this.state.password;
        
        let headers = new Headers();
        
        //headers.append('Content-Type', 'text/json');
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        
        fetch(url, {method:'GET',
                headers: headers,
                //credentials: 'user:passwd'
               })
        .then(response => console.log(response))
        //.done();
        
        function parseJSON(response) {
            return response.json()
        }
    }

    handleChange(event) {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    render() {
        return (
            <div className="fd-shell fd-shell--fundamentals">
            <div className="fd-shell__header">
                <MyShellbar subTitle="Login" />
            </div>
            <div className="fd-shell__app">
              <div className="fd-app">
                <main className="fd-app__main fd-has-padding-medium">
                    <div className="fd-has-padding-medium">
                        <div className="fd-container fd-container--centered fd-col--3 fd-col--shift-4">
                            <FormSet>
                                <FormItem>
                                <FormLabel
                                    htmlFor="user"
                                    required>
                                User name
                                </FormLabel>
                                <FormInput                                
                                    id="user"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.user}/>
                                </FormItem>
                            </FormSet>
                            <FormSet>
                                <FormItem>
                                <FormLabel
                                    htmlFor="password"
                                    required>
                                Password
                                </FormLabel>
                                <FormInput
                                    id="password"
                                    onChange={this.handleChange}
                                    type="password"/>
                                </FormItem>
                            </FormSet>
                            <Button 
                                onClick={this.handleLogin}>
                                Login
                            </Button>
                        </div>
                    </div>
                </main>
              </div>
            </div>          
          </div>
  

        )
    }
}

export default Login;