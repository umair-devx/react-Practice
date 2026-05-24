import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div>
      <Navbar/>
      <div className='main'>
      <App img="https://i.ytimg.com/vi/WCmSwYWWDs8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5Spw4VTy5AAvqLj96FxjJ_EMPsg"
        price="Rs.1.09Lac"
        titel="Iphone jv 15 128gb Iphone 16 pro MAx jv 256gb"
        location=" others , Faislabad"
        listed="4 days ago" />
      <App img="https://fonezone.me/cdn/shop/products/RED4_4de0f4fc-4e92-43a6-b660-67dd0b0a5859.jpg?v=1722963233"
        price="Rs.1.58Lac"
        titel="Iphone 14 | 128gb | PTA Aprove| 86% plus Original Battery Healh"
        location=" Model town, Lahore"
        listed="3 days ago" />
      <App img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VI7VgRqQw8WwVhABQWaJakUbVQZyTInOJw&s"
        price="Rs.6,000"
        titel="Samsung A17 8/256 Pta Aprroved On Easy installment"
        location="Samanabad, Lahore"
        listed="3 weeks ago" />
      <App img="https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back-scaled.jpeg"
        price="Rs.1.25Lac"
        titel="Iphone 13 pro MAx jv 256gb"
        location=" Sahara city, Pakpatan"
        listed="5 days ago" />
      <App
        img="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        price="Rs.25,000"
        titel="Realme 9 Pro 128GB"
        location="Johar Town, Lahore"
        listed="6 days ago"
      />
      <App
        img="https://images.unsplash.com/photo-1598327105666-5b89351aff97"
        price="Rs.45,000"
        titel="Samsung Galaxy S21 Ultra 256GB"
        location="DHA, Karachi"
        listed="2 days ago"
      />
      <App
        img="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        price="Rs.85,000"
        titel="iPhone 12 PTA Approved 128GB"
        location="Gulshan-e-Iqbal, Karachi"
        listed="1 week ago"
      />
      <App
  img="https://fonezone.me/cdn/shop/products/RED4_4de0f4fc-4e92-43a6-b660-67dd0b0a5859.jpg?v=1722963233"
  price="Rs.1.58 Lac"
  title="iPhone 14 | 128GB | PTA Approved | 86% Battery Health"
  location="Model Town, Lahore"
  listed="3 days ago"
/>
<App
  img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VI7VgRqQw8WwVhABQWaJakUbVQZyTInOJw&s"
  price="Rs.6,000"
  title="Samsung A17 8/256 PTA Approved Installments"
  location="Samanabad, Lahore"
  listed="3 weeks ago"
/>
<App
  img="https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back-scaled.jpeg"
  price="Rs.1.25 Lac"
  title="iPhone 13 Pro Max JV 256GB"
  location="Sahara City, Pakpattan"
  listed="5 days ago"
/>

    </div>
    </div>

    

    


  </StrictMode>,
)
