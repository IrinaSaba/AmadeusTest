import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/cards-actions';
import s from './Filter.module.scss';

const Filter = ({handleChangeOption, option})  => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.cards.filter);
  
   return (
     <>
     <div>
     <label htmlFor="" name="filter" > Sort by : </label>
      <select className={s.selectSearch} name="" value={option}  onChange={handleChangeOption}>
        <option value='default'>---</option>
        <option value='name'>name</option>
        <option value='target'>target</option>
      </select>
     </div>
      <input 
          className={s.inputSearch}
          name="filter"
          type="text" 
          placeholder="enter your search" 
          value={filter}
          onChange={(event) => dispatch(changeFilter(event))}/>
      </>
   );
 };
 

 export default Filter;