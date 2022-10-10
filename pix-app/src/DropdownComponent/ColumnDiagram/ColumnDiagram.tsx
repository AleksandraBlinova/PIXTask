import React, {useRef} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

import './ColumnDiagram.css'



const ColumnDiagram = (props: any) => {
  
  const options: Highcharts.Options = {
    title: {
        text: props.currentOption
    },
  
    series: [{
      type: 'column',
        data: [1, 2, 3]
    }]
  };

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