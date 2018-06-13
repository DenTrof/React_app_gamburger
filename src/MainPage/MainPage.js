/*
 *
 * Home page with main logic
 *
 */
import React, { Component } from 'react';
import './MainPage.css';
import axios from 'axios';



export class MainPage extends Component {

    state = {
        items: [],
        selected: ''
    };

    //--------------------------- Get data after page rendering -------------------------------------//
    componentDidMount() {
        axios.get(`http://www.mocky.io/v2/5b2143ff300000e3275c741a`)
            .then(res => {
                const items = res.data;
                this.setState({ items: items });
                //console.log(this.state.items);
            })
    }

    render() {
        const{items} = this.state

    //------------------------------- Category selected ------------------------------------------//
        const selectedCat = items.filter((cat) =>
            cat.category === this.state.selected
        );

        return (
            <div>
             <section>
                 <div className="img-list-container centerContent">
                     <select id="selectForm" className="select-form" onChange={() =>this.selectValue()} name="select">
                         <option disabled selected value="">Please select </option>
                         { items.map(item => <option value={item.category}
                                                     key={item.id} >{item.category}</option>)}
                     </select>
                     <button className="select-form"
                             onClick={() => this.handleCategory(selectedCat)}> APPLY
                     </button>
                     <button className="select-form"
                             onClick={() => this.handleReset()}> RESET
                     </button>
                 </div>
             </section>
                <section>
                    <div className="img-list-container">
                        <ul className="img-list">
                            { items.map(item =>
                                <li key={item.id} >
                                    <div className='img-home'
                                         style={{ backgroundImage: `url(${item .backgroundURL})`}}>
                                    </div>
                                    <div className="navigation centerContent">
                                        <nav className="centerContent ">
                                            <button onClick={() => this.handleSort(item)}>
                                                <b>ADD TO FAVORITES</b>
                                            </button>
                                        </nav>
                                    </div>
                                    <div className='item-name'>{item.name}</div>
                                    <div className='item-name'>Price: {item.price}</div>
                                    <div className='item-name'>Category: {item.category}</div>
                                    {/*<div className='item-description'>{item.description}</div>*/}
                                </li>
                            )}
                        </ul>
                    </div>
                </section>

                <footer>
                    <div className="centerContent">
                        <p>® FOOTER</p>
                    </div>
                </footer>
            </div>
        );
    }


    //----------------------------------- Set item in localStorige ---------------------------------//
    handleSort(item){
        const dataSort = JSON.stringify(item)
        localStorage.setItem(`${item.id}`, dataSort)
    }


    //----------------------------------- Get name of selected item ------------------------------//
    selectValue(){
        const  selectData = document.getElementById("selectForm");
        const strForm = selectData.options[selectData.selectedIndex].value;
        this.setState({ selected: strForm });
    }

    //-------------------------------- Set selected items in component stor ---------------------//
    handleCategory(selectedCat){
        this.setState({ items: selectedCat });
    }

    //-------------------------------- Reload list item -----------------------------------------//
    handleReset(){
        window.location.reload()
    }

}

export default MainPage;
