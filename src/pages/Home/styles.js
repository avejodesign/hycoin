import styled from 'styled-components'

export const Header = styled.header`

    nav {
        display: grid;
        grid-template-columns: 1fr 200px;
        padding: 20px 0;

        .group-content {
            display: flex;
            align-items: center;
        }

        ul {
            display: flex;
            color: var(--color-white);
            list-style-type: none;
            gap: 0 20px;
            margin-bottom: 0;

            li {


                &.active {
                    opacity: 1;
                }

                opacity: 0.6;
            }
        }

        .buttons {
            margin: 0 0 0 auto;

            a {
                color: var(--color-dark);
                margin-right: 10px;
                background: var(--color-white);
                padding: 10px 20px;
                border-radius: 10px;

            }
        }
    }

    @media (max-width: 576px) { 
        nav {
            ul {
                display: none;
            }
        }
    }
`;

export const Hero = styled.article`
    color: var(--color-white);

    h1 {
        white-space: nowrap;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-bottom: 300px;

        p {
            font-size: 16px;
            margin: 10px 0;
        }
    }
    
    img {
        width: 100%;

        &:nth-child(1) {
            position: relative;
            right: -20px;
        }
        
    }

    #background-mockup {
        position: absolute;
        top: 0;
        right: 0;
        width: 500px;
        z-index: -1;
        
    }

    @media (max-width: 576px) {
        h1 {
            font-size: 40px;
            margin-top: 20px;
        }   

        .content {
            height: 100% !important;
            margin-bottom: 0;
            padding-bottom: 100px;
            p {
                font-size: 14px;
            }
        }

        #background-mockup {
            top: initial;
            width: 420px;
            left: 50%;
            transform: translateY(-100px) translateX(-50%);
        }

        img {

            &:nth-child(1) {
                right: 0;
            }
            
        }
    }
    
`;

export const Media = styled.div`
    
    color: var(--color-white);
    border-top: 1px solid rgba(255, 255, 255, 0.17);
    overflow: hidden;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        height: 100%;
        background: linear-gradient(270deg, #011627 30%, rgba(1, 22, 39, 0.01) 100%);
    }

    .box-media {
        display: flex;
        align-items: center;
        width: 2400px;
        padding: 20px 0;
    }

    p {
        margin-bottom: 0;
        margin-right: 60px;
        white-space: nowrap;
    }

    .logo-image {
        width: 2400px;

        img {
            margin-right: 60px;
        }
    }

    @media (max-width: 576px) {
        .box-media {
            flex-direction: column;
            align-items: flex-start;

            p {
                margin-right: 0;

                br {
                    display: none;
                }
            }
        }
    }
`;

export const Crypto = styled.section`
    background: var(--color-white);
    padding: 70px 0;

    .heading { 
        p {
            font-size: 16px;
            opacity: 0.6;
        }

        a {
            color: var(--color-dark);
            display: flex;
            align-items: center;
            margin-bottom: 0;
            font-size: 14px;

            svg {
                margin-left: 10px;
            }
        }
    }

    .list-crypto {
        margin-top: 60px;
        ul {
            padding-left: 0;

            li {
                list-style-type: none;
                padding: 0px 0;
                .item-crypto {
                    display: grid;
                    grid-template-columns: 1fr 1fr 200px 1fr 100px;
                    align-items: center;

                    p {
                        margin-bottom: 0;
                        font-size: 16px;
                    }
                }

                &:nth-child(1) {
                    padding-bottom: 0;
                    p {
                        font-weight: 500;
                        font-size: 16px;
                    }

                    .percent {
                        color: inherit;
                    }
                }

                .crypto {
                    
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 10px;
                    }

                    p.title {
                        font-size: 18px;
                        font-weight: 500;
                    }

                    p.subtitle {
                        font-size: 13px;
                    }
                }

                .percent {
                    color: #138B1F;
                   
                }

                .buy {
                    
                    a {
                        svg {
                            display: none;
                        }
                    }
                }

            }
        }
    }

    @media (max-width: 576px) { 
        padding: 40px 0;

        .heading { 
            p {
                font-size: 12px;
            }
        }

        .list-crypto { 
            margin-top: 20px;

            .item-crypto {
                grid-template-columns: 1fr 1fr auto !important;
                grid-template-rows: 1fr 1fr;
                grid-template-areas:
                    "crypto price buy"
                    "crypto percent buy";
                grid-gap: 0 20px;

                &.header {
                    div:not(.crypto) {
                        display: none;
                    }
                }

                p {
                    font-size: 14px;
                    font-weight: 500;
                }

                .crypto {
                    grid-area: crypto;
                }

                .percent {
                    grid-area: percent;
                    text-align: right;
                }

                .price {
                    grid-area: price;
                    text-align: right;
                }

                .buy {
                    
                    grid-area: buy;
                    span {
                        display: none;
                    }
                    a {
                        padding: 10px 13px;
                        svg {
                            display: initial;
                        }
                    }
                }
            }
        }
    }
`;

