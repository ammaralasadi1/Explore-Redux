import React, {Component} from 'react';
import {connect} from 'react-redux';


 class NewsList extends Component {
   renderNews(response) {

     const results = response.response.results;

    //  console.log(results);
     // mapping the list array and then map the main object and change it
     //to an array so we can use it with React Sparklines. it only take arrays.
      return (
       <div key='hi'>
            {results.map(function(result, index){
                   return <h6 key={ index }>
                   <a href={result.webUrl}>{result.webTitle}</a>
                   </h6>;

                 })}
      </div>
    )
      }
   render(){
    return(
      <div className='div div-hover'>

            <h1>News</h1>
            {this.props.news.map(this.renderNews)}

      </div>
    );
  }
}

// function mapDispatchToProps (state) {
//   return {weather: state.weather};
//   // We assigned our weather reducer to the combined key.
//   //
// }

// we can do it in es6 and make it cleaner because we are pulling one property.

function mapStateToProps({news}) {  //similar to const weathe = state.weather
  return {news}; //{weather} === {weather:weather}
}
//we need to connect the component with mapDispatchToProps instead of the default so we can have access this.props.weather
export default connect(mapStateToProps)(NewsList);
