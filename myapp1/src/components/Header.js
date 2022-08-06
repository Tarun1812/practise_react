import React,{Component, Fragment} from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            title: "React App",
            keyword:"User Text"
        }
    }
    handleChange = (event) => {
        console.log(event)
        this.setState({keyword:event.target.value ? event.target.value:'User Text'})
    }
    render () {
        return (
           <Fragment>
                <header>
                    <div>{this.state.title}</div>
                </header>
           </Fragment>
        )
    }
}
export default Header;