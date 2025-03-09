const Article1 = ({subtitulo,parrafo}) => {
    return (
        <div className="overlay pt120 pb120 fondo bg-secondary text-white p-3">
            <h2 className="text-center white-text">
                <strong>{subtitulo}</strong>
            </h2>
            <p className="text-center white-text">{parrafo}</p>
	    </div>
    )
}

export default Article1 