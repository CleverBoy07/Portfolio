import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLaptopCode,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a AIML Software Developer with a passion for building innovative and efficient AI solutions. I have a strong foundation in both backend and frontend development with AI integration, allowing me to create seamless user experiences and robust applications.
              <br />
              Developing a Good taste Website using algorithms.
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  C, Cpp, Python, SQL.
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              integrating various <br />
              LLMs, Generative AI, Agentic AI & Multi-Agent Systems, LangGraph, RAG, Prompt
              Engineering, Vector Databases (Qdrant), Groq, Ollama.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products With Integration of AI </b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/CleverBoy07"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/chaitanya.batole.5"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/Chaitanay66"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/chaitanya-batole-62a42a22b/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://leetcode.com/u/Chaitanyabatole29/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="Leetcode"
            >
              <FaLaptopCode />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
