function Footer(props) {
    return (
        <>
            <footer id="contacto">
                <p>IESP "TRUJILLO" © {props.aniop}</p>
                <p>Programa de Estudios: {props.programita}</p>
                <p>Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export default  Footer