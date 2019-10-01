import * as React from 'react';

const Public: React.FunctionComponent = () => {
  const behance = 'https://www.behance.net/nenjotsuu';
  const github = 'https://github.com/nenjotsu';
  return (
    <section className="public-section">
      <hr className="_border-bottom-separator" />
      <div className="author-information">
        <span className="title">Renenjo Valente</span>
        <span className="position _spacer">Senior Front End Engineer</span>
        <span className="position _spacer">+639175171186</span>
        <span className="position _spacer">
          <a href={behance} target="_open">
            {behance}
          </a>
          <br />
          <a href={github} target="_open">
            {github}
          </a>
        </span>
      </div>
    </section>
  );
};

export default Public;
