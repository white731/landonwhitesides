import './App.css';
import instagramIcon from '../src/images/Instagram-Icon.png'
import youTubeIcon from '../src/images/YouTube.png'
import landonHeadShot from '../src/images/main_image.jpg'
import styled from 'styled-components';
import { FlipCard } from './components/FlipCard';
import pricing from './images/pricing.png'
import listenImage from './images/listen.png'
import textMeImage from './images/text_me.png'
import thatsLife from './Audio/thatsLife.mp3'
import girlFromIpanema from './Audio/girlFromIpanema.mp3'
import nicenEasy from './Audio/NicenEasy.mp3'

const Image = styled.img`
width: 50px;
padding: 10px;
`




function App() {

  const AboutMe = () => {
      return (
        <p>
          Landon Whitesides is a Vocalist, Guitarist, and Instructor. He has played a lead role in several plays including the Secret Garden, Aladdin, and High School Musical. He is the winner of two vocal scholarships including the Dr. Mae Jeong Scholarship Award. Through college, he was the lead singer in several bands including Company of Strangers. Most recently he was the lead singer in the band Identity Crisis which opened for Collin Raye in 2021. Musical styles include Indie Folk, Folk Rock, Jazz, and Big Band. He is most notably known for his Frank Sinatra impressions. He is happily married and a father of 3 beautiful children.
        </p>
      )
  }

  const SongsISing = () => {
    return(
      <>
      <p>That's Life - Frank Sinatra</p>
      <audio controls>
        <source src={thatsLife}/>
        Your browser does not support the audio element.
      </audio>
      <p>The Girl From Ipanema - Frank Sinatra</p>
      <audio controls>
        <source src={girlFromIpanema}/>
        Your browser does not support the audio element.
      </audio>
      <p>Nice 'n' Easy - Frank Sinatra</p>
      <audio controls>
        <source src={nicenEasy}/>
        Your browser does not support the audio element.
      </audio>
  </>
    )
  }

  const Pricing = () => {
    return(
      <>
        <p>$400.00 - Live Vocals and Recorded Backtrack"</p>
        <p>$600.00 - Live Vocals accompanied by live piano</p>
        <p>$800.00 - Live Vocals, Piano and 1 other live instrument</p>
        <p>$1000.00 - Live Vocals, Piano and 2 other live instruments</p>
        <p>ricing represents performances not exceeding 2.5 hours in length</p>
      </>
    )
  }

  const TextMe = () => {
    return (
      <p> Text or Call me at 208 312 8550 for questions and inquiries </p>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        
        <h1 style={{margin:0, marginTop: 50, marginBottom: 20}}>
          Landon Whitesides
        </h1>
        <FlipCard
          image={landonHeadShot} 
          title="About Me" 
          component={AboutMe()}
          alt ="Landon Whitesides Picture"
        />
        <FlipCard
          image={listenImage}
          title="Song Samples"
          description=""
          alt = "Song Samples"
          component = {SongsISing()}
        />
        <FlipCard
          image={pricing}
          title="Pricing"
          component = {Pricing()}
          alt="pricing summary"
        />
        <FlipCard
          image={textMeImage}
          title="Text me"
          component = {TextMe()}
          alt="Text Me"
        />
        <div style={{margin:"10px"}}>
          <a href="https://www.instagram.com/landon.whitesides/" target="_blank" rel="noreferrer"><Image width="50px" src={instagramIcon}/></a>
          <a href="https://www.youtube.com/channel/UCs3i6VAMPkWq6LhmgEVEuug" target="_blank" rel="noreferrer" ><Image width="50px" src={youTubeIcon}/></a>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >

        </div>
      </header>
    </div>
  );
}

export default App;
