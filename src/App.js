import './App.css';
import { Section } from './Section';


function App() {
  
  return (
    <div className="App">
      <div className="App-inner">
        <div className='section-outer'>
          <Section time='05:30 - 06:00' id='1'/>
          <Section time='06:00 - 06:30' id='2'/>
          <Section time='06:30 - 07:00' id='3'/>
          <Section time='07:00 - 07:30' id='4'/>
          <Section time='07:30 - 08:00' id='5'/>
          <Section time='08:00 - 08:30' id='6'/>
          <Section time='08:30 - 09:00' id='7'/>
          <Section time='09:00 - 09:30' id='8'/>
          <Section time='09:30 - 10:00' id='9'/>
          <Section time='10:00 - 10:30' id='10'/>
          <Section time='10:30 - 11:00' id='11'/>
          <Section time='11:00 - 11:30' id='12'/>
          <Section time='11:30 - 12:00' id='13'/>
        </div>
        <div className='section-outer'>
          <Section time='12:00 - 12:30' id='14'/>
          <Section time='12:30 - 13:00' id='15'/>
          <Section time='13:00 - 13:30' id='16'/>
          <Section time='13:30 - 14:00' id='17'/>
          <Section time='14:00 - 14:30' id='18'/>
          <Section time='14:30 - 15:00' id='19'/>
          <Section time='15:00 - 15:30' id='20'/>
          <Section time='15:30 - 16:00' id='21'/>
          <Section time='16:00 - 16:30' id='22'/>
          <Section time='16:30 - 17:00' id='23'/>
          <Section time='17:00 - 17:30' id='24'/>
          <Section time='17:30 - 18:00' id='25'/>
          <Section time='18:00 - 18:30' id='26'/>
        </div>
        <div className='section-outer'>
          <Section time='18:30 - 19:00' id='27'/>
          <Section time='19:00 - 19:30' id='28'/>
          <Section time='19:30 - 20:00' id='29'/>
          <Section time='20:00 - 20:30' id='30'/>
          <Section time='20:30 - 21:00' id='31'/>
          <Section time='21:00 - 21:30' id='32'/>
          <Section time='21:30 - 22:00' id='33'/>
          <Section time='22:00 - 22:30' id='34'/>
          <Section time='22:30 - 23:00' id='35'/>
          <Section time='23:00 - 23:30' id='36'/>
          <Section time='23:30 - 00:00' id='37'/>
          <Section time='00:00 - 00:30' id='38'/>
          <Section time='00:30 - 01:00' id='39'/>
        </div>
      </div>
    </div>
  );
}

export default App;
