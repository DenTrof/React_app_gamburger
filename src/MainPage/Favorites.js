/*
 *
 * Page with favorites categories
 *
 */
import React, { Component } from 'react';
import './MainPage.css';


class MainPage extends Component {

    render() {

    //------------------------- get data from localStorige  ----------------------------------//
        const dataSort = []
        for (let i = 0, len = localStorage.length; i < len; ++i) {
            dataSort.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
    //------------------------- rendering sorted items ---------------------------------------//
        return (
            <div >
                <section>
                    <div className="navigation centerContent">
                        <nav className="centerContent ">
                            <button style={{marginTop:'20px'}}
                                    onClick={() => this.allRemove()}><b>DELATE ALL ITEMS</b>
                            </button>
                        </nav>
                    </div>
                    <div className="img-list-container">
                        <ul className="img-list">
                            { dataSort.map(item =>
                                <div key={item.id}>
                                    <div className='img-home'
                                         style={{ backgroundImage: `url(${item .backgroundURL})`}}>
                                    </div>
                                    <div className="navigation centerContent">
                                        <nav className="centerContent ">
                                            <button onClick={() => this.dataRemove(item)}><b>DELATE</b>
                                            </button>
                                        </nav>
                                    </div>
                                    <div className='item-name'>{item.name}</div>
                                    <div className='item-description'>{item.description}</div>
                                </div>
                            )}
                        </ul>
                    </div>
                </section>

                <footer>
                    <div className="centerContent">
                        <p><b>® FOOTER</b></p>
                    </div>
                </footer>
            </div>
        );
    }


    //------------------------------- Remove sorted item -----------------------------------//
    dataRemove(item){
        this.forceUpdate()
       localStorage.removeItem(`${item.id}`);
        }


    //-------------------------------   Remove All item ------------------------------------//
    allRemove(){
    this.forceUpdate()
       localStorage.clear()
    }
}

export default MainPage;
