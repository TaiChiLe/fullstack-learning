function Body() {
  const images = [
    'https://img.freepik.com/premium-photo/cute-3d-cat-cartoon-character-generative-ai_923640-2.jpg',
    'https://img.freepik.com/premium-photo/cute-cartoon-cat-character-generative-ai_570929-3968.jpg',
    'https://img.freepik.com/premium-photo/grumpy-cat-cartoon-character-generative-ai_934475-8785.jpg',
  ];
  return (
    <div>
      <div>
        Once upon a time, in a quaint town, lived{' '}
        <a href="https://en.wikipedia.org/wiki/Whiskers">Whiskers</a>, a
        mischievous tabby. Sneaking out every night, he stumbled upon a secret
        cat gathering. Among them were Fluffy, the Persian, and Boots, the
        adventurous tomcat.
      </div>

      <div class="img-gallery text-center">
        {images.map((item, index) => {
          return <img key={index} src={item} alt="" />;
        })}
      </div>
      <div>
        They shared tales of their escapades until interrupted by{' '}
        <a href="https://en.wikipedia.org/wiki/Whiskers">Mrs. Whiskers</a>, the
        neighborhood cat lady. She scolded them, threatening to report to the
        mayor. The cats scattered, leaving{' '}
        <a href="https://en.wikipedia.org/wiki/Whiskers">Whiskers</a> to face
        the consequences alone.
      </div>

      <div>
        <a href="https://en.wikipedia.org/wiki/Whiskers">Whiskers</a> learned
        that adventure was best shared with friends. With a flick of his tail,
        he returned home, ready for new adventures with his feline companions.
        And so, the legend of{' '}
        <a href="https://en.wikipedia.org/wiki/Whiskers">Whiskers</a>, the
        adventurous tabby, lived on.
      </div>
    </div>
  );
}

export default Body;
