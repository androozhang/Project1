import './App.css';
import Food from './components/Food'

const App = () => {

  return (
    <div className="App">
      <h1>
        Drexel Food
      </h1>
      <div className="container">
      <Food name="Ed's Buffalo Wings and Pizza" type="Pizza" rating="3.5/5"/>
      <Food name="Halal Truck" type="Halal" rating="4/5"/>
      <Food name="Coco" type="Dessert" rating="4/5"/>
      <Food name="Urban Eatery" type="Dining Hall" rating="3.2/5"/>
      <Food name="Handschumacher Dining Center" type="Dining Hall" rating="3.7/5"/>
      <Food name="CM Chicken" type="Chicken" rating="3.8/5"/>
      <Food name="Dos Hermanos" type="Tacos" rating="2.8/5"/>
      <Food name="El Taco" type="Tacos" rating="3.5/5"/>
      <Food name="Savas Brick Oven Pizza" type="Pizza" rating="3.4/5"/>
      <Food name="Han Dynasty" type="Chinese" rating="3/5"/>
      </div>
    </div>
  )
}

export default App