import React,{ useState, useEffect} from 'react';
 
export const Picker = () => {
  const [new_color, setColor] = useState('#fff');

  useEffect(() => {
    async function fetchColor() {
      let res = await fetch('http://www.colr.org/json/color/random');
      let data = await res.json();
      setColor(data.new_color)
    }
    fetchColor();
    }, [])
  
  const handleClick = () => {
    setColor(new_color); 
  }

  const colors = new_color;

  return (
    <div className="colorPick">
      <button type="button" className="btn" onClick={(handleClick)}>Change</button> 
      <p>New color is: #{new_color}</p>
      <div className="inputArea">
        <h5>Write some text:</h5>
        <textarea style={{color: {new_color}}}/>
      </div>
      Your old color is #{colors}.
  
    </div>
  )
}
