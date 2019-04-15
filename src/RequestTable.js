import React, {Component} from 'react'
import { Table } from 'fundamental-react/lib/Table';

class RequestTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {tableData:[
            {
            rowData: [
                'Data 1',
                'Data 2',
                'Data 3',
                'Data 4'
            ]
            },
            {
            rowData: [
                'Data 5',
                'Data 6',
                'Data 7',
                'Data 8'
            ]
            }
        ]};
    }

    render() {
        return (
            <Table
            headers={[
                'Column Header 1',
                'Column Header 2',
                'Column Header 3',
                'Column Header 4'
            ]}
            tableData={this.state.tableData}
            />

        )

    }
}

export default RequestTable;