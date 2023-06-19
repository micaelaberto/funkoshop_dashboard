//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react'

//Importar nuestro componente
import UserList from './UserList'

class User extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => {
            this.setState({ users: data.data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
                {/*<!-- USUARIO LIST -->*/}
                

                {/*<!-- DataTales -->*/}
                <div className="card margin shadow mb-4">
                <h1 className="title">Usuarios en base de datos</h1>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table1 table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Celular</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className='effec'>
                                    {
                                        this.state.users.map((user, index) => {
                                            return <UserList  {...user} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User