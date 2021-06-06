import React, { useState } from 'react';
import Tab from '../components/Tab';

import { Modal, Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import InstaWear from '../images/InstaWear/InstaWear.jpg';
import Poster from '../images/InstaWear/InstawearPoster.jpg'

import Mynorca from '../images/Mynorca/M.jpg';
import MynorcaEx1 from '../images/Mynorca/Mynorca_example.PNG';
import MynorcaLogin from '../images/Mynorca/login.PNG';
import Marketplace from '../images/Mynorca/marketplace.PNG';
import MarketplaceExplanation from '../images/Mynorca/marketplace_explanation.PNG'
import BulkUpload from '../images/Mynorca/bulk_upload.PNG'

import AER from '../images/A.E.R/AER.png'
import ApsScript from '../images/A.E.R/GoogleApsScript.png'

const PortfolioPage = () => {
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [openMynorca, setOpenMynorca] = useState(false);
    const [openInstawear, setOpenInstawear] = useState(false);
    const [openAER, setOpenAER] = useState(false);

//styles for modal    
    function getModalStyle() {
        const top = 50;
        const left = 50;
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }
    
    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: '95%',
            height: '90%',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            overflow: 'auto'
        },
    }));
    
    const classes = useStyles();
                
    //Mynorca functions and page     
    const handleOpenMynorca = () => {
        setOpenMynorca(true);
    };

    const handleCloseMynorca = () => {
        setOpenMynorca(false);
    };

    const MynorcaPage = () => {
        const body = (
            <Container style={modalStyle} className={classes.paper}>
                <Container className="row" style={{width: "90%"}}>
                    <div className="text-center">
                        <h2 style={{textAlign:"center"}} className="text-dark mb-3">Mynorca</h2>
                        <p class="text-muted max-width-450"> Acronyms made easy. </p>
                    </div>
                    <div class="row contact-info mt-5">
                        <div class="col-md-6 p-title-border mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6 class="contact_detail-title">Started on: </h6>
                                    <p class="text-muted mb-0">May, 2021 (in-progress)</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6>Tech Stack:</h6>
                                    <p class="text-muted mb-0">Firebase / React / Chrome Extensions</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                                In the second summer of my University life, I wanted to be building applications while interning. After brainstorming with my brother, Zhun Hung,
                                both of us felt that in the context of learning a new subject, or even as an employee reading an onboarding document,
                                the amount of acronyms can be rather overwhelming. Instead of having to search for the acronym in a company's glossary or having to 
                                constantly google a term, we felt that it would have been so much easier if the meaning of an acronym could be explained with a simple 
                                highlight of the word. Hence, we kicked off the project and built a Minimum Viable Product on the google chrome extension platform.
                                <br/>
                                <br/>
                                Here's how the it works:
                            </p>
                        </div>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={MynorcaLogin} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                                As the user first installs the login, he/she would land on the login page. Using React on the frontend, the account registration and
                                storage of user details are handled by Firebase. This allows various users to have their own personalized list of glossaries.
                            <br/>
                            <br/>
                                Initially, the user would have an empty glossary. However, glossaries for some topics/subjects may already been created
                                by previous users. Hence, we established a Marketplace in which glossaries can be downloaded and put into use immediately.
                                Users would also be able to view the acronyms stored in each glossary prior to downloading.
                            </p>
                        </div>
                        {/* <Container className="row" style={{width: '120%'}}>
                            <div style={{float: 'left', width: '50%', padding: '5px'}}>
                                    <img src={Marketplace} class="d-block w-100 rounded" alt="..."/>
                            </div>
                            <div  style={{float: 'left', width: '50%', padding: '5px'}}>
                                    <img src={MarketplaceExplanation} class="d-block w-100 rounded" alt="..."/>
                            
                            </div>
                        </Container> */}
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                        <div class="portfolio-single-item" style={{marginBottom:"10px"}}>
                                <img src={Marketplace} class="d-block w-100 rounded" alt="..."/>
                            </div>
                            <div class="portfolio-single-item">
                                <img src={MarketplaceExplanation} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                                As we hope to have companies adopting the extension, we added a bulk upload feature which would enable companies to create their own glossaries.
                                This would then enable their employees to easily reference acronyms without having to search for them in the company's glossary page.
                            </p>
                        </div>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item" >
                                <img src={BulkUpload} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                                As we continue to develop on this project, more features would be added. At the current stage, we are in the stage of testing the 
                                MVP. Here's a glimpse of how it works!
                            </p>
                        </div>
                        <div class="mt-5">
                            <div class="portfolio-single-item">
                                <img src={MynorcaEx1} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                                The user double clicks/highlights an acronym. Since the acronym is found in the glossary,
                                an explanation of the acronym pops up as seen. Hence, providing the user with quick and instant
                                explanations to these terms!

                                <br/>
                                <br/>
                                All in all, thank you for reading about Mynorca and
                                I hope you've had an enjoyable time reading about it!
                            </p>
                            <p class="my-3 text-muted" style={{fontSize:11}}>
                                <br/>
                                *disclaimer: 
                                <br/>
                                <br/>
                                The current M icon shown on the project page is a placeholder, attributed to https://www.freepik.com
                            </p>
                        </div>
                    </div>
                </Container>
            </Container>
        );
            
            return (
                <Modal
                    open={openMynorca}
                    onClose={() => handleCloseMynorca()}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    {body}
                </Modal>

            );
        }
        
    //Instawear functions and page     
    const handleOpenInstawear = () => {
        setOpenInstawear(true);
    };

    const handleCloseInstawear = () => {
        setOpenInstawear(false);
    };


    const InstawearPage = () => {
        const body = (
            <Container  style={modalStyle} className={classes.paper}>
                <Container className="row" style={{width: "90%"}}>
                    <div className="text-center">
                        <h2 style={{textAlign:"center"}} className="text-dark mb-3">InstaWear</h2>
                        <p class="text-muted max-width-450"> Automatically fashionable </p>
                    </div>
                    <div class="row contact-info mt-5">
                        <div class="col-md-6 p-title-border mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6 class="contact_detail-title">Started on: </h6>
                                    <p class="text-muted mb-0">May to July, 2020</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6>Tech Stack:</h6>
                                    <p class="text-muted mb-0">Firebase / React Native / Google API</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={InstaWear} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                                For my first year of summer, I took part in Orbital, a program for year 1 Computer 
                                Science students. For this project, the inspiration came from the fact that I felt 
                                like I was always wearing the same few clothes from my wardrobe in the same combination.
                                Therefore, I wanted to have my outfits for the week planned out based on fashion and color 
                                theory, just to spice up my fashion sense a little.
                                <br/>
                                <br/>
                                Hence, the idea for InstaWear was conceived. A mobile application that would allow the user
                                to input images of clothings in his closet, and outputs the various outfits
                                he/she could wear for the week!
                            </p>
                        </div>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={Poster} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                            This application works with React Native on the front-end, and utilizes Firebase
                            on the backend. This was because I wanted the application to work on both Android and Apple platforms,
                            while also maintaining the user's information easily. Firebase provided the service of account registration,
                            cloud functions, as well as buckets to store user's images.
                                
                                <br/>
                                <br/>
                                As the user takes a photo of their clothing, the picture is automatically analyzed. I incorporated Google's image identifier 
                            to sort the clothings into their various categories. In conjunction,
                            I made use of TheColorApi to make color recommendations through color theory. If time wasn't an issue,
                            I would have tried incorporating ways to suggest based on latest fashion trends.
                            After the suggestions are made, the user also has the option to edit the outfits for each day of the week.
                            </p>
                        
                            <p class="my-3">
                                In conclusion, this project had a really steep learning curve for me as it was
                                my first time utilizing the 3 main tech stacks mentioned. Furthermore, as I was juggling an 
                                internship at the same time, the experience was exhausting and constantly tested my time management skills. However, I believe
                                that the learning experience from this project was highly valuable as the tools and skills learnt
                                are applicable in any application I would build in the future.
                                <br/>
                                To end this off, I would like to thank Toby Gail for helping me out with the design of the poster
                                which captured the essence of the project really well! You can view her website at 
                                <a href="https://www.tobygail.com"> tobygail.com</a>.
                            </p>
                        </div>
                    </div>
                </Container>
            </Container>
        );
            
            return (
                <div>
                <Modal
                    open={openInstawear}
                    onClose={() => handleCloseInstawear()}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    {body}
                </Modal>
                </div>
            );
        }
        
    //AER functions and page     
    const handleOpenAER = () => {
        setOpenAER(true);
    };

    const handleCloseAER = () => {
        setOpenAER(false);
    };


    const AerPage = () => {
        const body = (
            <Container style={modalStyle} className={classes.paper}>
                <Container className="row" style={{width: "90%"}}>
                    <div className="text-center">
                        <h2 style={{textAlign:"center"}} className="text-dark mb-3">A.E.R</h2>
                        <p class="text-muted max-width-450"> Automated Email Replies, customized. </p>
                    </div>
                    <div class="row contact-info mt-5">
                        <div class="col-md-6 p-title-border mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6 class="contact_detail-title">Started on: </h6>
                                    <p class="text-muted mb-0">March - June, 2019</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6>Tech Stack:</h6>
                                    <p class="text-muted mb-0">Google Aps Script / Javascript / HTML / CSS</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={ApsScript} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                    </div>
                    <div class="text-md-left mt-5">
                        <p class="my-3">
                            Right after my 2 years in National Service, I spent a bunch of my time travelling
                            and exploring the world, and even went on a solo trip to Philippines in January 2019.
                            After I came back, I decided to try out for an internship at a Wedding Photography company,
                            Multifolds.
                            <br/>
                            <br/>
                            During my internship as a photographer, I got to witness the inner proceedings and aspects 
                            of the company. After one of the Bridal Show, early in the year, I noticed that my colleague, Sharon,
                            was extremely busy after the wedding shows. She would spend a large amount of time (3-5 hours each day of the event), 
                            sending replies to interested customers about the details of the packages the company offered, while also providing
                            each photographer's portfolio. I took the initiative to ask about her task, and thought about ways to automate
                            the process without having the automated emails send fixed replies regardless of the customer's interest indication.
                            From there, I proposed to work on this project to my boss Melvin, who gave his full support which I am still very thankful for.
                        </p>
                    </div>
                </Container>
            </Container>
        );

        return (
            <div>
            <Modal
                open={openAER}
                onClose={() => handleCloseAER()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            </div>
        );
    }

    return (
        <>
            <section id="portfolio" className="section pp-scrollable portfolio" data-navigation-color="#fff" data-navigation-tooltip="PORTFOLIO">
                <div className="display-table">
                    <div className="display-content">
                        <div className="container">
                            <div className="row">
                                <div className="title-small">
                                    <p className="text-dark">Portfolio</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-left">
                                        <h2 className="text-dark">My <span className="base-color">Projects</span></h2>
                                    </div>
                                </div>
                            </div>
                            <MynorcaPage/>
                            <InstawearPage/>
                            <AerPage/>
                            <div className="portfolio-items mt-1 row">
                                <Tab
                                    // tag="photography"
                                    content={[
                                        
                                        {
                                            id: "InstaWear",
                                            title: "INSTAWEAR",
                                            image: {InstaWear},
                                            callback: handleOpenInstawear
                                        },
                                        {
                                            id: "Mynorca",
                                            title: "MYNORCA",
                                            image: {Mynorca},
                                            callback: handleOpenMynorca
                                        },
                                        {
                                            id: "Automated Email Reply",
                                            title: "Automated Email Reply",
                                            image: {AER},
                                            callback: handleOpenAER
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioPage;
