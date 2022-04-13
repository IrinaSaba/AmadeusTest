import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/cards-actions'

const Filter = ({handleChangeOption, option})  => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.cards.filter);
  
   return (
     <>
      <label htmlFor="" name="filter" > Sort by : </label>
      <select name="" value={option}  onChange={handleChangeOption}>
        <option value='default'>---</option>
        <option value='name'>name</option>
        <option value='target'>target</option>
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