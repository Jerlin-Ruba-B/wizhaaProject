
import './index.css'

const EachCard = (props) => {
    const {details,isGrid,isList,searchVal}= props
    
    

    const varientsDetails = {
        v1:details.varients[0].v1,
        v2:details.varients[1].v2,
        v3:details.varients[2].v3,
    }
    let isIncludes1,isIncludes2,isIncludes3;

    const emptyString = searchVal === ''

    if (emptyString === true){
        isIncludes1 = false
        isIncludes2 = false
        isIncludes3 = false
    }else {
        isIncludes1 = varientsDetails.v1.toLowerCase().includes(searchVal.toLowerCase())
        isIncludes2 = varientsDetails.v2.toLowerCase().includes(searchVal.toLowerCase())
        isIncludes3 = varientsDetails.v3.toLowerCase().includes(searchVal.toLowerCase())
    }

    
    
    

    return (
    <>
        
        {isGrid &&  ( <div className='cardOuterGridContainer'>
        <div style={{ background : `url(${details.img})` , backgroundSize:'cover'  }}  className='imgSizeGrid' > 
        <p className='badge'>{details.badge}</p>
        </div>

            <ul>
                <h1 className='listTitle'>{details.title}</h1>
                {isIncludes1 ? <li className='listStylesHighlight listStyles'>{varientsDetails.v1}</li> : <li className='listStyles'>{varientsDetails.v1}</li> }
                
                {isIncludes2 ? <li className='listStylesHighlight listStyles'>{varientsDetails.v2}</li> : <li className='listStyles'>{varientsDetails.v2}</li> }
                {isIncludes3 ? <li className='listStylesHighlight listStyles'>{varientsDetails.v3}</li> : <li className='listStyles'>{varientsDetails.v3}</li> }
            </ul>

        </div> )
          }

          {isList && <div className='cardOuterContainer'>
          <div style={{ background : `url(${details.img})` , backgroundSize:'cover'  }}  className='imgSize' > 
          <p className='badge'>{details.badge}</p>
          </div>
  
              <ul>
                  <h1 className='listTitle'>{details.title}</h1>
                  {isIncludes1 ? <li className='listStylesHighlight listStyles'>{varientsDetails.v1}</li> : <li className='listStyles'>{varientsDetails.v1}</li> }
                
                {isIncludes2 ? <li className='listStylesHighlight listStyles'>{varientsDetails.v2}</li> : <li className='listStyles'>{varientsDetails.v2}</li> }
                {isIncludes3 ? <li className='listStylesHighlight listStyles'>{varientsDetails.v3}</li> : <li className='listStyles'>{varientsDetails.v3}</li> }
              </ul>
  
          </div>}
          </>
    )
        
    
    
     
}

export default EachCard