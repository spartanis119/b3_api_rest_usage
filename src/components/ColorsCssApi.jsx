import { useEffect, useState } from "react"

export const ColorsCssApi = () => {

    const [colors, setColors] = useState([]);

    const [error, setErrors] = useState(null);


    const fetchData = async () => {
        try {
            const response = await fetch("https://api.sampleapis.com/csscolornames/colors");

            const data = await response.json();

            setColors(data);

        } catch (error) {
            console.error(`Error al realizar la peticion a la API : ${error}`);
            setErrors(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    if (error) {
        return (
            <div className="alert alert-danger text-center" role="alert">
                {error}
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {colors.map((color, index) => (
                    <div className="col-3" key={index} style={{display : index < 15 ? "" : "none" }} >
                        <div style={{ backgroundColor: color.hex }} >
                            <h1>Color: {color.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
