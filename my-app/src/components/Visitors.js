import React from 'react';
import Papa from 'papaparse';
//import Fairway  from 'fairway';
import Chart from 'react-charts'


class Visitors extends React.Component{

    constructor(){

        super();

        this.state = {

            data: []
        }
        this.data = [];

        this.updateData = this.updateData.bind(this);
    }

  componentWillMount() {
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
   
    //alert( JSON.stringify(result.data));
    //alert(Object.keys(result.data).length);
   
    this.data = data; 

  }

    render(){

        if(!this.state.data.length) {
            return null;
        }
        return (
            <div> Hallo
                <h3>Graph 01</h3>
                <div className="bottom-right-svg">
                    
                <Chart data={this.data} />
                    
                </div>
            </div>
        )
    }
};


//ReactDOM.render(<Visitors/>,document.getElementById("top-line-chart")); 

export default Visitors;