import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';
import Categories from './Components/Categories';
import ShowFullItem from './Components/ShowFullItem'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      orders:[

      ],
      currentItems:[],
      items:[
        {
          id: 1,
          title:'Умар',
          img:'umar.jpg',
          desc:'allianceservice',
          category:'man',
          price:'500м от вас'
        },
        {
          id: 2,
          title:'POS-Моноблок GS-A4',
          img:'monoblog.jpeg',
          desc:'allianceservice',
          category:'POS-monoblog',
          price:'24.900сом'
        },
        {
          id: 3,
          title:'Winson WNI-8014P ',
          img:'chek.png',
          desc:'Мини-ручной сканер штрих-кода',
          category:'scaner',
          price:'8600сом'
        },
        {
          id: 4,
          title:'кнопка вызова официанта',
          img:'call.webp',
          desc:'allianceservice',
          category:'knopca',
          price:'480сом'
        },
        {
          id: 5,
          title:'Считыватель бесконтактных смарт карт RFID',
          img:'kard.webp',
          desc:'allianceservice',
          category:'smart card reader',
          price:'1700с'
        },
        {
          id: 6,
          title:'ASUS Laptop 15 A516EA ',
          img:'nout.png',
          desc:'allianceservice',
          category:'nout',
          price:'37.000сом'
        }
     ],
     showFullItem: false,
     fullItem:{}
   }
   this.state.currentItems = this.state.items
   this.addToOrder = this.addToOrder.bind(this)
   this.deleteOrder = this.deleteOrder.bind(this)
   this.choseCategory = this.choseCategory.bind(this)
   this.onShowIteme = this.onShowIteme.bind(this)

  }
  render(){
  return (
    <div className="Shops">
      <Header orders = {this.state.orders} onDelete ={this.deleteOrder}/>
      <Categories  choseCategory={this.choseCategory}/>
      <Items  onShowIteme ={this.onShowIteme} items={this.state.currentItems} onAdd ={this.addToOrder} />


      {this.state.showFullItem && <ShowFullItem onShowIteme ={this.onShowIteme} onAdd={this.addToOrder} item ={this.props.fullItem} />}
      <Footer />
    </div>
  );
}



choseCategory(category){
  if(category ==='all'){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({currentItems: this.state.items.filter(el=> el.category === category)})
}


onShowIteme(item){
  this.setState({fullItem:item})
  this.setState({showFullItem: !this.state.showFullItem})
}
  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el=>{
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray)
    this.setState({orders:[...this.state.orders,item]})
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }
}

export default App;
