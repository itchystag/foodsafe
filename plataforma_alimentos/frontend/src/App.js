import logo from './logo.png';
import './App.css';
import AddFood from './components/AddFood'; 
import FoodList from './components/FoodList'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>¡Bienvenido a FoodSafe!</h1>
        <p>Aquí podrás controlar y reducir el desperdicio de tu comida.</p>
      </header>
      <main>
        <section>
          <h2>Agregar un nuevo alimento</h2>
          <AddFood />
        </section>

        <section>
          <FoodList />
        </section>
      </main>
    </div>
  );
}


export default App;
