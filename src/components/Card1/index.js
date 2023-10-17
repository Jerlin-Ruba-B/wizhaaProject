
import {Component} from 'react'
import EachCard from '../EachCard'
import {TfiViewListAlt} from 'react-icons/tfi'
import {BsGrid} from 'react-icons/bs'
import './index.css'

class Card1 extends Component{
    state={isList:true,cardDatas:[],isGrid:false,searchVal:''}

componentDidMount(){
    this.getResponse()
}

getResponse = async () => {
    const response = await fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093')
    const data = await response.json()
    
    const updatedData = data.data.map((each) =>({
        img:each.product_image,
        title:each.product_title,
        badge:each.product_badge,
        varients:each.product_variants,
    }))
    this.setState({cardDatas:updatedData})
    
}

updateList = () => {
    this.setState({isList:true,isGrid:false})
    
}

updateVal = event => {
    this.setState({searchVal:event.target.value})
}

updateGrid = () => {
    this.setState({isList:false,isGrid:true})
}

    render(){
        const {isList,cardDatas,isGrid,searchVal} = this.state
        return (
            <div className='bgContainer'> 
                <h1 className='cardHeading'>PLP</h1>
                <div className='searchBarContainer'>
                    <input type='search' className='searchBar' placeholder='Type something to search..' onChange={this.updateVal} value={searchVal} />
                    <button className='icons' onClick={this.updateList}><TfiViewListAlt size='24'  /></button>
                    <button className='icons' onClick={this.updateGrid}><BsGrid size='24' /></button>
                </div>
                {isList && <div className='listContainer'>
                    {cardDatas.map((each) => <EachCard details = {each} key={each.title} isList={isList} searchVal={searchVal} /> )}
                </div>  }

                {isGrid && <div className='gridContainer'>

{cardDatas.map((each) => <EachCard details = {each} key={each.title} isGrid={isGrid} searchVal={searchVal} /> )}
</div> }
                
                
            </div>
        )
    }

}

export default Card1