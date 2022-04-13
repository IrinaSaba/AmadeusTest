import { useDispatch, useSelector } from "react-redux";

const filterCards = (items, filter) => {
  return items.filter(cards =>
    cards.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const filterCardsTarget = (items, filter) => {
  return items.filter(cards =>
    cards.target.toLowerCase().includes(filter.toLowerCase())
  );
};

const Cards = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cards.items);
  const filter = useSelector(state => state.cards.filter);
  const newItems = filterCards(items, filter);

   return newItems.length ? (
    <ul>
       {newItems.map(({ name, id, target, bodyPart, equipment, gifUrl }) => (
            <li key={id}>
              <p> Name: {name}</p>
              <p>Target: {target}</p>
              <p>Body part: {bodyPart}</p>
              <p>Equipment: {equipment}</p>
              <img src={gifUrl} alt={name}/>
            </li>
       ))}
    </ul> ) 
    : null
       }
 export default Cards;
 