export const WhatsNew = styled.section`
    color: var(--color-white);
    padding: 70px 0;

    .link {
        display: flex;
        align-items: flex-end;
        justify-content: end;

        a {
            border: 1px solid var(--color-white);
        }
    }

    .list-tools {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        margin-top: 70px;

        .item-tool {
            height: 390px;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 30px;
            position: relative;

            &:hover {
                transition: background 0.2s linear;
                background: var(--color-primary);

                p, h4 {
                    color: var(--color-dark);
                }

                .box-icon {
                    background: rgba(0, 0, 0, 0.1);
                }
            }

            &:before {
                content: "";
                position: absolute;
                top: 40px;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("./../../src/assets/background-whats-new.png") no-repeat;
            }

            .box-icon {
                padding: 20px;
                background: rgba(255, 255, 255, 0.1);
                width: fit-content;
                border-radius: 100px;

                img {
                    width: 50px;
                }
            }

            h4 {
                font-size: 28px;
            }

            p {
                font-size: 14px;
            }
        }
    }

    @media (max-width: 576px) { 
        padding: 40px 0;

        .list-tools {
            grid-auto-flow: column !important;
            overflow: auto hidden !important;
            scroll-snap-type: x mandatory !important;
            gap: 12px !important;
            padding: 0 14px 0 0;
            scroll-padding: 10px;
            margin-top: 40px;

            .item-tool { 
                width: 320px;
                height: 320px;
                padding: 20px;

                .box-icon { 
                    padding: 14px;

                    img {
                        width: 40px;
                    }
                }

                h4 {
                    font-size: 24px;
                }

                p {
                    font-size: 14px;
                }
            }
        }

        .link {
            align-items: flex-start;
            justify-content: start;

            a {
                margin-top: 20px;
            }
        }
    }
`;

export const Customer = styled.section`
    color: var(--color-white);
    margin-top: 60px;
    overflow: hidden;
    padding-bottom: 70px;

    .heading {
        h2 {
            margin-bottom: 40px;
        }

        .control {
            display: flex;

            .item-control {
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.17);
                margin-right: 20px;

                

                &:hover {
                    background: rgba(255, 255, 255);

                    svg {
                        color: var(--color-dark);
                    }
                }

                svg {
                    font-size: 20px !important; 
                }

            }
        }
    }

    .slide {
        width: 2000px;
    }

    .swiper {
        .swiper-wrapper {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    
            .swiper-slide {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 550px;
                background: rgba(255, 255, 255, 0.05);
                height: 300px;
                padding: 25px 28px;
                transition:color 0.2s linear, background 0.2s linear, filter 0.2s linear ;

                img.business {
                    margin-bottom: 10px;
                }

                p {
                    font-style: italic;
                    font-size: 16px;
                    font-weight: 400;
                    margin-bottom: 40px;
                }

                .user {
                    display: flex;
                    align-items: center;

                    img {
                        margin-right: 16px;
                    }

                    .content {
                        p {
                            font-style: normal;
                            font-weight: 600;
                            margin-bottom: 0;
                        }
                        span {
                            opacity: 0.6;
                        }
                    }
                }

                &:hover {
                    img.business {
                        filter: brightness(0);
                    }

                    background: var(--color-primary);
                    color: #000;
                    p {
                        color: #000;
                    }
                }
            }

        }
    }

    @media (max-width: 576px) {  
        margin-top: 20px !important;
        padding-bottom: 40px !important;
        
        .heading {
            h2 {
                margin-bottom: 20px;
            }
        }

        .swiper {
            .swiper-wrapper { 
                margin-top: 30px;
                
                .swiper-slide {
                    width: 380px;
                }
            }
        }
    }
`;

