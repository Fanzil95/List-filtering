import React from 'react';

const TodoList = ({data}) => {
    return (
    data.map(item=>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.userId}</td>

        </tr>)
    );
}
 
export default TodoList;