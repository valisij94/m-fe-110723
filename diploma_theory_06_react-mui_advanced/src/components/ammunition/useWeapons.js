import { useSelector } from "react-redux";

export default function useWeapons() {

  const {weapons, filters} = useSelector(state => state.ammunitions);

  const filteredWeapons = weapons.filter( weapon => {
    return (
      (!filters.category || (weapon.category === filters.category)) &&
      (!filters.minWeight || (weapon.weight >= filters.minWeight)) &&
      (!filters.maxWeight || (weapon.weight <= filters.maxWeight))
    );
  });

  return filteredWeapons;
}