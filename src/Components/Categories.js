import React, { Component } from 'react'

export default class categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [{
                key:'all',
                name:'Все'
            },
            {
                key:'printer',
                name:'принтеры'
            },
            {
                key:'POS-monoblog',
                name:'POS-моноблоки'
            },
            {
                key:'scaner',
                name:'Сканеры штрих-кода'
            },
            {
                key:'knopca',
                name:'Кнопка для вызова официанта'
            },
            {
                key:'smart card reader',
                name:'Считыватель карт'
            },
            {
                key:'nout',
                name:'Ноутбуки'
            },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key={el.key} onClick={()=> this.props.choseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}
