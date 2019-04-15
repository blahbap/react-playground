import React, {Component} from 'react';
import MyShellbar from './MyShellbar';
import { FormFieldset, FormInput, FormItem, FormLabel, FormLegend, FormMessage, FormRadioGroup, FormRadioItem, FormSelect, FormSet, FormTextarea } from 'fundamental-react/lib/Forms';


class Login extends Component {

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
                        <FormSet>
                            <FormItem>
                            <FormLabel
                                htmlFor="input-2"
                                required>
                            User name
                            </FormLabel>
                            <FormInput
                                id="input-2"
                                placeholder="Field placeholder text"
                                type="text"/>
                            </FormItem>
                        </FormSet>
                        <FormSet>
                            <FormItem>
                            <FormLabel
                                htmlFor="input-3"
                                required>
                            Password
                            </FormLabel>
                            <FormInput
                                id="input-3"
                                placeholder="Field placeholder text"
                                type="password"/>
                            </FormItem>
                        </FormSet>
                    </div>
                </main>
              </div>
            </div>          
          </div>
  

        )
    }
}

export default Login;