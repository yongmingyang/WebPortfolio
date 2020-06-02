import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div className="App">
        {/* <!--  Pre Loader  --> */}
        <div id="overlayer">
            <span className="spinner-grow spinner-grow-lg loader" role="status" aria-hidden="true"></span>
        </div>
        {/* <!--  Page Pilling  Strat  --> */}
		 <div id="pagepiling" className="pagepiling">

             {/* <!--   Header Start --> */}
             <Header/>
             {/* <!--   Header End   -->
          
            <!--    Hero Start    --> */}
            <LandingPage/>
            {/* <!--    Hero End    -->

            <!--   About Start   --> */}
            <AboutPage/>
            {/* <!--    About End    -->

             <!--   Resume Start   --> */}
             <ResumePage/>
             {/* <!--   Resume End   -->

             <!--   Services Start   --> */}
             {/* <!--   Services End   -->

            <!--  Portfolio Start  --> */}
            <PortfolioPage/>
            {/* <!--   Portfolio End   -->

            <!-- Testimonial Start --> */}
            {/* <ContactPage/> */}
            {/* <!--  Testimonial End  -->

            <!--   Blog Start   --> */}
            {/* <!--   Blog End   -->

            <!--   Contact Start   --> */}
            {/* <!--   Contact End   -->

             <!--   Footer Start   --> */}
             {/* <Footer/> */}
             {/* <!--   Footer End   -->

             <!--   Color Scheme  --> */}
             <a className="color-scheme text-white bg-base-color d-inline-block" href="javascript:void(0)"><i className="lni-night"></i></a>

        </div>
        {/* <!--  Page Pilling  End --> */}
      </div>
    );
  }
}

export default App;
