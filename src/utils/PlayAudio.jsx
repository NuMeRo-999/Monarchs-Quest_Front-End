
const PlayAudio = (src, volume=1, loop=false) => {
  const audio = new Audio(src);
  audio.loop = loop;
  audio.volume = volume;
  audio.play();
}

export default PlayAudio