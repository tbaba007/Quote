

const Quotes=(props)=>{

    const deleteQuote=(quote)=>{
        return props.delete(quote)
    }
    return (
          <div>
              <table>
                  <thead>
                  </thead>
                  <tbody>
                      {props.quotes.length>0?props.quotes.map((item,index)=>{
                        return(<tr>
                                <td key={index}>
                                    {item.quote}
                               </td>
                               <td><button className="delete-button"
                                onClick={()=>deleteQuote(item.quote)}
                                >Delete</button></td>
                        </tr>)
                       
                      }):<td>No Quote(s) Found</td>}
                  </tbody>
              </table>
          </div>  
    )
}

export default Quotes