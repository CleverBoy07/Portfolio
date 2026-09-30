import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Chaitanya Batole </span>
        from <span className={s.purple}>Ahilyangar, Maharashtra</span>
        <br />
        Software Developer{' '}
        <br />
        using Backend and Frontend languages.
        <br />
        <br />
        I am pursuing the Master Of Technology in Artificial Intelligence from Delhi Technological University, New Delhi.
        <br />
        I have completed my Btech in Information Technology from Gvernment College of Engineering, Chh. Sambhajinagar. Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Internet Exploration
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> GYM
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
