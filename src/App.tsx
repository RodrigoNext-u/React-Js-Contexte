import { useState } from 'react'
import Header from './Components/Header'
import ItemScreen from './Components/ItemScreen'
import { UserContextProvider } from './UserContext'
import { CheeseContext } from './CheeseContext'
import Footer from './Components/Footer'

const cheeses = [
  {
    name: "babibel",
    photo:"https://www.bernardgaborit.fr/wp-content/uploads/2020/05/Plateau-fromages-bio-.jpg"
  },
  {
    name: "bleu",
    photo:"https://www.bernardgaborit.fr/wp-content/uploads/2020/05/Plateau-fromages-bio-.jpg",
    isAdmin: true
  },
  {
    name: "gouda",
    photo:"https://www.bernardgaborit.fr/wp-content/uploads/2020/05/Plateau-fromages-bio-.jpg",
    isAdmin: true
  },
  {
    name: "emmental",
    photo:"https://www.bernardgaborit.fr/wp-content/uploads/2020/05/Plateau-fromages-bio-.jpg"
  }
]


const App = () => {
  const [isSelected, setIsSelected]= useState(false);
  const value = { cheeses, isSelected};
  return (
    <CheeseContext.Provider value={value}>
    <UserContextProvider>
      <div>
        <Header />
        <ItemScreen />
      </div>
    </UserContextProvider>
    <Footer onClick={() => setIsSelected(true)} />
    </CheeseContext.Provider>
    )
}

export default App
