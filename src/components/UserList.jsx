import React from 'react'
import PropTypes from 'prop-types'

function UserList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.cell}</td>
                
            </tr>
        </React.Fragment>
    )
}

UserList.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    cell: PropTypes.string,
}

export default UserList