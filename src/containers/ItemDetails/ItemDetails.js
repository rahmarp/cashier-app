import React from 'react'
import { useSelector } from 'react-redux';
import TabMenu from '../../components/TabMenu/TabMenu';
import Nasi from '../../assets/nasi.jpeg';

const ItemDetails = (props) => {
    const id = parseInt(props.match.params.id)
    const menu = useSelector(state => state.item.menu)
    
    const item = Object.keys(menu).filter(obj => menu[obj].id === id)
                .map(obj => ({
                  "id": menu[obj].id,
                  "menu":menu[obj].menu,
                  "description": menu[obj].description,
                  "price": menu[obj].price
              }))
   console.log(item)
    const listItem = Object.keys( item )
      .map( (catKey, index) => {
        return (
           item[catKey].menu
        )
      })
                
    // console.log(detail)
    return (
        <div>
          <TabMenu items={item}/>
            <h1>
               {listItem}
            </h1>
        </div>
    )
}
export default ItemDetails