import { useState, useEffect } from "react";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  function changeImage(e) {
    setCurrentImage(e.target.value);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 3);
    }, 5_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {/* Radio options */}
      <input
        className="hidden"
        type="radio"
        name="slider"
        id="item-1"
        value={0}
        checked={parseInt(currentImage) === 0}
        onChange={changeImage}
      ></input>
      <input
        className="hidden"
        type="radio"
        name="slider"
        id="item-2"
        value={1}
        checked={parseInt(currentImage) === 1}
        onChange={changeImage}
      ></input>
      <input
        className="hidden"
        type="radio"
        name="slider"
        id="item-3"
        value={2}
        checked={parseInt(currentImage) === 2}
        onChange={changeImage}
      ></input>

      {/* Cards */}
      <div className="carousel-cards">
        <label className="carousel-card" htmlFor="item-1" id="carousel-1">
          <img
            className="carousel-img"
            src="carousel/pexels-andrea-piacquadio-3823488.webp"
            alt="img"
          />
        </label>

        <label className="carousel-card" htmlFor="item-2" id="carousel-2">
          <img
            className="carousel-img"
            src="carousel/pexels-cottonbro-studio-4626338.webp"
            alt="img"
          />
        </label>

        <label className="carousel-card" htmlFor="item-3" id="carousel-3">
          <img
            className="carousel-img"
            src="carousel/pexels-vlada-karpovich-4050388.webp"
            alt="img"
          />
        </label>
      </div>
    </div>
  );
}

export default Carousel;
