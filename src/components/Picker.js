import React,{ useState, useEffect} from 'react';
 
export const Picker = () => {
  const [new_color, setColor] = useState([]);

  useEffect(() => {
    async function fetchColor() {
      let res = await fetch('http://www.colr.org/json/color/random');
      let data = await res.json();
      setColor(data.new_color)
    }
    fetchColor();
  }, []);
 
  //  updateText(event) {
  //    useState(event.target.value)
  //  }

  const color = new_color;

  return (
    <div className="colorPick">
      <button className="btn" onClick={() => setColor(new_color)}>Change</button> 
      {/* na onclick zelim vratit novu boju koja se onda pokazuje u paragrafu. a u inputu pisem tekst koji bude u novoj boji */}
      <p>New color is: #{new_color}</p>
      <div className="inputArea">
        <h5>Write some text:</h5>
        <textarea onChange={new_color}/>
      </div>
      Your old color is #{color}.
    </div>
  )
}