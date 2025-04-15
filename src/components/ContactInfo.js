import React from 'react';

const ContactInfo = () => (
  <div style={{ margin: '30px 0' }}>
    <h3>Chris Mlinac</h3>
    <div>
      Email: <a href="mailto:chris@mlin.ac">chris@mlin.ac</a>
    </div>
    <div>
      Phone: +1<span> (512) </span>
      <span>436-0321</span>
    </div>
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
);

export default ContactInfo;
