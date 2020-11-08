import React,{useState} from 'react'
import './index.css'
import {data} from '../../constants/data'

const Form = () => {

const sendForm = (e) =>{
    e.preventDefault();

}

    return (
        <section className="login">
        
            <div className="container">   

                <div className="titel">
                    <h1>Latest News</h1>
                    <label>Covering March & April 2015</label>
                </div>
            
            {data.map( news => ( 

                <div className="news">        

                    <div className="img">
                        <img src={news.linkImg} width="100px" height="100px"/>
                    </div>
                    <div className="info">

                        <label>{news.date}</label>
                        <h3>{news.title}</h3>
                        <p>{news.text}</p>
                        <div className="btnMore">
                            <input type="submit" id="btnSubmit" value=">"/> Find out more
                        </div>
                    </div>
                                
                </div>
                
            ))}    

            </div>
            

                {/* <div>form data:{JSON.stringify({name,email,to,comment})}</div> */}

        </section>
    )
}


export default Form;
