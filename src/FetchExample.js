import React from 'react';

class FetchExample extends React.Component {
  constructor(props) {
    super(props);

    this.mydata = [];
    this.getSeries = this.getSeries.bind(this); //con esto forzamos que this sea FetchExample. Sin esto, dentro de getSeries no podría acceder a this.myData porque this seria el métido onClick.
  }
  getSeries () {
    fetch('http://api.tvmaze.com/search/shows?q=walking')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.mydata = data;
        this.forceUpdate(); //obliga a ejecutar render otra ver porque la primera vez mydata está vacío 
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getSeries}></button>
        <ul>
          {this.mydata.map(serie => {
            return (
              <li>
                {serie.show.name}
              </li> 
            );
          })}
        </ul>
      </div>
     );
    }
  }

export default FetchExample;