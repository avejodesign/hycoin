import {
    Header,
    Hero,
    Media,
    Crypto,
    WhatsNew,
    Customer,
    Banner,
    Footer,
} from "./styles";

import imgLogotype from "../../assets/logotype.png";
import imgMockupApp from "../../assets/mockup-app.png";
import imgBackgroundHero from "../../assets/background-hero.png";

// Img Hero Media
import imgLogo1 from "../../assets/logo01.png";
import imgLogo2 from "../../assets/logo02.png";
import imgLogo3 from "../../assets/logo03.png";

import imgBitcoinIcon from "../../assets/cryptos/bitcoin.png";
import imgEthereumIcon from "../../assets/cryptos/ethereum.png";
import imgTetherIcon from "../../assets/cryptos/tether.png";
import imgBinanceIcon from "../../assets/cryptos/binance.png";
import imgXRPIcon from "../../assets/cryptos/xrp.png";
import imgDashcoinIcon from "../../assets/cryptos/dashcoin.png";

// Img Whats New 
import imgSafe from "../../assets/safe.svg";
import imgControl from "../../assets/control.svg";
import imgEncryption from "../../assets/encryption.svg";

// Img Customer 
import imgWebflow from "../../assets/webflow.png";
import imgCustomer from "../../assets/user-customer.png";

import imgLogoYellow from "../../assets/logo-yellow.png"; 

