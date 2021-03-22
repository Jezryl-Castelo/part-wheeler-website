
import '../contact/contact.styles.css';
import email from '../../assets/img/email.svg';
import phone from '../../assets/img/phone-voice.svg';

const Contact = () => {
    return(
        <div>
            <h3 className="contact-title">
                Contact Us
            </h3>
            <div className="contact-container">
              <div     className="contact-questions">
                <h5 className="question">
                Do you have any questions?
                </h5>
                <h5 className="question">
                Need to return an item?
                </h5>
              </div>
              <div className="contact-info-container">
                <div className="contact-info">
                  <img className="icon" src={email} alt="email icon" />
                  <p className="contact">partwheeler@gmail.com</p>
                </div>
                <div className="contact-info">
                  <img className="icon" src={phone} alt="phone icon" />
                  <p className="contact">720.238.9078</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;