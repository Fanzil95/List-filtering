import React, { useEffect, useMemo, useState } from 'react';
import CheckBoxes from './components/CheckBoxes';
import Table from './components/Table';


function App() {
  const [data, setData] = useState([])
  const [checkboxes, setCheckboxes] = useState([
    {id:1, userId:2, userName: 'Пользователь № 2', completed:false},
    {id:2,userId:4, userName: 'Пользователь № 4', completed:false},
    {id:3, userId:8,userName: 'Пользователь № 8', completed:false},
  ])
  const [searchString, setSearchString] = useState('')
  const [checkboxFiltering, setCheckboxfiltering] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
  },[])
  
  function toggleAndCheckboxFilterin (id){
    setCheckboxes(checkboxes.map((checkbox)=>{
      if(checkbox.id===id){
        checkbox.completed = !checkbox.completed
        checkbox.completed?setCheckboxfiltering(checkboxFiltering.concat(data.filter(item=>item.userId===checkbox.userId))):setCheckboxfiltering(checkboxFiltering.filter(item=>item.userId!==checkbox.userId))
      }
      return checkbox
    }))
  }
  
  function filterReset () {
    setSearchString('')
    setCheckboxfiltering([])
    setCheckboxes(checkboxes.map((checkbox)=>{
      checkbox.completed=false
      return checkbox
    }))
  }
const searchAndCheckboxFiltering = useMemo(()=>{
    return checkboxFiltering.length?checkboxFiltering.filter(item=>item.title.includes(searchString)):data.filter(item=>item.title.includes(searchString))
  }, [data, searchString, checkboxFiltering])


  return (
    <div style={{margin:'10px'}} >
      <CheckBoxes 
      checkboxes={checkboxes} 
      toggleAndFiltering={toggleAndCheckboxFilterin} 
      filterReset={filterReset}
      searchString={searchString}
      setSearchString={setSearchString}
      />
      {data.length?<Table data={searchAndCheckboxFiltering}/> : <h3>Загрузка данных...</h3>}
    </div>
  );
}

export default App;
