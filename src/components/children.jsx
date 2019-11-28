import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Children extends Component {
    /* static propTypes = {
        mensaje: PropTypes.string
    } */
    
    render(){
        console.log(this.props.children)
        return <section>
            {this.props.mensaje}
            {this.props.children[1]}
            <h2>Subtitulo</h2>
            
            <h3>Subtitulo 3</h3>
            {this.props.children[0]}
            <h4>Subtitulo 4</h4>
        </section>
    }
}

Children.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Children