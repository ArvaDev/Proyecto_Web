
function FormCompleta() {
    return (
        <div className="contenidoCompleta">
            <div className="formularioCompleta">
                <form>

                    <div className=" contenedorInput1">
                        <h1 className="tituloCompleta">Completa tu perfil</h1>
                        <p>¡Personaliza tu experiencia! Completa tu perfil para conectarte mejor con la comunidad.</p>

                        <div>Carrera</div>
                        <input className="inputs" type="text" placeholder="Ing. en Sistemas" />

                        <div>ID estudiantes</div>
                        <input className="inputs" type="number" placeholder="32165461" />

                        <div>Telefono</div>
                        <input className="inputs" type="number" placeholder="961 456 2856" />
                    </div>
                    <div className="contenedorCheck">
                        Intereses
                        <div className="intereses">
                            <input className="inter" type="checkbox" id="topping" name="topping" />
                            Materias

                            <input type="checkbox" id="topping" name="topping" />
                            Deportes

                            <input type="checkbox" id="topping" name="topping" />
                            Comida

                            <input type="checkbox" id="topping" name="topping" />
                            Peliculas/series

                            <input type="checkbox" id="topping" name="topping" />
                            Hobbies
                        </div>

                        <div className="contenedorSocial">
                            <h3>Redes sociales</h3>

                            <div className="Instagram">
                                <img src="/" alt="imagen instagram" />
                                <input type="email" placeholder="correo" />
                            </div>

                            <div className="Facebook">
                                <img src="/" alt="imagen Facebook" />
                                <input type="email" placeholder="correo" />
                            </div>

                            <div className="Twitter">
                                <img src="/" alt="imagen twitter" />
                                <input type="email" placeholder="correo" />
                            </div>
                        </div>
                        <h3>Acerca de mí</h3>
                        <input type="text" placeholder="¡Campo para compartir una breve descripción sobre ti!" />

                    </div>

                    <div>
                        <input type="file" onChange={(event) => {
                            const file = event.target.files[0];
                        }} />
                    </div>

                    <div className="ubicación">

                        <div >
                            <input type="text" placeholder="Calle" />
                            <input type="number" placeholder="Número" />
                        </div>

                        <div>
                            <input type="text" placeholder="colonia" />
                            <input type="number" placeholder="CP" />
                        </div>

                        <div>
                            <input type="text" placeholder="Ciudad" />
                            <input type="number" placeholder="Estado" />
                        </div>

                        <p>---------------------------------------------------------------------------------------------------</p>

                    </div>

                    <button>Guardar cambios</button>




                </form>
            </div>
        </div>
    );
}

export default FormCompleta;