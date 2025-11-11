"use client"
import { useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

let init = {
  name: '',
  mobile: '',
  designetion: '',
  message: ''
}

const JobCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [careerdata, setCareerData] = useState(init);
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errornumber, setErrorNumber] = useState(false);
  const toast = useToast();

  const inputRefs = Array.from({ length: 5 }, () => useRef());

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCareerData((prev) => ({ ...prev, [name]: value }));
    if (name === "mobile" && value.length !== 10) {
      setErrorNumber(true);
    } else {
      setErrorNumber(false);
    }
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const { name, mobile, message, designetion } = careerdata;

    if (name && message && mobile && resume && designetion) {
      const mobilePattern = /^\d{10}$/;
      if (!mobilePattern.test(mobile)) {
        toast({
          title: 'Error:',
          description: 'Invalid mobile number. Please enter a valid mobile number.',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom-right"
        });
        return;
      }

      const formData = new FormData();
      formData.append("file", resume);
      formData.append("data", JSON.stringify(careerdata));

      setIsSubmitting(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/career`, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          setCareerData(init);
          setResume(null);
          toast({
            title: 'Success',
            description: "Your job application was successfully submitted",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top-right"
          });
        } else {
          const errorData = await response.json();
          toast({
            title: 'Error:',
            description: errorData.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: "bottom-right"
          });
        }
      } catch (err) {
        toast({
          title: 'Error:',
          description: err.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom-right"
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      for (let i = 0; i < inputRefs.length; i++) {
        if (!inputRefs[i].current.value) {
          inputRefs[i].current.focus();
          return;
        }
      }
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(false);
    }, 1000);
  };




  return (
    <div className="relative max-w-3xl mx-auto my-8" >
      {/* Main card container */}
      <div className="bg-blue-600 rounded-lg shadow-lg absolute bottom-[-10px] right-[-5px] w-[98%] h-[80px] p-1"></div>
      <div className="rounded-lg p-1 relative z-10 w-full" >
        {/* Inner card with more prominent bottom shadow */}
        <div
          className="bg-white rounded-lg shadow-lg p-4 max-sm:p-2"
          style={{ boxShadow: '30px 10px 15px rgba(0, 0, 0, 0.3)' }}
        >
          <div className="flex max-sm:flex-col max-sm:items-start items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-[black]">
                <span className="text-blue-600">Role :- </span>{job.designetion}
              </h3>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div>🕒 {job.Jobtype}</div>
                <div>🗓️ {job.experience}</div>
                <div>📍 {job.location}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-black">
              <button onClick={() => setShowModal(true)} className="btn-gradient cursor-pointer text-white px-4 py-2 max-sm:px-1 max-sm:py-1 rounded-md">
                Apply Now
              </button>
              <button className="cursor-pointer" onClick={toggleOpen}>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <div className="w-full bg-[#396BA9] text-center font-[600] py-3 rounded-sm">Job Detail</div>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Job ID -</strong>{job.JobID && job.JobID}</p>
                <p><strong>Job Type -</strong> {job.Jobtype && job.Jobtype}</p>
                <p><strong>Education -</strong> {job.education && job.education}</p>
                <p><strong>Experience -</strong>{job.experience && job.experience}</p>
                <p><strong>Designation -</strong> {job.designetion && job.designetion}</p>
                <p><strong>Location -</strong> {job.location && job.location}</p>
                <p><strong>Salary -</strong> {job.salary && job.salary}</p>
                {job.roleResponsibility ? (
                  <>
                    <p><strong>Roles & Responsibilities -</strong></p>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.roleResponsibility && job.roleResponsibility.split('•').filter(item => item.trim() !== '').map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </>
                ) : null}
                {job.roleResponsibility ? (
                  <>
                    <p><strong>Perks & Benefits -</strong></p>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.perksBenefits && job.perksBenefits.split('•').filter(item => item.trim() !== '').map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  </>
                ) : null}
                <p><strong>Description -</strong></p>
                <p>{job.description && job.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Modal */}
      {
        showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-full max-w-lg bg-[#396BA9] rounded-lg p-8 relative">
              <button
                className="absolute top-2 right-4 text-white"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
              <h2 className="text-center text-2xl font-bold text-white">Be a Volunteer</h2>
              <p className="text-center text-white">
                Join our team to work on exciting initiatives, meet others who share your interests, and change the world for the better.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <input
                  ref={inputRefs[0]}
                  value={careerdata.name}
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="p-2 rounded-lg text-black"
                />
                <input
                  ref={inputRefs[1]}
                  value={careerdata.mobile}
                  placeholder="Your Mobile Number"
                  name="mobile"
                  type="number"
                  onChange={handleChange}
                  className="p-2 rounded-lg text-black"
                />
                {errornumber && (
                  <label className="text-red-500">Please enter a 10 digit number</label>
                )}
                <select
                  ref={inputRefs[2]}
                  onChange={handleChange}
                  name="designetion"
                  className="p-2 rounded-lg text-black"
                >
                  <option value="">Select the Designation</option>
                  <option
                    key={job.JobID}
                    value={`${job.JobID} - ${job.designetion}`}
                  >
                    {`${job.JobID} - ${job.designetion}`}
                  </option>
                </select>
                <textarea
                  ref={inputRefs[3]}
                  value={careerdata.message}
                  placeholder="Type Your Message"
                  name="message"
                  onChange={handleChange}
                  className="p-2 rounded-lg text-black"
                ></textarea>
                <input
                  ref={inputRefs[4]}
                  accept=".pdf,.doc"
                  type="file"
                  className="hidden"
                  name="resume"
                  id="Resume"
                  onChange={handleResumeChange}
                />
                <label
                  htmlFor="Resume"
                  className="p-2 bg-white text-gray-600 rounded-lg cursor-pointer"
                >
                  {resume ? resume.name : "Upload Resume*"}
                </label>
                <button
                  onClick={handleSubmit}
                  className="p-2 bg-white text-blue-700 rounded-lg cursor-pointer"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default JobCard;
