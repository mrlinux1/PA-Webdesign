import React from 'react';
import Papa from 'papaparse';
//import Fairway  from 'fairway';
import Chart from 'react-charts'

class Drinks extends React.Component{

    constructor(){

        super();

        this.state = {

            data: []
        }
        this.data = [];
        this.updateData = this.updateData.bind(this);
    }




    
  UNSAFE_componentWillMount() {
        Papa.parse(`${process.env.PUBLIC_URL}/drinks.csv`, {
          header: true,
          download: true,
          skipEmptyLines: true,
          preview: 0,
          complete: this.updateData
        });
  }

  updateData(result) {
    const data = result.data;
   
    this.setState({data: {data}});
  }

    render(){

        if(!this.state.data.length) {
            return null;
        }

  // Use any data object you want
  const originalData = React.useMemo(
    () => ({
      axis: [1, 2, 3],
      lines: [
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
        { data: [{ value: 10 }, { value: 10 }, { value: 10 }] },
      ],
    }),
    []
  )

  // Make data.lines represent the different series
  const data = React.useMemo(data => originalData.lines, [originalData])

  // Use data.lines[n].data to represent the different datums for each series
  const getDatums = React.useCallback(series => series.data, [])

  // Use the original data object and the datum index to reference the datum's primary value.
  const getPrimary = React.useCallback(
    (datum, i, series, seriesIndex, data) => originalData.axis[i],
    []
  )

  const axes = React.useMemo(
    () => [;-
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
    )

  // Use data.lines[n].data[n].value as each datums secondary value
  const getSecondary = React.useCallback(datum => datum.value, [])

        return (
            <div
            style={{
              width: '400px',
              height: '300px',
            }}
          >
            <Chart
              data={data}
              axis={axes}
              getDatums={getDatums}
              getPrimary={getPrimary}
              getSecondary={getSecondary}
            />
          </div>
        )
    }
};


//ReactDOM.render(<Visitors/>,document.getElementById("top-line-chart")); 
// <Chart data={this.state.data.data} series={{type: 'bar'}} />
export default Drinks;