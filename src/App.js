import CardsList from './Components/CardsList/CardsList.jsx'
import Filter from './Components/Filter/Filter.jsx';
import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCards } from './redux/cards-operations';

export default function App() {
  const dispatch = useDispatch();
  const [option, setOption] = useState('');

  const handleChangeOption = event => {
    setOption(event.target.value);
  }
  
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div>
      <h2>Cards filter</h2>
      <Filter 
      option={option}
      handleChangeOption={handleChangeOption}
      />
      <CardsList option={option}/>
    </div>
  );
}