import { 
    MdArrowForward,
    MdArrowBack, 
    MdArrowOutward,
} from "react-icons/md";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function Home() {
    return (
        <>
            <main>
                <Header>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav>
                                    <div className="group-content">
                                        <img src={imgLogotype} alt="" />
                                        <ul>
                                            <li className="active">Home</li>
                                            <li>About</li>
                                            <li>Features</li>
                                            <li>Book</li>
                                            <li>Investor</li>
                                        </ul>
                                    </div>
                                    <div className="buttons">
                                        <a href="">Sign up </a>
                                    </div>
                                </nav>
                                <Hero>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="content">
                                                <h1>Crypto platform <br />for investments <br />with sure earnings</h1>
                                                <p>Earn optimized rewards for staking cryptos, the software engineering leader at the forefront of Blockchain development</p>
                                                <div className="button-primary">Get Started</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 ">
                                            <img src={imgMockupApp} alt="" />
                                            <img id="background-mockup" src={imgBackgroundHero} alt="" />
                                        </div>
                                    </div>
                                </Hero>
                                <Media>
                                    <div className="box-media">
                                        <p>We are in all <br />media</p>
                                        <div className="logo-image">
                                            <img src={imgLogo1} alt="" />
                                            <img src={imgLogo2} alt="" />
                                            <img src={imgLogo3} alt="" />
                                            <img src={imgLogo1} alt="" />
                                            <img src={imgLogo2} alt="" />
                                            <img src={imgLogo3} alt="" />
                                        </div>
                                    </div>
                                </Media>
                            </div>
                        </div>
                    </div>
                </Header>
                <Crypto>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h2>Popular cryptos</h2>
                                        </div>
                                        <div className="col-lg-6">
                                                <p>List of cryptocurrencies that are being bought and sold right now, see below and click buy now to make your first transaction</p>
                                                <a href="">Get started <MdArrowForward /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="list-crypto">
                                    <ul>
                                        <li>
                                            <div className="item-crypto header">
                                                <div className="crypto">
                                                    <p>Cryptocurrency</p>
                                                </div>
                                                <div className="chart">
                                                    <p>Chart</p>
                                                </div>
                                                <div className="percent">
                                                    <p>Percent</p>
                                                </div>
                                                <div className="price">
                                                    <p>Price</p>
                                                </div>
                                                <div className="buy">
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                        <li>
                                            <div className="item-crypto">
                                                <div className="crypto">
                                                    <img src={imgBitcoinIcon} alt="" />
                                                    <div className="content">
                                                        <p className="title">Bitcoin</p>
                                                        <p className="subtitle">BTC</p>
                                                    </div>
                                                </div>
                                                <div className="chart">

                                                </div>
                                                <div className="percent">
                                                    <p>+2.25% <MdArrowOutward /></p>
                                                </div>
                                                <div className="price">
                                                    <p>$63,356 USD</p>
                                                </div>
                                                <div className="buy">
                                                    <a href="" className="button-primary"><span>Buy now</span> <MdArrowOutward /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                        <li>
                                            <div className="item-crypto">
                                                <div className="crypto">
                                                    <img src={imgEthereumIcon} alt="" />
                                                    <div className="content">
                                                        <p className="title">Ethereum</p>
                                                        <p className="subtitle">ETH</p>
                                                    </div>
                                                </div>
                                                <div className="chart">

                                                </div>
                                                <div className="percent">
                                                    <p>+2.25% <MdArrowOutward /></p>
                                                </div>
                                                <div className="price">
                                                    <p>$63,356 USD</p>
                                                </div>
                                                <div className="buy">
                                                    <a href="" className="button-primary"><span>Buy now</span> <MdArrowOutward /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                        <li>
                                            <div className="item-crypto">
                                                <div className="crypto">
                                                    <img src={imgTetherIcon} alt="" />
                                                    <div className="content">
                                                        <p className="title">Tether</p>
                                                        <p className="subtitle">USDT</p>
                                                    </div>
                                                </div>
                                                <div className="chart">

                                                </div>
                                                <div className="percent">
                                                    <p>+2.25% <MdArrowOutward /></p>
                                                </div>
                                                <div className="price">
                                                    <p>$63,356 USD</p>
                                                </div>
                                                <div className="buy">
                                                    <a href="" className="button-primary"><span>Buy now</span> <MdArrowOutward /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                        <li>
                                            <div className="item-crypto">
                                                <div className="crypto">
                                                    <img src={imgBinanceIcon} alt="" />
                                                    <div className="content">
                                                        <p className="title">Binance</p>
                                                        <p className="subtitle">BNB</p>
                                                    </div>
                                                </div>
                                                <div className="chart">

                                                </div>
                                                <div className="percent">
                                                    <p>+2.25% <MdArrowOutward /></p>
                                                </div>
                                                <div className="price">
                                                    <p>$63,356 USD</p>
                                                </div>
                                                <div className="buy">
                                                    <a href="" className="button-primary"><span>Buy now</span> <MdArrowOutward /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                        <li>
                                            <div className="item-crypto">
                                                <div className="crypto">
                                                    <img src={imgXRPIcon} alt="" />
                                                    <div className="content">
                                                        <p className="title">XRP</p>
                                                        <p className="subtitle">XRP</p>
                                                    </div>
                                                </div>
                                                <div className="chart">

                                                </div>
                                                <div className="percent">
                                                    <p>+2.25% <MdArrowOutward /></p>
                                                </div>
                                                <div className="price">
                                                    <p>$63,356 USD</p>
                                                </div>
                                                <div className="buy">
                                                    <a href="" className="button-primary"><span>Buy now</span> <MdArrowOutward /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                        <li>
                                            <div className="item-crypto">
                                                <div className="crypto">
                                                    <img src={imgDashcoinIcon} alt="" />
                                                    <div className="content">
                                                        <p className="title">Dashcoin</p>
                                                        <p className="subtitle">DCN</p>
                                                    </div>
                                                </div>
                                                <div className="chart">

                                                </div>
                                                <div className="percent">
                                                    <p>+2.25% <MdArrowOutward /></p>
                                                </div>
                                                <div className="price">
                                                    <p>$63,356 USD</p>
                                                </div>
                                                <div className="buy">
                                                    <a href="" className="button-primary"><span>Buy now</span> <MdArrowOutward /></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Crypto>
                <WhatsNew>
                    <div className="container">
                        <div className="heading">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-6">                
                                            <h2>Whats new we provide for you crypto wallet</h2>
                                        </div>
                                        <div className="col-lg-6 link">
                                            <a href="" className="button-outline">Get started <MdArrowForward /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="list-tools">
                                        <div className="item-tool">  
                                            <div className="box-icon">
                                                <img src={imgSafe} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>User Safe Assets Fund</h4>
                                                <p>Hycoin stores 10% of all trading fees in a secure asset fund to protect part of users' funds.</p>
                                            </div>
                                        </div>
                                        <div className="item-tool">  
                                            <div className="box-icon">
                                                <img src={imgControl} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>Custom Access Control</h4>
                                                <p>For your peace of mind and security, control allows you to restrict which devices and addresses can access your account.</p>
                                            </div>
                                        </div>
                                        <div className="item-tool">  
                                            <div className="box-icon">
                                                <img src={imgEncryption} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>Advanced Data Encryption</h4>
                                                <p>Your transaction data is protected by end-to-end encryption, ensuring that only you have access to your personal information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </WhatsNew>
                <Customer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="heading">
                                            <h2>What customers say about our company</h2>
                                            <div className="control">
                                                <div className="item-control right">
                                                    <MdArrowBack />
                                                </div>
                                                <div className="item-control left">
                                                    <MdArrowForward />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="slide">
                                            <Swiper
                                                spaceBetween={16}
                                                slidesPerView={'auto'}
                                                onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => console.log(swiper)}
                                            >
                                                <SwiperSlide>
                                                    <div className="bar">
                                                        <img className="business" src={imgWebflow} alt="" />
                                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                                    </div>
                                                    <div className="user">
                                                        <img src={imgCustomer} alt="" />
                                                        <div className="content">
                                                            <p>Naomi Evans</p>
                                                            <span>Webflow, CTO at Software Webflow</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="bar">
                                                        <img className="business" src={imgWebflow} alt="" />
                                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                                    </div>
                                                    <div className="user">
                                                        <img src={imgCustomer} alt="" />
                                                        <div className="content">
                                                            <p>Naomi Evans</p>
                                                            <span>Webflow, CTO at Software Webflow</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="bar">
                                                        <img className="business" src={imgWebflow} alt="" />
                                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                                    </div>
                                                    <div className="user">
                                                        <img src={imgCustomer} alt="" />
                                                        <div className="content">
                                                            <p>Naomi Evans</p>
                                                            <span>Webflow, CTO at Software Webflow</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="bar">
                                                        <img className="business" src={imgWebflow} alt="" />
                                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                                    </div>
                                                    <div className="user">
                                                        <img src={imgCustomer} alt="" />
                                                        <div className="content">
                                                            <p>Naomi Evans</p>
                                                            <span>Webflow, CTO at Software Webflow</span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Customer>
                <Banner>
                    <div className="box-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="content">
                                        <h2>Start now to grow your <br /> portfolio fast and easy</h2>
                                        <p>Click the button below to download our app and start<br /> your well-planned future</p>
                                        <div className="buttons">
                                            <div className="button google-play">
                                                <FaGooglePlay />
                                                <p>Google Play</p>
                                            </div>
                                            <div className="button app-store">
                                                <FaApple />
                                                <p>Apple store</p>
                                            </div>
                                        </div>
                                        <img className="logo-yellow one" src={imgLogoYellow} alt="" />
                                        <img className="logo-yellow two" src={imgLogoYellow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Banner>
                <Footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="box-footer">
                                    <p>Resources</p>
                                    <ul>
                                        <li>
                                            <a href="">Link One</a>
                                        </li>
                                        <li>
                                            <a href="">Link Two</a>
                                        </li>
                                        <li>
                                            <a href="">Link Three</a>
                                        </li>
                                        <li>
                                            <a href="">Link Four</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="box-footer">
                                    <p>Resources</p>
                                    <ul>
                                        <li>
                                            <a href="">Link One</a>
                                        </li>
                                        <li>
                                            <a href="">Link Two</a>
                                        </li>
                                        <li>
                                            <a href="">Link Three</a>
                                        </li>
                                        <li>
                                            <a href="">Link Four</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="box-footer">
                                    <p>Resources</p>
                                    <ul>
                                        <li>
                                            <a href="">Link One</a>
                                        </li>
                                        <li>
                                            <a href="">Link Two</a>
                                        </li>
                                        <li>
                                            <a href="">Link Three</a>
                                        </li>
                                        <li>
                                            <a href="">Link Four</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 d-block d-lg-flex justify-content-end">
                                <div className="box-media">
                                    <img src={imgLogotype} alt="" />
                                    <ul>
                                        <li>
                                            <a href=""><BsFacebook /></a>
                                        </li>
                                        <li>
                                            <a href=""><BsInstagram /></a>
                                        </li>
                                        <li>
                                            <a href=""><BsTwitter /></a>
                                        </li>
                                        <li>
                                            <a href=""><BsLinkedin /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="footer-bar">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p>2021 Relume. All right reserved.</p>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <a href="">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="">Terms of Services</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </Footer>
            </main>
        </>
    )
}

export default Home;