import React from 'react';

function BusinessCard() {
  return (
    <article id="business-card" className="active">
      <h2 className="major">Contact Info</h2>
      <div style={{ margin: '30px 0' }}>
        <h3>Chris Mlinac</h3>
        <div>
          Email: <a href="mailto:chris@mlin.ac">chris@mlin.ac</a>
        </div>
        <div>Phone: (512) 436-0321</div>
        <div>
          Twitter:{' '}
          <a href="https://twitter.com/ichbindev" target="_blank">
            @ichbindev
          </a>
        </div>
        <div>
          Github:{' '}
          <a href="https://github.com/ichbindev" target="_blank">
            ichbindev
          </a>
        </div>
        <div>Discord: @CasAttack#7645</div>
      </div>
    </article>
  );
}

export default BusinessCard;
