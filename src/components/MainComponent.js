import React from 'react'
// import HeaderComponent from './HeaderComponent'
import { fetchData } from '../redux/ActionCreater' ;
import { connect } from 'react-redux';
import CardsComponent from './CardsComponent'

const mapStateToProps = state => {
    return {
      data: state.statesdata,
      loaded:state.isLoading
    }
}
const mapDispatchToProps = dispatch => ({
    fetchData : () => {dispatch(fetchData())}
})

class MainComponent extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchData()
    }

    render(){
        if(!this.props.loaded){
            return (
                <div>
                    <h1>Main Component</h1>
                    {console.log(this.props.data)}
                    <h2>Last Updated : {this.props.data.lastUpdated}</h2>
                    <CardsComponent data={this.props.data.data} />
                </div>
            )
        }
        else{
            return(
                <h1>Data is getting loaded</h1>
            )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainComponent) ;
