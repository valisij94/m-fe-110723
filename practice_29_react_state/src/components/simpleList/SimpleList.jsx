
import { SimpleParagraph } from '../simpleParagraph/SimpleParagraph';
import classes from './SimpleList.module.css';

export default function SimpleList( {listHeaderText, listSource} ) {

    return (
      <>
        {
          !!listHeaderText && <h4 className={classes.listHeader}>{listHeaderText}</h4>
        }
        {
          (listSource && listSource.length > 0) ? (
            <ul className={classes.list}>
              {
                listSource.map( elem => <li className={classes.listItem} key={elem}>
                  <SimpleParagraph
                    textContent={elem}
                  /></li>)
              }
            </ul>
          ) :
          <p>Empty dataSource!</p>
        }

      </>
    )
}