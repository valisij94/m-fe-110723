
import { useDispatch, useSelector } from 'react-redux';
import classes from './AmmunitionFilter.module.css';
import { useState } from 'react';
import { applyFilters } from '../../store/slices/ammunitionSlice';

export default function AmmunitionFilter() {

  const categories = useSelector(state => {
    return state.ammunitions.weapons.reduce( (acc, val) => {
      if (acc.indexOf(val.category) < 0) {
        acc.push(val.category);
      }
      return acc;
    }, []);
  });

  const [filterState, setFilterState] = useState({});

  const dispatch = useDispatch();

  return (
    <div className={classes.ammoFilterContainer}>
      <div>
        <label htmlFor="ammoFilterByCategory">Choose your weapon category</label>
        <select
          id="ammoFilterByCategory"
          value={ filterState.category || '' }
          onChange={
            (e) => { setFilterState( old => ({...old, category: e.target.value})) }
          }
        >
          {
            categories.map( category => (<option key={category} value={category}>{category}</option> ) )
          }
        </select>
      </div>

      <div>
        <label htmlFor="ammoMinWeight">Min weight</label>
        <input
          id="ammoMinWeight"
          type="text"
          value={filterState.minWeight || ''}
          onChange={(e) => { setFilterState( old => ({...old, minWeight: +e.target.value}))}}
        ></input>

        <label htmlFor="ammoMaxWeight">Max weight</label>
        <input id="ammoMaxWeight" type="text"
          value={filterState.maxWeight || ''}
          onChange={(e) => { setFilterState( old => ({...old, maxWeight: +e.target.value}))}}
        ></input>
      </div>

      <div>
        <label htmlFor="ammoSort">Sort by:</label>
        <select id="ammoSort">
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <button
        className={classes.applyFiltersBtn}
        id="ammoFiltersApply"
        onClick={() => {
          dispatch( applyFilters(filterState) );
        }}
      >Apply Filters</button>
    </div>
  );
}