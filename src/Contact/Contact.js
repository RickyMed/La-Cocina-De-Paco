import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="l-heading is-subhead is-center m-2 pt-1">Contact</h2>
      <div className="content">
        <div className="contact-info mb-2">
          <h3 className="s-heading is-left is-uppercase is-bolder">Corporate</h3>
          <p className="is-left mr-2">12345 ABC Ave. Perris, CA 92570</p>
          <div className="phone-number">
            {/* <a className="is-link" href="tel: 951-222-2290">P. (555) 555-5555</a> */}
            <h4 className="is-red"> (555) 555-5555</h4>
          </div>
          {/* <div className="fax-number">
            <a className="is-link" href="tel: 951-222-2297">F. (951) 222-2297</a>
          </div> */}
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/xjveqpap" method="POST">
            <input className="form-item" type="text" name="Name" placeholder="Name"/>
            <input className="form-item" type="email" name="Email" placeholder="Email"/>
            <input className="form-item" type="text" name="Subject" placeholder="Subject"/>
            <textarea className="form-item" name="Message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            <input className="form-item btn" type="submit" value="Send"></input>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
