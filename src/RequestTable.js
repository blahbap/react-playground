import React, {Component} from 'react'
import { Table } from 'fundamental-react/lib/Table';

class RequestTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {tableData:[]};
    }

    componentWillMount()  {
        // fetch('/api/requests')
        // .then(response => response.json())
        // .then(data => this.convertApiData(data))
        // .then(convertedData => this.setState({ "tableData": convertedData }));
    }

    convertApiData(data) {
        return new Promise(function(resolve, reject) {
            
            var convertedData = [];
            var request = {};
            data.forEach(element => {
                request.rowData = [];
                request.rowData.push(element.Trkorr);
                request.rowData.push(element.As4user);
                request.rowData.push(element.As4date);
                request.rowData.push(element.As4time);
                convertedData.push(request);
            });
            resolve(convertedData);
          });
    }

    render() {
        return (
            <Table
            headers={[
                'Request',
                'User',
                'Date',
                'Time'
            ]}
            tableData={this.state.tableData}
            />

        )

    }
}

export default RequestTable;