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
import MarketplaceExplanation from '../images/Mynorca/marketplace_explanation.PNG';
import BulkUpload from '../images/Mynorca/bulk_upload.PNG';

import AER from '../images/A.E.R/AER.png';
import ApsScript from '../images/A.E.R/GoogleApsScript.png';
import Form from '../images/A.E.R/newform.png';
import Form_two from '../images/A.E.R/newform2.png';
import Script from '../images/A.E.R/newscript.jpg';
import Script_two from '../images/A.E.R/newscript2.jpg';
import Reply from '../images/A.E.R/reply.png'

import DAMLogo from '../images/DAM/DamLogo.svg'
import NTGSLanding from '../images/DAM/NTGS_landing.png'
import NTGSStreamPage from '../images/DAM/NTGS_Stream_page.png'
import NTGSLiveStream from '../images/DAM/NTGS_Livestream.png'

const PortfolioPage = () => {
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [openMynorca, setOpenMynorca] = useState(false);
    const [openInstawear, setOpenInstawear] = useState(false);
    const [openAER, setOpenAER] = useState(false);
    const [openDAM, setOpenDAM] = useState(false);

//styles for modal    
    function getModalStyle() {
        const top = 50;
        const left = 50;
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
            position: 'absolute',
            width: '95%',
            height: '90%',
            // backgroundColor: theme.palette.background.paper,
            borderRadius: '8px',
            boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)" ,
            padding: "16px 32px 24px",
            overflow: 'auto'
        };
    }
    
    // const useStyles = makeStyles((theme) => ({
    //     paper: {
    //         position: 'absolute',
    //         width: '95%',
    //         height: '90%',
    //         backgroundColor: theme.palette.background.paper,
    //         borderRadius: '8px',
    //         boxShadow: theme.shadows[5] ,
    //         padding: theme.spacing(2, 4, 3),
    //         overflow: 'auto'
    //     },
    // }));
    
    // const classes = useStyles();
                

    // const useStyles2 = makeStyles((theme) => {
    //     console.log(theme)
    //     console.log(theme.spacing(2, 4, 3))
    //     console.log(theme.shadows[5])
    // });

    // useStyles2()

    //Mynorca functions and page     
    const handleOpenMynorca = () => {
        setOpenMynorca(true);
    };

    const handleCloseMynorca = () => {
        setOpenMynorca(false);
    };

    const MynorcaPage = () => {
        const body = (
            <Container style={modalStyle} className="bg-white">
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
                                <h3 class="text-md-left my-3">Problem Statement</h3>
                                In the second summer of my University life, I wanted to be building applications while interning. After brainstorming with my brother, Zhun Hung,
                                both of us felt that in the context of learning a new subject, or even as an employee reading an onboarding document,
                                the amount of acronyms can be rather overwhelming. 
                                
                                <br/>
                                <br/>
                                <b>How can we make acronyms more digestable?</b>
                                
                                <br/>
                                <br/>
                                
                                <h3 class="text-md-left my-3">Ideation</h3>
                                Instead of having to search for the acronym in a company's glossary or having to 
                                constantly google a term, we felt that it would have been so much easier if the meaning of an acronym could be explained with a simple 
                                highlight of the word. Hence, we kicked off the project and built a Minimum Viable Product on the google chrome extension platform.
                                <br/>
                                <br/>
                                <h3 class="text-md-left my-3">Our Solution</h3>
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
                                by other users. Hence, we established a Marketplace in which glossaries can be downloaded and put into use immediately.
                                Users would also be able to view the acronyms stored in each glossary prior to downloading.
                            </p>
                        </div>
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
                                As we hope to have companies adopting the extension, we added a bulk upload feature which would enable companies to create their own glossaries on our platform.
                                This enables their employees to easily reference acronyms without having to make the extra effort of searching for them in the company's glossary page.
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
                                <h3 class="text-md-left my-3">Conclusion</h3>
                                All in all, thank you for reading about Mynorca and
                                I hope you've had an enjoyable time reading about it! More would be updated as we're still working on this project to improve it's functionalities!
                                <br/>
                                To tryout Mynorca, click <a href="https://chrome.google.com/webstore/detail/mynorca/acfhajhbkpkciaefkebieeknhjbckdlm">here.</a> Alternatively, it can be found on the Chrome Extension store by searching
                                "Mynorca".
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
                    className="bg-white"
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
            <Container style={modalStyle} className="bg-white">
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
                                <h3 class="text-md-left my-3">Problem Statement</h3>
                                For my first year of summer, I took part in Orbital, a program for year 1 Computer 
                                Science students. For this project, the inspiration came from the fact that my friend and I felt 
                                that we were always wearing the same few clothes from our wardrobes in the same combination.
                                Therefore, we wanted to have our outfits for the week planned out based on fashion and color 
                                theory, just to spice up our fashion sense a little.
                                <br/>
                                <br/>
                                <b>How can we come up with ways to better utilize our current wardrobe to dress better?</b>
                                <br/>
                                <br/>
                                
                                <h3 class="text-md-left my-3">Ideation</h3>
                                Hence, the idea for InstaWear was conceived. A mobile application that would allow the user
                                to input images of clothings in his closet, and outputs the various outfits
                                he/she could wear for the week! We wanted to use React Native as it provides fast development and caters to both Android and iOS platforms,
                                while utilizing Firebase as the backend as it eased database management. With the use of Firebase, services such as account registration,
                                cloud functions and buckets to store user's images were all provided. All we had to do was to find tools that could help identify clothings and suggest 
                                possible compatible colors. 

                                <br/>
                                <br/>
                                <h3 class="text-md-left my-3">Our Solution</h3>
                            </p>
                        </div>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={Poster} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <div class="text-md-left mt-5">
                            <p class="my-3">
                           
                            <br/>
                            <br/>
                            As the user takes a photo of their clothing, the picture is automatically analyzed. This is done by incorporating Google's image identifier 
                            to sort the clothings into their various categories. In conjunction,
                            I made use of TheColorApi to make color recommendations through color theory. If time wasn't an issue,
                            I would have tried incorporating ways to suggest based on latest fashion trends.
                            After the suggestions are made, the user also has the option to edit the outfits for each day of the week.
                            </p>
                        
                            <p class="my-3">
                                <h3 class="text-md-left my-3">Conclusion</h3>
                                In conclusion, this project had a really steep learning curve for me as it was
                                my first time utilizing the 3 main tech stacks mentioned. Furthermore, as I was juggling an 
                                internship at the same time, the experience was exhausting and constantly tested my time management skills. However, I believe
                                that the learning experience from this project was highly valuable as the tools and skills learnt
                                are likely to be very applicable in any application I would build or contribute to in the future.
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
                    className="bg-white"
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
            <Container style={modalStyle} className="bg-white">
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
                                    <p class="text-muted mb-0">Google Apps Script / Javascript / HTML / CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-md-left mt-5">
                        <p class="my-3">
                            <h3 class="text-md-left my-3">Background</h3>
                            Right after my 2 years in National Service, I spent a bunch of my time travelling
                            and exploring the world, and even went on a solo trip to Philippines in January 2019.
                            After I came back, I decided to try out for an internship at a Wedding Photography company,
                            Multifolds. This was my very first internship.
                            <br/>
                            <br/>
                            <h3 class="text-md-left my-3">Problem Statement</h3>
                            During my internship as a photographer, I got to witness the inner proceedings and aspects 
                            of the company. After one of the Bridal Show, early in the year, I noticed that my colleague, Sharon,
                            was extremely busy after the wedding shows. She would spend a large amount of time at the end of the day (3-5 hours), 
                            sending replies to interested clients about the details of the packages the company offered, while also providing
                            each photographer's portfolio.
                            
                            <br/>
                            <br/>
                            <b>How can I automate her seemingly repetitive task, while still having the aspect of a customized reply?</b>
                            <br/>
                            <br/>
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={Form} class="d-block w-100 rounded" style={{marginBottom: "10px"}} alt="..."/>
                            </div>
                            <div class="portfolio-single-item">
                                <img src={Form_two} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <p class="my-3">
                            <h3 class="text-md-left my-3">Ideation</h3>
                            Before I started finding ways to automate, I took a look into the inner proceedings of the company. Most of the data were stored on 
                            google applications such as Google Sheets, and clients were filling up their data and preferences through Google Forms.
                            From there, I started searching for technologies related to these 2 applications and found out about Google Apps Script. 
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={ApsScript} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <p class="my-3">
                            <h3 class="text-md-left my-3">Solution</h3>
                            Apps script provided the interface for various google applications to link to one another through event triggers,
                            such as a form submission. This made my job relatively easier as there was no need for external technologies. By learning how to scrape
                            data from Google Sheets on the Google scripts platform, I managed to retrieve an array of data provided by each client, specifying their
                            preferences, contact, etcetera. 
                            <br/>
                            <br/>
                            Next up, was manipulating the data to return the customized reply. This was done through conditional statements as seen below.
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={Script_two} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <p class="my-3">
                            Once data manipulation is complete, I looked up the API for gmail, and put together a template for the email. One convenient feature about
                            Google Apps Script was the error logging, in which helped me to debug quickly. Now, the script is complete! All I had to do was to add a 
                            trigger for form submission, which would then execute this script.
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={Script} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <p class="my-3">
                            Here's the end result after filling up the form shown above:
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={Reply} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <p class="my-3">
                        <h3 class="text-md-left my-3">Conclusion</h3>
                            Taking on this project brought about many new experiences for me. As this was my first project involving Google applications, I had to 
                            take the time to read up on how the applications were able to link to one another. Furthermore, the concept of triggers and passing of data 
                            from one application to the other was rather new to me as I had just started out coding. Therefore, one of the main learning points would be
                            the usage of APIs and ways to find them. I strongly believe that this experience would benefit my future projects greatly.
                            <br/>
                            <br/>
                            All in all, this project was only possible with the full support of Melvin and Sharon who provided me with the time and resources.
                            I am very grateful for the opportunity to not only explore my interest in photography, but also meddle with code at the same time.
                            It also brings me great joy to know that this project was improved and maintained by Melvin after I left, and more importantly, the value it brought for them through the years. A big 
                            THANK YOU to Melvin for helping me out with this portfolio and my past testimonials.
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
                className="bg-white"
            >
                {body}
            </Modal>
            </div>
        );
    }

    //DAM functions and page     
    const handleOpenDAM = () => {
        setOpenDAM(true);
    };

    const handleCloseDAM = () => {
        setOpenDAM(false);
    };


    const DAMPage = () => {
        const body = (
            <Container style={modalStyle} className="bg-white">
                <Container className="row" style={{width: "90%"}}>
                    <div className="text-center">
                        <h2 style={{textAlign:"center"}} className="text-dark mb-3">DAM Game Show Platform</h2>
                        <p class="text-muted max-width-450"> New Tokyo Game Show @ &nbsp; 
                            <a 
                                href='https://dam.show'
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                dam.show
                            </a> 
                        </p>
                    </div>
                    <div class="row contact-info mt-5">
                        <div class="col-md-6 p-title-border mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6 class="contact_detail-title">Started on: </h6>
                                    <p class="text-muted mb-0">Early May - End May, 2023</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-3 mt-md-0">
                            <div class="text-center">
                                <div>
                                    <h6>Tech Stack:</h6>
                                    <p class="text-muted mb-0">React / MUI / Ethers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-md-left mt-5">
                        <p class="my-3">
                            <h3 class="text-md-left my-3">Background</h3>
                            After meeting Atareh in Toronto when I was working in Toronto 2022, we kept in touch and met up a few times at various Web 3 events, from NFT NYC to Blockchain Futurist Conference and more. As I have been keeping up with the DAM Show, I was very excited to hear that the team was working on a new game show platform for the New Tokyo Game Show. Atareh reached out to me to help out with the development of the platform, and I was more than happy to help out.
                            <br/>
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={NTGSLanding} class="d-block w-100 rounded" style={{marginBottom: "10px"}} alt="..."/>
                            </div>
                        </div>
                        <p class="my-3">
                            <h3 class="text-md-left my-3">Ideation</h3>
                            Before I started building the platform, we had a couple of meetings to ideate on the features that we wanted to include in the platform. We wanted to make the platform as simple as possible, and the main features that we wanted to include were:
                            <br/> 1. Connection of Metamask wallet
                            <br/> 2. A way to detect if the connected user holds at least 1 $APE coin
                            <br/> 3. A way to incorporate the livestreaming of the game show into the platform
                            <br/> 4. Incorporating games directly into the platform
                            Atareh then did up the wireframes for the platform, and we were ready to start building.
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={NTGSStreamPage} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                        <p class="my-3">
                            <h3 class="text-md-left my-3">Overall Experience</h3>
                            Working with the DAM team was highly pleasant as they were highly receptive to my comments
                            and suggestions. What stood out to me was the excitement I felt watching the platform I built come to live
                            with people interacting and having fun with it. I had a conversation with Atareh about it and he highlighted that this is 
                            how it feels to be in the arena as opposed to being an audience.
                            I am very grateful for the opportunity to work with the DAM team, and I look forward more opportunities to be in the arena, building fun and cool Web 3 products.
                        </p>
                        <div class="mt-5" style={{marginLeft:'auto', marginRight:'auto'}}>
                            <div class="portfolio-single-item">
                                <img src={NTGSLiveStream} class="d-block w-100 rounded" alt="..."/>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        );

        return (
            <div>
            <Modal
                open={openDAM}
                onClose={() => handleCloseDAM()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="bg-white"
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
                            <div className="nill-dark">
                                <MynorcaPage/>
                                <InstawearPage/>
                                <AerPage/>
                                <DAMPage/>
                            </div>
                            <div className="portfolio-items mt-1 row">
                                <Tab
                                    content={[
                                        {
                                            id: "DAM Game Show",
                                            title: "DAM Game Show",
                                            image: {DAMLogo},
                                            callback: handleOpenDAM
                                        },
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
