import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LinearProgress from '@mui/material/LinearProgress';

import {useGetProductsQuery} from '../ApiRequest/ApiRequest'

import { CustomInput } from './CustomInput';
import {names} from './DropdownData'
import ColumnDiagram from './ColumnDiagram/ColumnDiagram';

import './DropdownComponent.css'

export default function DropdownComponent() {

   const [currentCategory, setCurrentCategory] = React.useState<string>('');

   const handleChange = (event: SelectChangeEvent<typeof currentCategory>) => {
    const {
      target: { value },
    } = event;
    setCurrentCategory(
       value 
    );
  };
const {data, isLoading, error} = useGetProductsQuery(6);

  return (
    <div>
    
      <FormControl sx={{width: 300}} variant="standard">
        <InputLabel id="demo-customized-select-label" >Выберите</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={currentCategory}
          onChange={handleChange}
          input={<CustomInput />}
        >
           {names.map((name) => (
            <MenuItem
              key={name.id}
              value={name.category}
            >
              {name.title}
            </MenuItem>
          ))}
          
        </Select>
      </FormControl>
     <div className='loading-container'>  { (isLoading) ?  
      <LinearProgress />
     : <p></p> }</div>
    
      <ColumnDiagram currentCategory={currentCategory} data={data} isLoading={isLoading}/>
    </div>
  );
}
