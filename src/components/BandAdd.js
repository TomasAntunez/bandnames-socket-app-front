import { useState } from 'react';


const BandAdd = ({ createBand }) => {

    const [ name, setName ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        if ( !name.trim() ) return;

        createBand( name );

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