import CardsList from './Components/CardsList/CardsList.jsx'
import Filter from './Components/Filter/Filter.jsx';
import s from './App.module.scss';
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
    <div className={s.mainBody}>
      <header className={s.headerFilter}>
        <h1 classname={s.headerFilterTitle}>Cards filter</h1>
        <Filter 
        option={option}
        handleChangeOption={handleChangeOption}
        />
      </header>
      <CardsList option={option}/>
    </div>
  );
}
