const Section2 = () =>{
    const img = [
        {
            image: "/src/assets/37.jpg",
            title: "Prosigna",
            description: "Pronóstico y manejo del Cancer de mama"
        },
        {
            image: "/src/assets/21.png",
            title: "Color Test",
            description: "Entienda su riesgo genético a padecer los cánceres hereditarios más comunes"
        },
        {
            image: "/src/assets/53.jpg",
            title: "Neobona",
            description: "La nueva generación de diagnóstico prenatal no invasivo"
        },
        {
            image: "/src/assets/46.jpg",
            title: "Precongen",
            description: "Test genético para el estudio de portadores por NGS"
        },
    ];
    return(
        <div className="container my-5">
            <div className="row">
                {img.map((item, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <img 
                            src={item.image}
                            alt={`image-${index}`}
                            className="img-fluid" 
                        />
                        <h4 className="mt-4">{item.title}</h4>
                        <p className="text-muted">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section2


// const Section2 = () => {
//     const img = [
//         {
//             image: "/src/assets/37.jpg",
//             description: "Descripción de la primera imagen. Aquí puedes poner cualquier texto que quieras mostrar."
//         },
//         {
//             image: "/src/assets/21.png",
//             description: "Descripción de la segunda imagen. Puedes personalizar cada descripción."
//         },
//         {
//             image: "/src/assets/53.jpg",
//             description: "Descripción de la tercera imagen. Agrega detalles relevantes aquí."
//         },
//         {
//             image: "/src/assets/46.jpg",
//             description: "Descripción de la cuarta imagen. Información adicional sobre esta imagen."
//         },
//     ];
    
//     return (
//         <div className="container my-5">
//             <div className="row">
//                 {img.map((item, index) => (
//                     <div className="col-md-3 mb-4" key={index}>
//                         <div className="card">
//                             <img 
//                                 src={item.image}
//                                 alt={`image-${index}`}
//                                 className="img-fluid card-img-top" 
//                             />
//                             <div className="card-body">
//                                 <p className="card-text">{item.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Section2