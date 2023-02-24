import { useState } from "react";
import { useEffect } from "react";

function Carousel() {
  const [firstTime, setFirstTime] = useState(true);
  const [currentImage, setCurrentImage] = useState(1);
  useEffect(() => {
    setFirstTime(false);
  }, []);

  function changeImage(e) {
    setCurrentImage(e.target.value);
  }

  return (
    <div className="carousel-container">
      {/* Radio options */}
      <input
        className="hidden"
        type="radio"
        name="slider"
        id="item-1"
        value={1}
        checked={firstTime || parseInt(currentImage) === 1}
        onChange={changeImage}
      ></input>
      <input
        className="hidden"
        type="radio"
        name="slider"
        id="item-2"
        value={2}
        onChange={changeImage}
      ></input>
      <input
        className="hidden"
        type="radio"
        name="slider"
        id="item-3"
        value={3}
        onChange={changeImage}
      ></input>

      {/* Cards */}
      <div className="carousel-cards">
        <label className="carousel-card" htmlFor="item-1" id="carousel-1">
          <img
            class="carousel-img"
            src="carousel/pexels-andrea-piacquadio-3823488.jpg"
            alt="img"
          />
        </label>

        <label className="carousel-card" htmlFor="item-2" id="carousel-2">
          <img
            class="carousel-img"
            src="carousel/pexels-cottonbro-studio-4626338.jpg"
            alt="img"
          />
        </label>

        <label className="carousel-card" htmlFor="item-3" id="carousel-3">
          <img
            class="carousel-img"
            src="carousel/pexels-vlada-karpovich-4050388.jpg"
            alt="img"
          />
        </label>
      </div>
    </div>
  );
}

export default Carousel;
