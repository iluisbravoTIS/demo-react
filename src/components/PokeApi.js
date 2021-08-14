import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Button, Card, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const PokeApi = () => {

    const [data, setData] = React.useState();
    const [idPokemon, setIdPokemon] = React.useState(1);

    const getData = (idPokemon) => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+idPokemon)
            .then(res => res.json())
            .then(res => {
                console.log(res.name);
                setData(res.name);
            })
            .catch(err => {
                console.log("Error:" + err);
            });
    }

    const changePokemon = () =>{
        getData(idPokemon);
    }

    const changeIdPokemonText = (evt) => {
        let value = evt.target.value;
        setIdPokemon(value);
    }

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                <Card>
                    <CardContent>
                        <TextField onChange={changeIdPokemonText}/>
                        <Button color="primary" onClick={changePokemon}>Get Data</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        {data}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        main 2
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={12}>
                <Card>
                    <CardContent>
                        Footer
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )

}

export default PokeApi;