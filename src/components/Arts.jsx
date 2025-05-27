import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import law from "./images/law.jpg";
import government from "./images/government.jpg";
import psychology from './images/psychology.jpg';
import journalism from './images/journalism.jpg';
import FineArts from './images/FineArts.jpg';
import socialwork from './images/socialwork.jpg';


const Arts = () => {
   const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    useEffect (()=>{
  Aos.init({ duration: 1000, once: false });
    },[])
  return (
    <>
      <div className="art-container">
        <div className="arts-heading flex justify-around text-center bg-[#DBFFCB] h-[83px]">
          <div
            className="back ml-[-10rem] mt-[2em] cursor-pointer"
            onClick={handleGoBack}
          >
            <MdArrowBack />
          </div>
          <div
            className="heading text-[35px] font-serif mt-[14px] mr-[7em]"
            data-aos="fade-down-right"
          >
            WELCOME TO ART PAGE
          </div>
        </div>
        <div className="Q mt-[53px] ml-[6em]">
          <h2 className="text-[26px] leading-[61px]">
            Why Choose ART After 10th?
          </h2>
          <p className="text-[16px] w-[68rem] font-serif">
            Arts is the stream for students interested in humanities, social
            sciences, languages, creativity, and public service. It offers a
            broad range of subjects that promote analytical thinking,
            creativity, and communication skills. Careers in civil services,
            law, design, media, psychology, and more await you.
          </p>
        </div>
        <div className="subjects mt-[53px] ml-[3em]">
          <h2 className="text-[26px] leading-[61px]">
            🏷️ Core Subjects in Commerce (11th & 12th)
          </h2>
          <ul className="text-[16px] font-serif ml-[42px]">
            <li className="">
              1. History : Study of past events, civilizations, and cultures.
            </li>
            <li>
              2. Political Science : Study of governance, politics, and systems.
            </li>
            <li>
              3. Sociology : Understanding human society and social behavior.
            </li>
            <li>4. Psychology : Scientific study of mind and behavior.</li>
            <li>5. Economics : (Retained, as it also fits Arts).</li>
            <li>
              6. Geography : Study of physical features and human-environment
              interaction.
            </li>
            <li>7. English : Language and literature.</li>
            <li>
              8. Optional: Fine Arts / Physical Education / Home Science /
              Philosophy
            </li>
          </ul>
        </div>
        <div className="combination mt-[24px] ml-[6rem]">
          <h1 className="text-[20px]">Popular Combinations Recap:</h1>
          <li className="text-[18px] leading-[57px]">
            Arts + Psychology + Sociology = Ideal for Social Work, Psychology,
            Human Services.
          </li>
          <li className="text-[18px] leading-[57px]">
            Arts + History + Political Science = UPSC, Law, Journalism.
          </li>
          <li className="text-[18px] leading-[57px]">
            Arts + Geography + Economics = Urban Planning, Environmental
            Studies.
          </li>
          <li className="text-[18px] leading-[57px]">
            Arts + English + Psychology = Counseling, Literature, Teaching,
            Journalism
          </li>
          <li className="text-[18px] leading-[57px]">
            Arts + Fine Arts + English = Design, Creative Writing, Performing
            Arts
          </li>
          <li className="text-[18px] leading-[57px]">
            Arts + Hindi/Regional Language + Mass Media = Journalism,
            Translation, Content Creation
          </li>
          <li className="text-[18px] leading-[57px]">
            Arts + Psychology + Physical Education = Sports Psychology, Fitness
            Coaching, Physical Wellness
          </li>
        </div>

        <div
          className="card1  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={psychology} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Psychology & Counseling
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Studies human behavior, mental health, emotional and cognitive
                processes.
              </li>
              <li className="text-[16px] ml-[1px]">
                Works in clinics, hospitals, schools, rehabilitation centers,
                and private practice.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career options include Clinical Psychologist, Counselor, School
                Psychologist, Rehabilitation Therapist.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: BA in Psychology → MA in Clinical/Applied Psychology or
                M.Phil → Ph.D. for advanced roles. Strong empathy,
                communication, and emotional intelligence are crucial.
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link
              to={
                "https://www.psychologydiscussion.net/notes/psychology-notes/educational-psychology-psychology-notes/counselling-definition-and-characteristics-psychology/2655"
              }
            >
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
             mt-[10rem] bg-[#7fb078]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div
          className="card2  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account w-[30em]">
            <img src={government} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Civil Services & Government Jobs
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Focuses on administration, governance, and public service
                through UPSC, State PSC exams, etc.
              </li>
              <li className="text-[16px] ml-[1px]">
                Works in various ministries, departments, and public sector
                units.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career options include IAS, IPS, IFS, IRS, State Civil Services,
                Defence, and SSC roles.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: Any BA degree (History, Political Science, Sociology,
                etc.) → UPSC/PSC preparation. Requires strong general knowledge,
                reasoning, and current affairs awareness.
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link
              to={"https://pwonlyias.com/upsc-notes/civil-services-in-india/"}
            >
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
             mt-[10rem] bg-[#7fb078]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div
          className="card3  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={journalism} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Media, Journalism & Communication
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Involves reporting, content creation, public communication, and
                storytelling.
              </li>
              <li className="text-[16px] ml-[1px]">
                Works in print media, digital platforms, news channels, PR
                firms, and ad agencies.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career options include Journalist, Content Writer, Editor,
                Anchor, PR Officer.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: BJMC (Bachelor of Journalism & Mass Comm) → MJMC or
                specialized certifications. Creativity, writing skills, and
                awareness of current events are key.
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link
              to={
                "https://jgu.edu.in/blog/2024/02/21/what-is-journalism-and-mass-communication/"
              }
            >
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
             mt-[10rem] bg-[#7fb078]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div
          className="card4  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={FineArts} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Fine Arts, Design & Performing Arts
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Focuses on creative expression through painting, music, dance,
                theatre, fashion, etc.
              </li>
              <li className="text-[16px] ml-[1px]">
                Focuses on creative expression through painting, music, dance,
                theatre, fashion, etc.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career options include Fine Artist, Graphic Designer, Fashion
                Designer, Musician, Dancer.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: BFA / B.Des / Diploma in Performing Arts → MFA /
                Specialized Design Schools. Talent, originality, and aesthetic
                sense are important.
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://jgu.edu.in/blog/2024/06/07/what-is-fine-arts/"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
             mt-[10rem] bg-[#7fb078]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div
          className="card5  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={socialwork} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Social Work & NGO Management
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Deals with community development, human rights, and grassroots
                interventions.
              </li>
              <li className="text-[16px] ml-[1px]">
                Works in NGOs, government welfare departments, CSR arms of
                companies, international orgs.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career options include Social Worker, Program Officer, Community
                Mobilizer, CSR Executive.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: BSW (Bachelor of Social Work) → MSW / MA in Development
                Studies. Passion for service and advocacy skills are essential.
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://en.wikipedia.org/wiki/Social_work_management"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
             mt-[10rem] bg-[#7fb078]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div
          className="card6  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={law} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Legal Studies & Law
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Involves studying laws, legal systems, rights, and justice
                administration.
              </li>
              <li className="text-[16px] ml-[1px]">
                Works in courts, law firms, companies (as legal advisors),
                government legal departments.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career options include Lawyer, Judge (via Judiciary Exam), Legal
                Analyst, Public Prosecutor.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: BA + LLB / 5-year Integrated Law Programs → LLM /
                Judicial Services Exam. Requires logic, critical thinking, and
                strong communication.
              </li>
            </p>
          </div>
          <div className="card-btn">
            <Link to={"https://cleartax.in/s/accounting-and-auditing"}>
              <button
                className="btn border-2 rounded-2xl border-black w-[122px] p-3 -ml-[24rem] cursor-pointer
             mt-[10rem] bg-[#7fb078]"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
        <h1
          className="text-[2rem] font-sans ml-[3em] mt-[9rem]"
          data-aos="fade-right"
        >
          🏷️ Top Career Options After ARTS
        </h1>
        <div className="career mt-[6rem] ml-[5rem] mr-[60px] flex justify-between align-middle gap-[10rem]  flex-wrap">
          <div
            className="career1 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h2 className="text-center text-[20px] mt-[24px]">
              📊 Professional Courses:
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">UPSC Civil Services</li>
              <li className="text-[18px] ml-[19px]">
                B.Ed (for teaching in schools)
              </li>
              <li className="text-[18px] ml-[19px]">Judicial Services Exam</li>
              <li className="text-[18px] ml-[19px]">
                NET/JRF (for Lectureship)
              </li>
              <li className="text-[18px] ml-[19px]">
                Mass Communication Diplomas
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                Law Entrance Exams (CLAT, AILET)
              </li>
            </ul>
          </div>
          <div
            className="career2 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              🎓 Undergraduate Courses:
            </h2>
            <ul className="mt-[20px] leading-[28px]">
              <li className="text-[18px] ml-[19px]">
                B.A. (History, Sociology, Political Science, Psychology,
                Philosophy, etc.)
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                BFA (Bachelor of Fine Arts)
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                BJMC (Journalism & Mass Comm.)
              </li>
              <li className="text-[18px] ml-[19px]">
                BSW (Bachelor of Social Work)
              </li>
              <li className="text-[18px] ml-[19px]">B.Ed (Education)</li>
              <li className="text-[18px] ml-[19px]">B.Des (Design courses)</li>
            </ul>
          </div>
          <div
            className="career3 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              💼 Design, Media & Creative Careers
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">MBA (after graduation)</li>
              <li className="text-[18px] ml-[19px]"> Advertising & Branding</li>
              <li className="text-[18px] ml-[19px]">Fashion Design</li>
              <li className="text-[18px] ml-[19px]">Animation & Multimedia</li>
              <li className="text-[18px] ml-[19px]"> Interior Design</li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                Radio & Television Production
              </li>
            </ul>
          </div>
          <div
            className="career4 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              🏦 Economics & Public Policy
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                Economic Research (IMF, World Bank)
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                Government Economic Analyst
              </li>
              <li className="text-[18px] ml-[19px]">Policy Think Tanks</li>
              <li className="text-[18px] ml-[19px]">
                BA/B.Sc. Economics → MA Economics/Statistics
              </li>
            </ul>
          </div>
          <div
            className="career5 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              ⚖️ Law & Legal Field:
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                B.A. + LLB (5-year Integrated)
              </li>
              <li className="text-[18px] ml-[19px]"> Corporate Law</li>
              <li className="text-[18px] ml-[19px]">Civil & Criminal Law</li>
              <li className="text-[18px] ml-[19px]">Legal Journalism</li>
              <li className="text-[18px] ml-[19px]">Human Rights Law</li>
            </ul>
          </div>
          <div
            className="career6 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              🖥️ Digital & Tech Careers:
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                Digital Content Creation
              </li>
              <li className="text-[18px] ml-[19px]"> Social Media Marketing</li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                UX Writing / Design Communication
              </li>
              <li className="text-[18px] ml-[19px]">Podcasting / YouTube</li>
              <li className="text-[18px] ml-[19px]"> Blogging / Copywriting</li>
            </ul>
          </div>
          <div
            className="career7 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              Creative Tech & Design Careers
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">Graphic Design</li>
              <li className="text-[18px] ml-[19px]"> Visual Arts</li>
              <li className="text-[18px] ml-[19px]">Motion Graphics</li>
              <li className="text-[18px] ml-[19px]">Figma, Adobe Suite</li>
              <li className="text-[18px] ml-[19px]">
                Ideal for those with an artistic flair and design thinking
              </li>
            </ul>
          </div>
          <div
            className="career8 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              🏢 Government Jobs:
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                UPSC / SSC / Railways / Teaching
              </li>
              <li className="text-[18px] ml-[19px]">Defense (CDS, AFCAT)</li>
              <li className="text-[18px] ml-[19px]">State PSC Jobs</li>
              <li className="text-[18px] ml-[19px]">
                Roles in Social Welfare Departments
              </li>
            </ul>
          </div>
          <div
            className="career9 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              🧑‍💼 Entrepreneurship & Startups:
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                Start ventures in: Content creation Art & desige Event
                management Counseling centers Education startups
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Arts;