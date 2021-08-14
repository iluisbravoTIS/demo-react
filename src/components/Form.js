import React from 'react';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const Form = () => {

    const [nombre, setNombre] = React.useState("Luis");
    const [edad, setEdad] = React.useState("29");
    const [peso, setPeso] = React.useState("No sé");

    const onChangeInfo = (evt) => {

        let target = evt.target.name;
        let value = evt.target.value;
        console.log(target, value);

        switch (target) {
            case "nombre":
                setNombre(value);
                break;
            case "edad":
                setEdad(value);
                break;
            case "peso":
                setPeso(value);
                break;


            default:
                break;
        }


    }

    const submitInfo = (evt) => {
        evt.preventDefault();

        let info = {
            nombre,
            edad,
            peso
        };
        console.log(info, "Nombre");
    }

    return (
        <>
            <Card>
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={submitInfo}>
                        <TextField id="standard-basic" label="Nombre" name="nombre" value={nombre} onChange={onChangeInfo} />
                        <TextField id="standard-basic" label="Edad" name="edad" value={edad} onChange={onChangeInfo} />
                        <TextField id="standard-basic" label="Peso" name="peso" value={peso} onChange={onChangeInfo} />
                        <TextField id="standard-basic" label="Altura" name="altura" onChange={onChangeInfo} />

                        <Button color="primary" variant="contained" type="submit">Submit</Button>
                    </form>
                </CardContent>
            </Card>

        </>
    )
}

export default Form;