import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo } ) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>Mi primer párrafo</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;