import praying from "../assets/images/praying.svg";
import misson from "../assets/images/mission.svg";
import vision from "../assets/images/vision.svg";
import book from "../assets/images/bible.svg";
import community from "../assets/images/aboutcommuniy.svg";
import accessibility from "../assets/images/accessibility.svg";
import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";
import Button from "./Button";

const AboutSection = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-20">
      <div
        className="bg-no-repeat bg-center bg-cover w-[353px] h-[447px] sm:w-[490px] md:w-[1020px]  md:h-[447px] overflow-hidden relative before:content-[''] before:absolute before:bg-[rgba(0,0,0,0.6)] before:z-0 *:relative *:z-10 before:inset-0 text-white rounded-[20px] flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${praying})` }}
      >
        <h1 className="text-[40px] font-semibold mb-3">The Lord's Field</h1>
        <p className="text-[20px] font-medium leading-[34px] w-[20rem] sm:w-[28rem] md:w-[50rem] text-center mb-10 sm:mb-20">
          Live worship, teaching, and fellowship are coming soon to bring the
          Lord's Field community together
        </p>
      </div>

      {/* <div className="relative w-full overflow-hidden">
        <div className="w-[200%] -ml-[50%] flex items-center bg-black h-[95px] -rotate-3 origin-right">
          <div className=" rotate-3 flex gap-20 whitespace-nowrap mx-auto">
            <p
              className="text-[28.44px] font-semibold text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Lord's Field
            </p>
            <p
              className="text-[28.44px] font-semibold text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Lord's Field
            </p>
            <p
              className="text-[28.44px] font-semibold text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Lord's Field
            </p>
            <p
              className="text-[28.44px] font-semibold text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Lord's Field
            </p>
            <p
              className="text-[28.44px] font-semibold text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Lord's Field
            </p>
            <p
              className="text-[28.44px] font-semibold text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Lord's Field
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 w-full bg-blue-700 h-[95px]">
          <p
            className="text-[28.44px] font-semibold text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Lord's Field
          </p>
          <p
            className="text-[28.44px] font-semibold text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Lord's Field
          </p>
          <p
            className="text-[28.44px] font-semibold text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Lord's Field
          </p>
          <p
            className="text-[28.44px] font-semibold text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Lord's Field
          </p>
          <p
            className="text-[28.44px] font-semibold text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Lord's Field
          </p>
          <p
            className="text-[28.44px] font-semibold text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Lord's Field
          </p>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row justify-center items-center gap-20 mb-10 w-[86.5%]">
        <div className="flex flex-col justify-center items-center text-center gap-5 p-6 border border-gray rounded-2xl">
          <div className="bg-blue-100 w-10 h-10 rounded-lg flex justify-center items-center">
            <img src={misson} alt="" />
          </div>
          <h1 className="text-xl font-semibold">Our Mission</h1>
          <p className="text-sm font-normal text-lightBlack">
            To provide accessible, high-quality Christian education and
            spiritual resources that strengthen faith, deepen biblical
            understanding, and foster authentic community among believers. We
            are committed to helping every person grow in their relationship
            with Jesus Christ through comprehensive study materials, daily
            devotionals, and meaningful fellowship opportunities.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-5 p-6 border border-gray rounded-2xl">
          <div className="bg-lightPurple w-10 h-10 rounded-lg flex justify-center items-center">
            <img src={vision} alt="" />
          </div>
          <h1 className="text-xl font-semibold">Our Vision</h1>
          <p className="text-sm font-normal text-lightBlack">
            To see a world where every believer has access to the tools and
            community they need to flourish in their faith journey. We envision
            a global network of Christians equipped with biblical wisdom, united
            in purpose, and empowered to make a lasting impact in their
            communities and beyond for the glory of God.
          </p>
        </div>
      </div>

      <div className="bg-[#fafbfe] w-full flex flex-col justify-center items-center max-h-[1001px] md:max-h-[515px] text-center sm:p-14 px-5 py-10 mb-14">
        <h1 className="text-[20px] md:text-[40px] font-semibold text-black mb-3">
          Our Core Values
        </h1>
        <p className="text-lg md:text-[20px] text-black font-normal w-[21rem] md:w-[50rem] leading-[34px] mb-16">
          Comprehensive tools and resources designed to help you grow deeper in
          your relationship with God
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col justify-center items-center text-center gap-3 bg-white sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none w-full">
            <div className="bg-[#3588F2] flex justify-center items-center h-10 w-10 rounded-lg">
              <img src={book} alt="" />
            </div>
            <h1 className="text-[20px] font-semibold">Bible Truth</h1>
            <p className="text-[16px] font-normal text-lightBlack">
              Everything we do is grounded in Scripture, ensuring that our
              content is faithful to God's Word and theologically sound.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 bg-white sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none w-full">
            <div className="bg-[#F97815] flex justify-center items-center h-10 w-10 rounded-lg">
              <img src={community} alt="" />
            </div>
            <h1 className="text-[20px] font-semibold">Community</h1>
            <p className="text-[16px] font-normal text-lightBlack">
              We believe in the power of Christian fellowship and create spaces
              where believers can connect, learn, and grow together.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 bg-white sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none w-full">
            <div className="bg-[#B752E2] flex justify-center items-center h-10 w-10 rounded-lg">
              <img src={accessibility} alt="" />
            </div>
            <h1 className="text-[20px] font-semibold">Accessibility</h1>
            <p className="text-[16px] font-normal text-lightBlack">
              We strive to make Christian education and resources available to
              everyone, regardless of background or circumstances.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-[86.5%] gap-12">
        <div className="w-[353px] h-[520px] md:w-[516px] md:h-[508px] border border-gray px-4 py-6 rounded-2xl flex flex-col justify-start items-start gap-[21px]">
          <span className="flex justify-start items-center gap-3">
            <img src={mail} alt="" />
            <h1 className="text-[20px] font-normal text-blue-700">
              Get In Touch
            </h1>
          </span>
          <span className="flex flex-col justify-start items-start gap-3 border-b-gray border-b pb-10 mb-4">
            <p>
              We'd love to hear from you! Whether you have questions about our
              resources, need prayer, or want to partner with us in ministry,
              please don't hesitate to reach out.
            </p>
            <span className="flex justify-start items-center gap-3">
              <img src={mail} alt="" />
              <p>contact@lordsfield.org</p>
            </span>
            <span className="flex justify-start items-center gap-3">
              <img src={phone} alt="" />
              <p>+1 (555) 123-4567</p>
            </span>
          </span>
          <span className="w-full">
            <p className="text-[16px] font-medium text-lightBlack mb-4">
              Ministry Hours
            </p>
            <div className="flex justify-between items-center mb-3">
              <p>Mon-Fri</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Saturday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Sunday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </span>
        </div>
        <form action="">
          <div className="w-[353px] h-[506px] md:w-[516px] md:h-[508px] border border-gray px-4 py-6 rounded-2xl flex flex-col justify-start items-start gap-[19px]">
            <p className="text-blue-700 text-[20px] font-normal">Contact Us</p>
            <span>
              <p className="mb-4">Your Name</p>
              <input
                type="text"
                name=""
                id=""
                className="outline-none w-[321px] md:w-[484px] p-3 border border-gray rounded-lg text-[14px] font-normal text-lightBlack"
                placeholder="Enter Your Name"
              />
            </span>
            <span>
              <p className="mb-4">Your Email</p>
              <input
                type="email"
                name=""
                id=""
                className="outline-none w-[321px] md:w-[484px] p-3 border border-gray rounded-lg text-[14px] font-normal text-lightBlack"
                placeholder="Enter Your Email"
              />
            </span>
            <span>
              <p className="mb-4">Your Message</p>
              <textarea
                name=""
                id=""
                className="outline-none w-[321px] md:w-[484px] p-3 border border-gray rounded-lg text-[14px] font-normal text-lightBlack resize-none h-[85px]"
              ></textarea>
            </span>
            <Button text="Send Message" color="blue" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AboutSection;
