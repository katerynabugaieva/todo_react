import React, {Component} from 'react'
import './item-add-form.css';

export default class ItemAddForm extends Component {
    render(){
   //  const { onAdded } = this.props;
        return (
            <div className='item-add-form'>
                <input placeholder='Add element' type='text'/>
               <button
               type='button'
               className="btn btn-outline-secondary btn-sm float-right"
               onClick={() => this.props.onItemAdded('Hello world')}>
               <i className="fa fa-plus"/>
               Add item
               </button>
            </div>
        )
    }
}