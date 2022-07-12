import React from 'react';
import Header from './Header';
import SideBar from './SideBar';

const propTypes = {};

const defaultProps = {};

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    };
}

    render() {
        return <>
            <div className="home__wrapper">
                <Header/>
                <SideBar/>
            </div>
        </>
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;