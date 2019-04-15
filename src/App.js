import './index.css';
import React, {Component} from 'react';
import MyShellbar from './MyShellbar';
import RequestTable from './RequestTable';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests:[],
    };
  }

  render() {
      return (
        <div className="fd-shell fd-shell--fundamentals">
          <div className="fd-shell__header">
            <MyShellbar />
          </div>
          <div className="fd-shell__app">
            <div className="fd-app">
              <main className="fd-app__main fd-has-padding-medium">
                <RequestTable />
              </main>
            </div>
          </div>
          
        </div>
      )
    
    }
}

export default App;