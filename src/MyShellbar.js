import React, {Component} from 'react';
import { Shellbar } from 'fundamental-react/lib/Shellbar';

class MyShellbar extends Component {

    render() {
        return (
          <div>
          <Shellbar
            logo={<img alt="SAP" src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"/>}
            productTitle="CTS Worklist"
            profile={{
              colorAccent: 8,
              initials: 'JS',
              userName: 'John Snow'
            }}
            profileMenu={[
              {
                callback: function w(){alert("")},
                glyph: 'action-settings',
                name: 'Settings',
                size: 's'
              },
              {
                callback: function w(){},
                glyph: 'log',
                name: 'Sign Out',
                size: 's'
              }
            ]}
          />
          </div>
        );
      }

}
    

export default MyShellbar;

