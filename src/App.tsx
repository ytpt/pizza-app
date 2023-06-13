import React, { FC, useState } from 'react';
import './App.css';
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./modals/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza]);
    }

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(pizzasList.map((pizza) =>
            (pizza.id === newPizza.id ? newPizza : pizza)));
    }

    const deletePizza = (id: number) => {
        const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
        setPizzasList(newPizzasList);
    }

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">MAKE LOVE PIZZA</span>
                <AddPizzaForm addPizza={addPizza} />
                <DisplayPizzas
                    pizzasList={pizzasList}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                />
            </div>
        </div>
  );
}

export default App;
