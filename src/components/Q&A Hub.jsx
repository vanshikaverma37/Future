import React from 'react'
import { MdArrowBack } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
const Videos = () => {
  const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    }
    const [text ] = useTypewriter({
      words: ["Most Common Questions", "Specific Question", "EXPERT Reply"],
      loop: true, // or a number like 3
      typeSpeed: 120,
      deleteSpeed: 80,
    });
  return (
    <>
      <div className="video-body">
        <div className="video flex justify-around bg-[#102E50]">
          <div
            className="back ml-[-89rem] mt-[20px] fixed"
            onClick={handleGoBack}
          >
            <MdArrowBack color='white'/>
          </div>
          <h2 className="text-[50px] mt-[27px] text-white">
            {" "}
            Welcome to{" "}
            <span className="text-[#E69DB8] font-bold text-2xl">{text}</span>
            <span className="text-[#FFF085]">
              <Cursor cursorStyle="|" />{" "}
            </span>
          </h2>
        </div>
        <div className="mentor">
          <div className="question-body">
            <div className="ques">
              <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                Q1: What stream should I choose after 10th?
              </h1>
            </div>
            <div className="ans leading-6 font-sans text-[15px]">
              <span>
                <span className="font-bold">🎓 Mentor's Reply:</span> It depends
                on your interests and career goals. If you're interested in
                science and technology, the Science stream is ideal. If you're
                good at communication and want to explore business or arts,
                consider Commerce or Humanities. Don’t choose based on peer
                pressure—understand your strengths first.
              </span>
            </div>
            <div className="ques">
              <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                {" "}
                Q2: Can I switch my stream after 12th?
              </h1>
            </div>
            <div className="ans leading-6 font-sans text-[15px]">
              <span>
                <span className="font-bold">🎓 Mentor's Reply:</span> Yes, in
                many cases you can switch. For example, a Science student can
                pursue Commerce or Arts in higher education. However, switching
                from Commerce/Arts to Science is generally not possible.
                Research your target course eligibility before making a
                decision.
              </span>
            </div>
            <div className="ques">
              <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                Q3: What are the career options after 12th Science other than
                engineering or medical?
              </h1>
            </div>
            <div className="ans leading-6 font-sans text-[15px]">
              <span>
                <span className="font-bold">🎓 Mentor's Reply:</span>There are
                plenty! You can pursue B.Sc. in various subjects, BCA, Pharmacy,
                Architecture, Design, Data Science, or even prepare for
                government exams. Explore new-age fields like Artificial
                Intelligence, Environmental Science, or Biotechnology as well.
              </span>
            </div>
            <div className="ques">
              <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                Q4: I’m confused between my passion and parental expectations.
                What should I do?
              </h1>
            </div>
            <div className="ans leading-6 font-sans text-[15px]">
              <span>
                <span className="font-bold">🎓 Mentor's Reply:</span>Have an
                open conversation with your parents. Show them you’ve researched
                your passion deeply. Try to find a middle ground where you can
                explore your interests while also gaining stability. A mentor or
                counselor can help mediate this conversation.
              </span>
            </div>
            <div className="ques">
              <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                Q5: Is it necessary to go to coaching after 10th or 12th?
              </h1>
            </div>
            <div className="ans leading-6 font-sans text-[15px]">
              <span>
                <span className="font-bold">🎓 Mentor's Reply:</span> Not
                always. Coaching can be helpful for competitive exams, but
                self-study with the right resources also works. Choose based on
                your learning style. Online platforms and structured plans can
                be powerful if used consistently.
              </span>
            </div>
            <div className="ques">
              <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                Q6: How do I know which career is right for me?
              </h1>
            </div>
            <div className="ans leading-6 font-sans text-[15px]">
              <span>
                <span className="font-bold">🎓 Mentor's Reply:</span> Start by
                identifying your interests, strengths, and values. Use career
                aptitude tests and talk to professionals in different fields.
                Internships, job shadowing, and online courses can also help you
                understand what suits you.
              </span>
            </div>
            <div className="ques">
              <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                {" "}
                Q7: Are entrance exams compulsory after 12th?
              </h1>
            </div>
            <div className="ans leading-6 font-sans text-[15px]">
              <span>
                <span className="font-bold">🎓 Mentor's Reply:</span> Not for
                all courses. Some universities offer merit-based admissions,
                while others require entrance exams (like JEE, NEET, CUET,
                etc.). It depends on your chosen field and college. Always check
                admission criteria early.
              </span>
            </div>
            <var>
              {" "}
              <div className="ques">
                <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                  Q8: Can I pursue a diploma after 10th instead of 12th?
                </h1>
              </div>
              <div className="ans leading-6 font-sans text-[15px]">
                <span>
                  <span className="font-bold">🎓 Mentor's Reply:</span> Yes,
                  many polytechnic and vocational diplomas are available after
                  10th. This is a good option if you want to enter the workforce
                  early or prefer practical learning. Later, you can even switch
                  to degree programs.
                </span>
              </div>
              <div className="ques">
                <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                  {" "}
                  Q9: What if I choose the wrong stream? Is my future spoiled?
                </h1>
              </div>
              <div className="ans leading-6 font-sans text-[15px]">
                <span>
                  <span className="font-bold">🎓 Mentor's Reply:</span> Not at
                  all! Many students switch paths later and succeed. The key is
                  to stay adaptable and keep learning. Skills matter more than
                  early choices—what you build over time shapes your future.
                  learning. Later, you can even switch to degree programs.
                </span>
              </div>
              <div className="ques">
                <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                  Q10: How do I deal with peer pressure and comparison?
                </h1>
              </div>
              <div className="ans leading-6 font-sans text-[15px]">
                <span>
                  <span className="font-bold">🎓 Mentor's Reply:</span> Stay
                  focused on your journey. Everyone has a unique path and
                  timing. Avoid comparing your progress to others—success isn’t
                  a race. Focus on consistent improvement, not perfection.
                </span>
              </div>
              <div className="ques">
                <h1 className="text-[21px] ml-[6rem] mt-[49px]">
                  Q11: I got less marks in 10th/12th (around 55%). Can I still
                  choose Science or Biology?
                </h1>
              </div>
              <div className="ans leading-6 font-sans text-[15px]">
                <span>
                  <span className="font-bold">🎓 Mentor's Reply:</span> Yes, you
                  can still choose Science or Biology, but it depends on the
                  admission criteria of the school or college you're applying
                  to. Some institutions have a minimum percentage requirement
                  (usually around 60% or more) for Science streams due to the
                  academic load. However, many schools also understand that
                  marks don't define a student's true potential. If you're
                  genuinely interested in Science or Biology and willing to work
                  hard, speak with school counselors—they may allow you based on
                  an interview or your motivation.
                </span>
              </div>
            </var>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos