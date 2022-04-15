import { useDispatch, useSelector } from "react-redux";
import s from './CardsList.module.scss';

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

const Cards = ({option}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cards.items);
  const filter = useSelector(state => state.cards.filter);
  const newItems = filterCards(items, filter);
  const newItemsTarget = filterCardsTarget(items, filter);

   return option === 'name' ? (
    <ul className={s.cards}>
       {newItems.map(({ name, id, target, bodyPart, equipment, gifUrl }) => (
            <li className={s.card} key={id}>
              <div className={s.cardInfoSpetial}>
                <p className={s.cardInfo}> Name: {name}</p>
                <p className={s.cardInfo}>Target: {target}</p>
                <p className={s.cardInfo}>Body part: {bodyPart}</p>
                <p className={s.cardInfo}>Equipment: {equipment}</p>
              </div>
              <img src={gifUrl} alt={name} width="250" height="260"></img>
            </li>
       ))}
    </ul> )
    : 
    <ul className={s.cards}>
    {newItemsTarget.map(({ name, id, target, bodyPart, equipment, gifUrl }) => (
         <li className={s.card} key={id}>
           <div className={s.cardInfoSpetial}>
             <p className={s.cardInfo}> Name: {name}</p>
             <p className={s.cardInfo}>Target: {target}</p>
             <p className={s.cardInfo}>Body part: {bodyPart}</p>
             <p className={s.cardInfo}>Equipment: {equipment}</p>
           </div>
           <img src={gifUrl} alt={name} width="250" height="260"></img>
         </li>
    ))}
 </ul>
       }
 export default Cards;
 