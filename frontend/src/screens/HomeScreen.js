import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useEffect, useReducer } from 'react';
import logger from 'use-reducer-logger';
// import data from '../data.js';

const reducer = (state, action) => {

  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, parqueaderos: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

function HomeScreen() {
  const [{loading, error, parqueaderos}, dispatch] = useReducer(logger(reducer), {
    parqueaderos: [],
    loading: true, 
    error: '',
  });
  //const [parqueaderos, setParqueaderos] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      dispatch({ type:'FETCH_REQUEST' });
      try {
        const result = await axios.get('http://localhost:3000/api/parqueaderos');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch(err){
        dispatch({ type: 'FETCH_FAIL', payload: err.message });

      }
      
      //setParqueaderos(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Parqueaderos</h1>
      <div className="parqueaderos">
        {parqueaderos.map((parqueadero) => (
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