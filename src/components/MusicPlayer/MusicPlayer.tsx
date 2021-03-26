import { useState, useEffect } from "react";
import styled from 'styled-components';

const useAudio = () => {
  const [ audio ] = useState(new Audio('/audio/bgm.mp3'))
  const [ playing, setPlaying ] = useState(false)

  audio.volume = 0.33

  const toggle: any = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  },[playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));

    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    }
  },[])

  return [ playing, toggle ]
}

export default function MusicPlayer () {
    const [ playing, toggle ] = useAudio()

    return (
      <Container onClick={toggle}>
        <img src={`/images/${
          playing 
          ? `audio_playing`
          : `audio_pause`
        }.png`} style={{width: '100%', height: '100%', position: 'relative'}} />
      </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  z-index: 30;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`