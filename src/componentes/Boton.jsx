import React from 'react';
import '../estilos/botones.css'


const Boton = ({ texto, btnClic, manejarClick }) => {


    return (
        <div>

            <button
                className={ btnClic ? 'btnClic' : 'btnReiniciar' }
                onClick={manejarClick}
            >

                {texto}


            </button>

        </div>
    );
};




export default Boton;
