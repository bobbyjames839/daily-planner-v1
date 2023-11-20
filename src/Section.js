import {useState, useEffect} from 'react'

export const Section = (props) => {

  const [inputFilled, setInputFilled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem(props.id);
    if (storedValue) {
      setInputValue(storedValue);
      setInputFilled(true);
    }
  }, []);


  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (inputValue !== '') {
      setInputFilled(true);
      localStorage.setItem(props.id, inputValue)
      } else if (inputValue === '') {
        localStorage.setItem(props.id, inputValue)
      }
    } 
  };

  /*const handleBlur = () => {
      if (inputValue !== '') {
      setInputFilled(true);
      localStorage.setItem(props.id, inputValue)
      } else if (inputValue === '') {
        localStorage.setItem(props.id, inputValue)
      }
    } 

  const clicked = () => {
    if (inputFilled ===  true) {
      setInputFilled(false);
    }
  }

  const remove = () => {
    if(inputValue === '') {
      localStorage.removeItem(props.id);
    }
  }*/



  return (
    <div className="section">
      <p className='time'>{props.time}</p>
      <input
      key={props.id}
      value={inputValue} 
      onChange={(event) => {setInputValue(event.target.value)}}
      className={inputFilled ? 'task-filled' : 'task'} 
      onKeyPress={handleInputKeyPress} 
      //onClick={clicked} 
      //onBlur={handleBlur} 
      readOnly={inputFilled ? true : false}/>
    </div>
  )
}

