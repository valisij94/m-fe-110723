
export default function SimpleList() {
    const dataSet = ['Dwarwes', 'Hobbits', 'Orcs'];

    return (
      <ul>
        {
          dataSet.map( elem => <li key={elem}>{elem}</li>)
        }
      </ul>
    )
}