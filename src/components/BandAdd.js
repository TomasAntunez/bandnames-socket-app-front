import { useState, useContext } from 'react';

import { SocketContext } from '../context/SocketContext';


const BandAdd = () => {

    const [ name, setName ] = useState('');
    const { socket } = useContext( SocketContext );

    const handleSubmit = event => {
        event.preventDefault();

        if ( !name.trim() ) return;

        socket.emit( 'new-band', { name } );

        setName('');
    };


    return (
        <>
            <h3>Add Band</h3>

            <form onSubmit={ handleSubmit }>
                <input
                    className="form-control"
                    placeholder="New band name"
                    value={ name }
                    onChange={ event => setName( event.target.value ) }
                />
            </form>
        </>
    );
}

export default BandAdd;