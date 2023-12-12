const SolarSystem = () => {
  return (
    <main>
      <div className="solarSystem">
        <div className="sun">
          <img
            src="https://64.media.tumblr.com/dcd058bf7e840210ba8a46e6c92a9c65/tumblr_msy85uhhKy1rk0k2jo1_r1_500.gif"
            alt="Sun"
          />
        </div>
        <div className="mercury">
          <img
            src="https://media4.giphy.com/media/l0HlO4V8iCRME3i0g/200w.gif?cid=6c09b952gptchj478sghvl6regmp9kktyjf2h2f9dhv3g89i&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Mercury"
          />
        </div>
        <div className="venus">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/VenusDonMiguel.gif"
            alt="Venus"
          />
        </div>
        <div className="earth">
          <div className="earthContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
              alt="Earth"
            />
            <div className="moon">
              <img
                src="https://media3.giphy.com/media/aN9GqoR7OD3nq/giphy.gif?cid=ecf05e477mts7reybbrdn0qa23lta6hip9581ibjnijanu88&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="Moon"
              />
            </div>
          </div>
        </div>
        <div className="mars">
          <img
            src="https://www.schoolsobservatory.org/sites/default/files/astro/mars_r.gif"
            alt="Mars"
          />
        </div>
        <div className="jupiter">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jupiter_Rotation_Movie_-_Hubble_2015.gif/640px-Jupiter_Rotation_Movie_-_Hubble_2015.gif"
            alt="Jupiter"
          />
        </div>
        <div className="saturn">
          <img
            src="https://www.schoolsobservatory.org/sites/default/files/astro/sat_r.gif"
            alt="Saturn"
          />
        </div>
        <div className="uranus">
          <img
            src="https://bestanimations.com/media/planets/651115816uranus-planet-animation.gif"
            alt="Uranus"
          />
        </div>
        <div className="neptune">
          <img
            src="https://www.schoolsobservatory.org/sites/default/files/astro/neptune_r.gif"
            alt="Neptune"
          />
        </div>
      </div>
    </main>
  );
};

export default SolarSystem;
