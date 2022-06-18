import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries,LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../component';
const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div>

    
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
};

export default Area;
