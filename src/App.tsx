import React, { useEffect } from 'react';
import './App.scss';
import { fetchColor } from './redux/actions/colorActions'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Factory from './components/Factory';
import Prism from "prismjs";
import './assets/css/prism.css'
import Footer from './components/Footer';

function App(props: any){

  useEffect(() => {
    Prism.highlightAll();
    props.fetchColor();
  })

    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Factory/>
        <Footer/>
      </div>
    );
}

const mapDispatchToProps = ( dispatch: any) => ({
  fetchColor: () => dispatch(fetchColor()),
});

export default connect(null, mapDispatchToProps)(App);