export const Banner = styled.section`
    background: var(--color-white);
    padding: 70px 0;

    .content {
        background: var(--color-dark);
        color: var(--color-white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 70px 0;
        text-align: center;
        position: relative;
        overflow: hidden;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: -50px;
            width: 500px;
            height: 500px;
            transform: scale(1.2);
            background: url("./../../src/assets/background-banner.png") no-repeat;
        }

        &:after {
            content: "";
            position: absolute;
            top: 0;
            left: -50px;
            width: 500px;
            height: 500px;
            background: url("./../../src/assets/background-banner.png") no-repeat;
            transform: scale(1.2) rotate(180deg);
        }

        .logo-yellow {
            position: absolute;
            top: 30px;
            right: 30px;

            &.two {
                top: initial;
                left: initial;
                bottom: 30px;
                left: 30px;
            }
        }


        h2 {
            font-size: 48px;
            margin-bottom: 24px;
        }

        p {
            font-size: 16px;
            opacity: 0.6;
        }

        .buttons {
            display: flex;
            align-items: center;
            margin-top:24px; 

            .button {
                background: var(--color-white);
                border-radius: 10px;
                color: var(--color-dark);

                display: flex;
                align-items: center;
                justify-content: center;

                padding: 10px 20px;
                cursor: pointer;

                &:hover {
                    opacity: 0.6;
                }

                svg {
                    margin-right: 10px;
                }

                p {
                    margin-bottom: 0;
                    opacity: 1;
                    font-weight: 600;
                }

                &:nth-child(2) {
                    background: none;
                    color: var(--color-white);
                    border: 1px solid var(--color-white);
                    margin-left: 10px;
                }
            }
        }
    }

    @media (max-width: 576px) { 
        padding: 30px 0;

        .content {
            h2 {
                font-size: 26px;
                margin-bottom: 10px;
            }

            p {
                font-size: 14px;
                opacity: 0.6;
            }

            &:after {
                display: none;
            }

            &:before {
                width: 300px;
                height: 300px;
            }

            .logo-yellow {
                width: 20px;
            }
        }
    }
`;

export const Footer = styled.section`
    padding: 30px 0;

    hr {
        border: 1px solid var(--color-white)
    }

    .box-footer {
        color: var(--color-white);
        p {
            font-size: 16px;
            opacity: 0.6;
        }

        ul {
            list-style-type: none;
            padding: 0;
            
            li {
                margin-bottom: 10px;
                a {
                    color: var(--color-white);

                    &:hover {
                        opacity: 0.6;
                    }
                }
            }
        }
    }

    .box-media {
        text-align: right;

        img {
            margin-bottom: 20px;
        }
    
        ul {
            display: flex;
            list-style-type: none;
            padding: 0;

            li { 
                margin-left: 16px;
                a {
                    color: var(--color-white);

                    &:hover {
                        opacity: 0.6;
                    }

                    svg {
                        font-size: 16px;
                    }
                }
            }
        }
    }

    .footer-bar {
        p {
            color: var(--color-white);
            opacity: 0.6;
        }

        ul {
            display: flex;
            list-style-type: none;
            padding: 0;

            li {
                margin-right: 16px;
                a {
                    color: var(--color-white);

                    &:hover {
                        opacity: 0.6;
                    }
                }
            }
        }
    }

    @media (max-width: 576px) { 
        .box-media {
            text-align: left;
        }
    }
`;