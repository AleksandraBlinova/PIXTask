import React, {useRef} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import './ColumnDiagram.css'



const ColumnDiagram = (props: any) => {
  
  const options: Highcharts.Options = {
    title: {
        text: props.currentOption,
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
            categories: props.data.products.map(i=>i.title)
        },
    series: [{
      type: 'column',
      name: 'Рейтинг',
      data: props.data.products.map(i=>i.rating)
    }]
  };
  console.log(props.data.products.map(i=>i.rating))
  return (
    <div className='column-diagram-container'>  
       <HighchartsReact
      highcharts={Highcharts}
      options={options}
     
    />
    </div>
  )
}

export default ColumnDiagram