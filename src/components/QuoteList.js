import React,{useState,useEffect} from 'react';
import {getAllQuotes} from '../service/Quotes.service';
import Quotes from './Quotes';
import '../assets/css/Quotes.css'
const appURL=process.env.REACT_APP_API_URL;
const QuoteList=()=>{
    const [state,setState]=useState({
        quotesArray:[]
    })
    useEffect(()=>{
        const fetchAllQuotes=(appURL)=>{
            return getAllQuotes(appURL)
            .then(response=>{
                setState(
                    state=>({
                        ...state,quotesArray:[...state.quotesArray,response]
                    })
                )
            }).catch(err=>console.log(err.message))
        };fetchAllQuotes(appURL)
    },[])

    const fetchQuote=()=>{
        getAllQuotes(appURL)
        .then(response=>{
            setState({
                ...state,quotesArray:[...state.quotesArray,response]
            })
        }).catch(err=>console.log(err.message))
    }

    const deleteQuote=(quote)=>{
        let currentArray=[...state.quotesArray]
        state.quotesArray.length=0;
        if(window.confirm('Are you sure you want to delete?'))
        {
            for(let i=0;i<currentArray.length;i++)
            {
                if(currentArray[i].quote===quote)
                {
                    currentArray.splice(i,1)
                    alert('Quote Deleted Successfully')
                    break;
                }
                 
            }
        }
        setState({
            ...state,quotesArray:currentArray
        })
        return false;
    }

    const deleteAllQuotes=()=>{
       
        if(window.confirm('Are you sure you want to delete all Quotes?'))
        {
            setState({
                ...state,quotesArray:[]
            })
            alert('Quotes deleted successfully!')
        }
        return false;
    }
    return (
        <div>
            <div>
                {state.quotesArray.length>1?
             <button onClick={deleteAllQuotes} className="delete-button">Delete All</button>
             :null   
            }
            <button onClick={fetchQuote} className="fetch-button">Fetch Quote</button>
            </div>
            <Quotes quotes={state.quotesArray} delete={deleteQuote}/>
        </div>
    )
}

export default QuoteList