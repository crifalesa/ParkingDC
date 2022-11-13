import { Link } from 'react-router-dom';
import data from '../data.js';

function HomeScreen() {
  return (
    <div>
      <h1>Lista de Parqueaderos</h1>
      <div className="parqueaderos">
        {data.parqueaderos.map((parqueadero) => (
          <div className="parqueadero">
            <Link to={`/parqueadero/${parqueadero.slug}`}>
              <img src={parqueadero.image} alt={parqueadero.nombre} />
            </Link>
            <div className="parqueadero-info">
              <a href={`/parqueadero/${parqueadero.slug}`}>
                <p>{parqueadero.nombre}</p>
              </a>
              <p>{parqueadero.dirección}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;