import React from 'react';
import TodoList from './TodoList';

const List  = ({data}) => {
    return (
       <div>
           <table>
            <tr>
                <td><h3>№</h3></td>
                <td><h3>Название</h3></td>
                <td><h3>Пользователь</h3></td>
            </tr>
            <TodoList data={data}/> 
           </table>
           {data.length?'':<h3>Ничего не найдено</h3>}
       </div>
    );
}
 
export default List;