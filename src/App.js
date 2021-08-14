import logo from './logo.svg';
import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';

import Header from './components/Header';
import Main from './components/Main';

import Card from './components/Card';

import Form from './components/Form';

import PokeApi from './components/PokeApi';

function App() {

  const [num, setNumero] = React.useState();

  const sumar = () => {
    let total = num + 1;
    setNumero(total);
  }

  const restar = () => {
    let total = num - 1;
    setNumero(total);
  }

  const listaAnimales = [
    { title: "Leon", description: "Rey de la selva", img: "https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Le%C3%B3n-2.jpg" },
    { title: "Tigre", description: "Casi rey de la selva", img: "https://www.medioambiente.net/wp-content/uploads/tigre3.jpg" },
    { title: "Chango", description: "Ni de pedo el rey de la selva", img: "https://estepais.com/wp-content/uploads/2020/05/imagenes-estepais-macaco.jpg" },

  ];

  return (
    <>
      <Header title="Hola soy el header" />
      <p className="redText">{num}</p>
      <Button variant="contained" color="secondary" onClick={restar}>-</Button>
      <Button variant="contained" color="primary" onClick={sumar}>+</Button>
      <Main />

      {
        listaAnimales.map(la => {
          return <Card
            title={la.title}
            description={la.description}
            img={la.img}
          />
        })
      }

      <Form />
      <PokeApi />
    </>
  );
}

export default App;
