import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import account from "./images/account.jpg";
import banking from "./images/banking.jpg";
import human from "./images/human.jpg";
import marketing from "./images/marketing.jpg";
import law from "./images/law.jpg";
import economic from "./images/economic.jpg";

const Commerece = () => {
   const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
    useEffect (()=>{
  Aos.init({ duration: 1000, once: false });
    },[])
  return (
    <>
      <div className="com-container">
        <div className="comerece-heading flex justify-around text-center bg-[#DBFFCB] h-[83px]">
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
            WELCOME TO COMMERECE PAGE
          </div>
        </div>
        <div className="Q mt-[53px] ml-[6em]">
          <h2 className="text-[26px] leading-[61px]">
            Why Choose Commerce After 10th?
          </h2>
          <p className="text-[16px] w-[68rem] font-serif">
            Commerce is the stream of business, finance, economy, management,
            trade, entrepreneurship, and marketing. If you are interested in
            money, business, accounts, management, or startups, Commerce is the
            right choice for you. It is not just about becoming a CA, but offers
            diverse and high-paying career options.
          </p>
        </div>
        <div className="subjects mt-[53px] ml-[3em]">
          <h2 className="text-[26px] leading-[61px]">
            🏷️ Core Subjects in Commerce (11th & 12th)
          </h2>
          <ul className="text-[16px] font-serif ml-[42px]">
            <li className="">
              1. Accountancy : Recording, classifying, summarizing financial
              transactions.
            </li>
            <li>
              2. Business Studies : Principles of business, management,
              entrepreneurship.
            </li>
            <li>
              3. Economics : Study of economy, markets, demand & supply,
              policies.
            </li>
            <li>4. English : Compulsory language subject.</li>
            <li>
              5. Mathematics (Optional but recommended) : Useful for CA, CS,
              Banking, Finance.
            </li>
            <li>
              6. Informatics Practices (IP) / Entrepreneurship (Optional) :
              Basics of IT or business skills.
            </li>
          </ul>
        </div>
        <div className="combination mt-[24px] ml-[6rem]">
          <h1 className="text-[20px]">Popular Combinations Recap:</h1>
          <li className="text-[18px] leading-[57px]">
            Commerce + Maths : Finance, CA, CFA, Data Analytics, MBA, Actuarial
            Science
          </li>
          <li className="text-[18px] leading-[57px]">
            Commerce + IP / Computer : E-commerce, Digital Marketing, Business
            Analytics
          </li>
          <li className="text-[18px] leading-[57px]">
            Commerce + Entrepreneurship : Startups, Business Management,
            Innovation
          </li>
          <li className="text-[18px] leading-[57px]">
            Commerce + Physical Education : Sports Management, Wellness Industry
          </li>
          <li className="text-[18px] leading-[57px]">
            Commerce + Fine Arts / Psychology : Advertising, Media, HR, Event
            Management
          </li>
        </div>

        <div
          className="card1  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={account} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Accounting & Auditing
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Prepares and maintains financial statements (balance sheet,
                profit/loss).
              </li>
              <li className="text-[16px] ml-[1px]">
                Conducts audits to ensure accuracy and compliance with laws.
              </li>
              <li className="text-[16px] ml-[1px]">
                Handles taxation, GST, TDS, and income tax filing.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career roles: Accountant, Auditor, Tax Consultant, Cost
                Accountant
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
        <div
          className="card2  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account w-[30em]">
            <img src={banking} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Banking & Finance
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Work in private & public sector banks, NBFCs, or insurance
                firms.
              </li>
              <li className="text-[16px] ml-[1px]">
                Handles loans, credit, investment advice, and customer accounts.
              </li>
              <li className="text-[16px] ml-[1px]">
                Opportunities in stock market, mutual funds, and risk analysis.
              </li>
              <li className="text-[16px] ml-[1px]">
                Exams: IBPS, SBI PO/Clerk, RBI Grade B, SEBI, etc. Career roles:
                Bank Officer, Loan Advisor, Financial Analyst, Investment
                Banker.
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
        <div
          className="card3  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={human} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Management & Human Resources (HR)
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Develops company policies, manages people, and drives
                performance.
              </li>
              <li className="text-[16px] ml-[1px]">
                Handles recruitment, training, payroll, and employee relations.
              </li>
              <li className="text-[16px] ml-[1px]">
                Strong demand in corporates, startups, and MNCs.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: BBA, MBA in HR, Organizational Psychology.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career roles: HR Manager, Operations Manager, Team Lead, Project
                Coordinator.
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
        <div
          className="card4  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[48rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={marketing} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Marketing & Sales
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Plans and executes advertising, digital marketing, and
                campaigns.
              </li>
              <li className="text-[16px] ml-[1px]">
                Conducts market research and creates branding strategies.
              </li>
              <li className="text-[16px] ml-[1px]">
                Works in FMCG, tech companies, agencies, and startups.
              </li>
              <li className="text-[16px] ml-[1px]">
                Digital skills like SEO, SEM, social media marketing are a plus.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career roles: Marketing Executive, Sales Manager, Brand
                Strategist, Social Media Manager.
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
        <div
          className="card5  card relative  flex justify-items-start gap-[73px] border-2 border-black w-[42rem] ml-[9rem] mt-[70px] rounded-2xl cursor-pointer overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="account">
            <img src={economic} alt="" className="pcm-img" />
          </div>
          <div className="cards-detail">
            <h1 className="title text-[25px] mt-[15px] text-center font-serif">
              Economics & Research
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Studies demand/supply, inflation, GDP, fiscal policy etc.
              </li>
              <li className="text-[16px] ml-[1px]">
                Works in government bodies, research firms, international
                organizations (like IMF, World Bank).
              </li>
              <li className="text-[16px] ml-[1px]">
                Career options include Economic Advisor, Policy Analyst, Market
                Researcher, Statistician.
              </li>
              <li className="text-[16px] ml-[1px]">
                Courses: BA/B.Sc. in Economics, followed by MA or research
                roles. Requires strong mathematical and analytical thinking.
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
              Law & Corporate Governance
            </h1>
            <p className="detail mt-[3px]">
              <li className="text-[16px] ml-[1px]">
                Understands and applies laws related to contracts, companies,
                taxation etc.
              </li>
              <li className="text-[16px] ml-[1px]">
                Ensures businesses follow legal standards and avoid penalties.
              </li>
              <li className="text-[16px] ml-[1px]">
                Career paths include Corporate Lawyer, Legal Advisor, Company
                Secretary (CS).
              </li>
              <li className="text-[16px] ml-[1px]">
                Can pursue B.Com + LLB or CS course for this field.
              </li>
              <li className="text-[16px] ml-[1px]">
                Strong knowledge of business laws and communication is required.
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
          🏷️ Top Career Options After Commerce
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
              <li className="text-[18px] ml-[19px]">
                CA (Chartered Accountant)
              </li>
              <li className="text-[18px] ml-[19px]"> CS (Company Secretary)</li>
              <li className="text-[18px] ml-[19px]">
                CMA (Cost & Management Accountant)
              </li>
              <li className="text-[18px] ml-[19px]">
                CFA (Chartered Financial Analyst)
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                CFP (Certified Financial Planner)
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
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                B.Com (General / Honors)
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                BBA (Bachelor of Business Administration)
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                BMS (Bachelor of Management Studies)
              </li>
              <li className="text-[18px] ml-[19px]">
                BBE (Bachelor of Business Economics)
              </li>
            </ul>
          </div>
          <div
            className="career3 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              💼 Management & Business:
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">MBA (after graduation)</li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                Business Development & Sales
              </li>
              <li className="text-[18px] ml-[19px]">
                Marketing & Brand Management
              </li>
              <li className="text-[18px] ml-[19px]">International Business</li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                E-commerce & Digital Business
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
              🏦 Finance & Banking Sector:
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                Banking & Insurance Jobs
              </li>
              <li className="text-[18px] ml-[19px]"> Investment Banking</li>
              <li className="text-[18px] ml-[19px]">Stock Market & Trading</li>
              <li className="text-[18px] ml-[19px]">Wealth Management </li>
              <li className="text-[18px] ml-[19px]"> Financial Analyst</li>
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
                B.Com LLB (Integrated Law Program)
              </li>
              <li className="text-[18px] ml-[19px]"> Corporate Law</li>
              <li className="text-[18px] ml-[19px]">Taxation Law</li>
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
              <li className="text-[18px] ml-[19px]">Digital Marketing</li>
              <li className="text-[18px] ml-[19px]"> E-commerce Management</li>
              <li className="text-[18px] ml-[19px]">
                Data Analytics & Business Intelligence
              </li>
              <li className="text-[18px] ml-[19px]">
                {" "}
                Content Creation & Social Media Management
              </li>
            </ul>
          </div>
          <div
            className="career7 border-8 border-[#526E48] rounded-2xl w-[20rem] h-[20rem]"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            {" "}
            <h2 className="text-center text-[20px]  mt-[24px]">
              UX/UI Design for Business Apps
            </h2>
            <ul className="mt-[20px] leading-[32px]">
              <li className="text-[18px] ml-[19px]">
                Roles: UI Designer, UX Researcher, Product Designer
              </li>
              <li className="text-[18px] ml-[19px]"> CS (Company Secretary)</li>
              <li className="text-[18px] ml-[19px]">
                Learn: Figma, Adobe XD, User Psychology
              </li>
              <li className="text-[18px] ml-[19px]">
                Ideal For: Creative minds with a sense of business usability
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
                SSC, UPSC, Banking Exams, Railways, Defense jobs are also open
                for Commerce students.
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
                Start your own business in finance, e-commerce, consultancy,
                marketing agency, or trading
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commerece;