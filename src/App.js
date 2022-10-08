import './App.css';
import instagramIcon from '../src/images/Instagram-Icon.png'
import youTubeIcon from '../src/images/YouTube.png'
import landonHeadShot from '../src/images/main_image.jpg'
import styled from 'styled-components';
import { FlipCard } from './components/FlipCard';
import pricing from './images/pricing.png'

const Image = styled.img`
width: 50px;
padding: 10px;
`




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Landon Whitesides
        </p>
        <FlipCard
          image={landonHeadShot} 
          title="About Me" 
          description="Landon Whitesides is a Vocalist, Guitarist, and Instructor. He has played a lead role in several plays including the Secret Garden, Aladdin, and High School Musical. He is the winner of two vocal scholarships including the Dr. Mae Jeong Scholarship Award. Through college, he was the lead singer in several bands including Company of Strangers. Most recently he was the lead singer in the band Identity Crisis which opened for Collin Raye in 2021. Musical styles include Indie Folk, Folk Rock, Jazz, and Big Band. He is most notably known for his Frank Sinatra impressions. He is happily married and a father of 3 beautiful children." 
          alt ="Landon Whitesides Picture"
        />
        <FlipCard
          image={pricing}
          title="Pricing"
          description="$400.00 - Live Vocals and Recorded Backtrack"
          description2="$600.00 - Live Vocals accompanied by live piano"
          description3="$800.00 - Live Vocals, Piano and 1 other live instrument"
          description4="$1000.00 - Live Vocals, Piano and 2 other live instruments"
          description5="Pricing represents performances not exceeding 2.5 hours in length"
          alt="pricing summary"
        />
        <div style={{margin:"10px"}}>
          <a href="https://www.instagram.com/landon.whitesides/" target="_blank"><Image width="50px" src={instagramIcon}/></a>
          <a href="https://www.youtube.com/channel/UCs3i6VAMPkWq6LhmgEVEuug" target="_blank" ><Image width="50px" src={youTubeIcon}/></a>
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
