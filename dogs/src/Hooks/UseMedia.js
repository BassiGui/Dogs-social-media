import React from 'react';

const UseMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatche() {
      //valida se entrou no menu mobile
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatche();
    window.addEventListener('resize', changeMatche);
    return () => {
      window.removeEventListener('resize', changeMatche);
    };
  }, [media]);

  return match;
};

export default UseMedia;
