import React, {Component} from 'react';
import HelloWorld from './0.HelloWorld';
import Greetings from './1.Greetings';
import ClockApp from './2.ClockApp';
import AirBnB from './AirBnb';


class App extends Component {
    render() {
        return (
            //<HelloWorld />
            //<Greetings name={'kamarul'}/>
            <AirBnB />
            // <ClockApp />
        );
    }
}

export default App;
