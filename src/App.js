import React from 'react'
import './App.css'
   
const App = () => {

    const time = new Date(2022,5,5,18).getHours();


    let msg ="";
    let image ="";
    let s={}
    
    
    const hi =prompt('Enter your Wish:').toLowerCase()


    
    if (hi === "goodmorning") {
        msg = "❤️GOOD MORNING❤️"
        image=<img src="/img/morning.gif" alt='' />

    } else if (hi === "goodafternoon") {
        msg = "💛GOOD AFTERNOON💛"
        image=<img src="/img/afternoon.gif" alt='' />
    } else if (hi === "goodevening") {
        msg = "🩵GOOD EVENING🩵"
        image=<img src="https://i.pinimg.com/originals/b6/a7/12/b6a712423b5f69a97565a7e2067ade52.gif" alt='' />

       
    }
    else {
        msg = "🖤GOOD NIGHT🖤"
        image=<img src="https://media1.tenor.com/images/12867253c66f18ce17121c716bd720e3/tenor.gif?itemid=7445458" alt='' />
        s.color="red"
 
    }






  return (
    <div>
       <h1>h1<span style={s}>{msg}</span></h1>

        <div>{image}</div>
    </div>
    
  )
}

export default App