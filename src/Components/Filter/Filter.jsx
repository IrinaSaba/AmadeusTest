import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/cards-actions'

const Filter = ()  => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.cards.filter);
  
   return (
     <>
      <label htmlFor="" name="filter"> Sort by : </label>
      <select name="filter">
          <option value={filter}>name</option>
          <option value={filter}>target</option>
        </select>
        <input  
          name="filter"
          type="text"   
          value={filter}
          onChange={(event) => dispatch(changeFilter(event))}/>
      </>
   );
 };
 

 export default Filter;