import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './AmmunitionList.module.css';
import { addWeapon } from '../../store/slices/participantsSlice';
import AmmunitionFilter from './AmmunitionFilter';
import useWeapons from './useWeapons';


export default function AmmunitionList() {

  const {dwarfName} = useParams();

  const weapons = useWeapons();

  const dispatch = useDispatch();

  return (
    <>
      <AmmunitionFilter />
      <div className={classes.ammoContainer}>
        {
          weapons.map( ammo => {
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
    </>
  );
}