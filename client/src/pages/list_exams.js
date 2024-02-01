import '../index.css'
import * as React from 'react'
import { Table } from '@mantine/core'

function ListExams() {

    return (
        <table>
            <thead>
                <tr>
                    <th>Patient ID</th>
                    <th>Exam ID</th>
                    {/* Add more headers if needed */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Patient 1</td>
                    <td>Exam 1</td>
                    {/* Add more data cells if needed */}
                </tr>
                {/* Add more rows if needed */}
            </tbody>
        </table>
    );
}

export default ListExams;
