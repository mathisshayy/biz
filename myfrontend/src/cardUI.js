import React, {Component,useState, useEffect} from 'react';
import "./index.css";
import Tippy from '@tippyjs/react';
import './cardStyle.css'
import {BlockPicker} from 'react-color';
import Axios from 'axios'



export default class Cards extends Component {
  constructor(){
    super();
    this.state = {
      newcard: "Create a Biz"
    };
  }
  render(){
    return (
        <div className='info'>
          <button>Create New Card</button>
          <h1>New Biz Card: {this.state.newcard}</h1>
          <Cards />
        </div>
      );
  }
}

const Card = function () {
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[title, setTitle]= useState("");
    const[company, setCompany]= useState("");
    
    const[biz_add, setBizAddress]= useState("");
    const[biz_number, setBizNumber]= useState("");
    
    const [color, setColor] = useState('#ccc')

    const [cardList, setCardList] = useState([])

    useEffect(() =>{
        Axios.get ("http://localhost:5000/api.get").then((response) =>{
         setCardList(response.data) 
        });
    })

    const saveCard =() =>{
        Axios.post("http://locoalhost:5000/api/insert", {
            name: name,
            email: email,
            title: title,
            company: company,
            biz_add: biz_add,
            biz_number: biz_number,
    }).then(() => {
        alert("successful insert");
    })


    }
    return(
        
     <div className="form">
         <div className='' style={{ backgroundColor: color, textAlign: 'center', }}>
            <div className="overflow">
                <img src="{getImage}" alt=""/>
            </div>

            
            
            <div className='card-body text-dark'>

                <input 
                type="text" 
                placeholder="Name"
                name="name"
                onChange={(e) => {
                    setName(e.target.value);
                }}/>
                
                 <input 
                type="text" 
                placeholder="Business Email"
                name="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                
                
                <input 
                type="text" 
                placeholder="Title"
                name="title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}/>


                <input 
                type="text" 
                placeholder="Company"
                name="company"
                onChange={(e) => {
                    setCompany(e.target.value);
                }}/>

                
               
                
                
                <input 
                type="text" 
                placeholder="Business Address"
                name="biz-add"
                onChange={(e) => {
                    setBizAddress(e.target.value);
                }}/>

                
                <input 
                type="text" 
                placeholder="Business Number"
                name="biz_number"
                onChange={(e) => {
                    setBizNumber(e.target.value);
                }}/>

                

               
              
                <p className='card-text text-secondary'>
                    
                </p>

            </div>



        </div>
           
            <Tippy interactive={true} placement={'bottom'} content={
          <BlockPicker
            color={color}
            onChangeComplete={color => setColor(color.hex)}
          />
        }>
            
          <button className='ref-button'>Change Background Color</button>
          

        </Tippy>

        <button onClick={saveCard} className='save'>Save</button>
        
        {cardList.map((val) => {
            return <h1> {val.name}</h1>
        })}
        </div>

   
       
    );

};


