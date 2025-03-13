import copy from '../assets/copy.jpg';

const Howto = () => {
    return (
        <section id="how">
          <h2>
              How to download
          </h2>
          <div className="steps">
              <h4>Copy link of a video you want to download</h4>
              <img src={copy} alt=""></img>
          </div>
      </section>
    )
}

export default Howto