import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Items from './Components/Items';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      items:[
        {
          id: 1,
          title:'Умар',
          img:'umar',
          desc:'allianceservice',
          category:'man',
          price:'23'
        },
        {
          id: 2,
          title:'Принтер чеков мобильный - MP-58M 58 mm',
          img:'printer',
          desc:'allianceservice',
          category:'printer',
          price:'3300сом'
        },
        {
          id: 3,
          title:'POS-Моноблок GS-A4',
          img:'monoblog',
          desc:'allianceservice',
          category:'monoblog',
          price:'24.900сом'
        },
        {
          id: 4,
          title:'Winson WNI-8014P ',
          img:'chek',
          desc:'Мини-ручной сканер штрих-кода',
          category:'scaner',
          price:'8600сом'
        },
        {
          id: 5,
          title:'кнопка вызова официанта',
          img:'call',
          desc:'allianceservice',
          category:'knopca',
          price:'480сом'
        },
        {
          id: 6,
          title:'Считыватель бесконтактных смарт карт RFID',
          img:'kard',
          desc:'allianceservice',
          category:'smart card reader',
          price:'1700с'
        },
        {
          id: 7,
          title:'ASUS Laptop 15 A516EA ',
          img:'nout',
          desc:'allianceservice',
          category:'nout',
          price:'37.000сом'
        }
     ]
   }
  }
  render(){
  return (
    <div className="Shops">
      <Header />
      <Items  items={this.state.items} />
      <Footer />
    </div>
  );
}
}

export default App;
