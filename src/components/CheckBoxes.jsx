import React from 'react';

const CheckBoxes = ({checkboxes, toggleAndFiltering, filterReset, setSearchString }) => {
    return (
        <div>
            {checkboxes.map(checkbox=>
                <label key={checkbox.id} htmlFor="">
                    <input 
                    type="checkbox" 
                    checked={checkbox.completed}
                    onClick={()=>{toggleAndFiltering(checkbox.id)}} />
                    {checkbox.userName}</label>
                )}
                <div>
                <input 
                type="text" 
                onChange={(e)=>{setSearchString(e.target.value)}}
                placeholder='Поиск по названию'
                 />
                </div>
                <button onClick={()=>{filterReset()}}>Сброс</button>
          
           
        </div>
    );
}
 
export default CheckBoxes;