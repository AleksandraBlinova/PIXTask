import React, {useRef} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import './ColumnDiagram.css'



const ColumnDiagram = (props) => {
  
 
  const options: Highcharts.Options = {
   
    title: {
       text: props.currentCategory,
    },
    yAxis: {
      title: {
        text: 'Рейтинг' 
            },
          
        },
    
    xAxis: {
      title: {
        text: 'Модель' 
            },
            categories: props.data?.products.filter(i=>i.category==props.currentCategory).map(j=>j.title)
        },
    series: [{
      type: 'column',
      name: 'Рейтинг',
      data: props.data?.products.filter(i=>i.category==props.currentCategory).map(k=>k.rating) 
    }]
  };
  

  return (
     props.data!=undefined && props.isLoading==false ? <div className='column-diagram-container'>  
    <HighchartsReact
   highcharts={Highcharts}
   options={options}
  
 />
 </div> : <></>
   
  )
}

export default ColumnDiagram