import React,{useState} from 'react'
import './index.css'

const Form = () => {

    // const [amount, setAmount] = useState('');
    // const [from, setFrom] = useState('');
    // const [to, setTo] = useState('');


const sendForm = (e) =>{
    e.preventDefault();

}

    return (
        <section className="login">

            {/* <div className="main"> */}

            
            <div className="container">   

                <div className="titel">
                    <h1>Latest News</h1>
                    <label>Covering March & April 2015</label>
                </div>
            
                <div className="news">        

                    <div className="img">
                        <img src="https://www.lendacademy.com/wp-content/uploads/2015/05/Marketplace-Lending-News.jpg" width="100px" height="100px"/>
                    </div>
                    <div className="info">

                        <label>fecha</label>
                        <h3>what happened in tha?</h3>
                        <p>hola mundo noticias</p>
                        <div className="btnMore">
                            <input type="submit" id="btnSubmit" value=">"/> Find out more
                        </div>
                    </div>
                                
                </div>
                
                <div className="news">        

                    <div className="img">
                        <img src="https://www.lendacademy.com/wp-content/uploads/2015/05/Marketplace-Lending-News.jpg" width="100px" height="100px"/>
                    </div>
                    <div className="info">

                        <label>fecha</label>
                        <h3>what happened in tha?</h3>
                        <p>hola mundo noticias</p>
                        <div className="btnMore">
                            <input type="submit" id="btnSubmit" value=">"/> Find out more
                        </div>
                    </div>
                                
                </div>
                  

            </div>
            {/* </div> */}
            

                {/* <div>form data:{JSON.stringify({name,email,to,comment})}</div> */}

        </section>
    )
}


export default Form;
