import { useDispatch, useSelector } from "react-redux";

const filterContact = (items, filter) => {
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const Cards = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cards.items);
  const filter = useSelector(state => state.cards.filter);
  const newItems = filterContact(items, filter);
  console.log(items)
   return  newItems.length ? (
    <ul>
       {newItems.map(({ name, id, target, bodyPart, equipment, gifUrl }) => (
            <li key={id}>
              <p> Name: {name}</p>
              <p>Target: {target}</p>
              <p>Body part: {bodyPart}</p>
              <p>Equipment: {equipment}</p>
              <p>Gif URL: {gifUrl}</p>
            </li>
       ))}
    </ul>
   ) : null;
 };
 
 export default Cards;
 