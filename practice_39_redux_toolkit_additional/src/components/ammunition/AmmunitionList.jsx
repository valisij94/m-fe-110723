import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './AmmunitionList.module.css';
import { addWeapon } from '../../store/slices/participantsSlice';

const ammos = [
  {
    id: 1,
    name: 'Axe',
    description: 'Double axe. With him you are not afraid of any enemy!',
    weight: 9.5
  },
  {
    id: 2,
    name: 'Mitril Armour',
    description: 'A masterpiece of blacksmithing from Moria. Will protect you from an ax, arrow, and anything else',
    weight: 1.2
  },
  {
    id: 3,
    name: 'WarHammer',
    description: 'Not a game, not a tool - just a WAR HAMMER!',
    weight: 11.3
  },
  {
    id: 4,
    name: 'Orc Crossbow',
    description: 'Hard crossbow to deal with all types of armours',
    weight: 5.4
  },
  {
    id: 5,
    name: 'Elves Bow',
    description: 'Not the best choice if you are not an elve.. But you can try!',
    weight: 3.1
  },
  {
    id: 6,
    name: 'Spear',
    description: 'Nice choice to deal with enemies on the horses',
    weight: 7
  },
  {
    id: 7,
    name: 'Iron Shield',
    description: 'Should save your liver (bot it does not ensured...)',
    weight: 6.4
  }
];

export default function AmmunitionList() {

  const {dwarfName} = useParams();
  const dispatch = useDispatch();

  return (
    <div className={classes.ammoContainer}>
      {
        ammos.map( ammo => {
          return (
            <div key={ammo.id} className={classes.ammoCard}>
              <h3 className={classes.ammoName}>{ammo.name}</h3>
              <p>{ammo.description}</p>
              <div className={classes.ammoActionsContainer}>
                <button
                  className={`${classes.btn}
                  ${classes.ammoAddBtn}`}
                  onClick={() => {
                    dispatch( addWeapon( {
                      dwarfName: dwarfName,
                      weapon: ammo
                    } ) )
                  }}
                >Add</button>
                <button className={`${classes.btn} ${classes.ammoDropBtn}`}>Drop</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}