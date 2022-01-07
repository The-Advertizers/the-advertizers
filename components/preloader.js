import styled from "styled-components";

const Screen = styled.div`
  --color-primary: #fff;
  --color-secondary: #000;
  --color-accent: #ffdd00;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: var(--color-secondary);
  overflow: visible !important;

  .dot {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
    left: 15px;
    filter: blur(4px);
    background: var(--color-accent);
    border-radius: 50%;
    transform: translateX(0);
    animation: dot 2.8s infinite;
  }

  #animating-dots {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 142px;
    height: 40px;
    margin: -20px 0 0 -71px;
    background: var(--color-secondary);
    filter: contrast(20);
  }

  .dots {
    transform: translateX(0);
    margin-top: 12px;
    margin-left: 31px;
    animation: dots 2.8s infinite;
  }

  .dots span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    filter: blur(4px);
    background: var(--color-primary);
    border-radius: 50%;
  }


  @-moz-keyframes dot {
    50% {
      transform: translateX(96px);
    }
  }

  @-webkit-keyframes dot {
    50% {
      transform: translateX(96px);
    }
  }

  @-o-keyframes dot {
    50% {
      transform: translateX(96px);
    }
  }

  @keyframes dot {
    50% {
      transform: translateX(96px);
    }
  }

  @-moz-keyframes dots {
    50% {
      transform: translateX(-31px);
    }
  }

  @-webkit-keyframes dots {
    50% {
      transform: translateX(-31px);
    }
  }

  @-o-keyframes dots {
    50% {
      transform: translateX(-31px);
    }
  }

  @keyframes dots {
    50% {
      transform: translateX(-31px);
    }
  }
`;


export default function Preloader() {
    return (
        <>
            <Screen>
                <div id="animating-dots">
                    <span className="dot"/>
                    <div className="dots">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </Screen>
        </>
    );
}
