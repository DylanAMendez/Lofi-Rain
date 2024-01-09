
import './App.css'
import BackgroundVideo from './components/BackgroundVideo'
import AudioControl from './components/AudioControl'

import videoRain from './assets/video_background/videoRain.mp4'

import musicBackgroundTheWeekend from './assets/music/the-weekend.mp3'
import musicBGTokyoCafe from './assets/music/tvari-tokyo-cafe.mp3'
import musicRainChill from './assets/music/rain-chill.mp3'

import imageGitHub from './assets/images/github.png'
import imageMail from './assets/images/mail.png'
import imageLinkedin from './assets/images/linkedin.png'
import imageWebsite from './assets/images/website.png'
import { useEffect } from 'react'




function App()
{
  return (
    <main>

      <div className='flex flex-col items-center my-20 lg:my-20'>
        <h1 className=' mb-10 text-[#a7c1c950] font-bold '>Relax and enjoy the lofi rain</h1>

        <svg width="100px" height="100px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"><path fill="#0000004f" d="M356.308 343.349a9.901 9.901 0 0 1-7.023-2.909c-3.879-3.879-3.879-10.168 0-14.047l33.274-33.274c3.879-3.879 10.168-3.879 14.047 0s3.879 10.168 0 14.047l-33.274 33.274a9.905 9.905 0 0 1-7.024 2.909zM75.146 425.071l36.836-36.836c3.879-3.879 3.879-10.168 0-14.047c-3.88-3.878-10.168-3.88-14.046 0l-36.837 36.836c-3.878 3.879-3.878 10.168 0 14.047a9.903 9.903 0 0 0 7.023 2.909a9.901 9.901 0 0 0 7.024-2.909zm32.977 73.948l36.836-36.836c3.879-3.879 3.879-10.168 0-14.047c-3.879-3.878-10.168-3.88-14.046 0l-36.837 36.836c-3.878 3.879-3.878 10.168 0 14.047a9.903 9.903 0 0 0 7.023 2.909c2.542 0 5.085-.97 7.024-2.909zM79.792 332.445l36.005-36.004c3.878-3.879 3.878-10.168 0-14.047c-3.879-3.879-10.167-3.879-14.047 0l-36.004 36.004c-3.878 3.879-3.879 10.168 0 14.047a9.903 9.903 0 0 0 7.023 2.909a9.899 9.899 0 0 0 7.023-2.909zm345.795-185.298c-5.053 0-9.959.626-14.654 1.784a63.434 63.434 0 0 0 1.62-14.204c0-34.961-28.341-63.302-63.302-63.302a62.995 62.995 0 0 0-35.749 11.065C301.627 36.737 260.053 2.954 210.586 2.954c-58.72 0-106.322 47.602-106.322 106.322c-44.148 0-79.937 35.714-79.937 79.862c0 44.148 35.789 79.862 79.937 79.862h98.71l-61.37 61.445c-3.878 3.879-3.878 10.205 0 14.084c1.939 1.939 4.481 2.928 7.023 2.928s5.084-1.035 7.023-2.975L231.067 269h78.215l-43.608 43.683c-3.879 3.879-3.879 10.205 0 14.084c1.939 1.939 4.481 2.928 7.023 2.928s5.084-1.035 7.023-2.975L337.376 269h88.211c33.69 0 61.002-27.236 61.002-60.927s-27.312-60.926-61.002-60.926zM183.058 423.469l62.763-62.764c3.878-3.879 3.878-10.168 0-14.047c-3.879-3.879-10.168-3.879-14.047 0l-62.763 62.764c-3.878 3.879-3.878 10.168 0 14.047c1.939 1.939 4.481 2.909 7.023 2.909s5.084-.97 7.024-2.909zm56.071 50.951l84.809-84.809c3.879-3.879 3.879-10.168 0-14.047s-10.168-3.879-14.047 0l-84.809 84.809c-3.878 3.879-3.878 10.168 0 14.047c1.939 1.939 4.481 2.909 7.023 2.909s5.084-.97 7.024-2.909z"></path></svg>

      </div>

      <BackgroundVideo src={videoRain} />

      <div className=' grid grid-cols-1  '>
        <AudioControl src={musicRainChill} />

        <h2 className=' my-10 mb-20  '>
          <a href="javascript:history.go(0)" className='text-blue-300 hover:text-cyan-500 '> 🔁 Restart Music 🔁 </a>
        </h2>
      </div>


      <footer className=''>

        <div className='flex flex-row gap-7 lg:gap-20 justify-center'>

          <a href="https://github.com/DylanAMendez" rel='noreferrer' target="_blank">
            <img
              src={imageGitHub}
              alt="GitHub Logo"
              title="GitHub"
              className='w-11'
            >
            </img>
          </a>


          <a href="mailto:dylanmendezdev@gmail.com?subject=¡Trabajemos Juntos!" rel='noreferrer' target="_blank">
            <img
              src={imageMail}
              alt="GitHub Logo"
              title="GitHub"
              className='w-11'
            >
            </img>
          </a>

          <a href="https://dylan-mendez.vercel.app" rel='noreferrer' target="_blank">
            <img
              src={imageWebsite}
              alt="Website Logo"
              title="Website"
              className='w-11'
            >
            </img>
          </a>

          <a href="https://www.linkedin.com/in/dylanmendez/" rel='noreferrer' target="_blank">
            <img
              src={imageLinkedin}
              alt="LinkedIn Logo"
              title="LinkedIn"
              className='w-11'
            >

            </img>
          </a>

        </div>



      </footer>





    </main>
  )
}

export default App
