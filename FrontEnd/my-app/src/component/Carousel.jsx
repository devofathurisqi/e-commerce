import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../style/style.css"
// "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/11/7/03fd1eec-a1c2-4ecb-8b1b-75abc1eb3114.jpg.webp?ect=4g"
// "https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/11/7/e2e4f826-7f70-4b6e-b64a-e6aa75871f9d.jpg.webp?ect=4g"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='style'>
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/11/7/03fd1eec-a1c2-4ecb-8b1b-75abc1eb3114.jpg.webp?ect=4g"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/11/7/e2e4f826-7f70-4b6e-b64a-e6aa75871f9d.jpg.webp?ect=4g"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel