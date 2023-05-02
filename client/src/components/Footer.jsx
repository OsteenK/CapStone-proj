import { AiOutlineArrowRight } from "react-icons/ai";

function Footer() {
    return (
      <footer>
        <div className="bg-lavender-400">
          <div className="container text-white text-center md:text-left mx-6 py-16 px-0">
            <div className="grid-1 grid lg:gap-16 md:gap-12 md:grid-cols-1 lg:grid-cols-2">
              <div className="text-left">
                <img src="./Give Hope Logo (1).png" className="pb-4 lg:h-32 md:h-28"/>
                <p className="">
                  Every member of Give Hope is dedicated to breaking down barriers to education for girls around the world. We can achieve this by not just providing sanitary towels, but also providing clean water and sanitation facilities.
                  <br/><br/>
                  <a className="text-lavender-200 font-bold">Join us</a> in the movement for gender equality. Every donation, big or small, can make a difference.
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-white">Contact Us</h3>
                <p>Email: givehopecharities@gmail.com</p>
                <br/>
                <p>Telephone:<br/>+254-7123-456-89<br/>+254-7987-654-32 </p>
                <br/>
                <p>Address: This Street, This Building, This Room</p>
                <br/>
                <a className="text-white flex gap-1 items-center" href="/contactus">Get in Touch <AiOutlineArrowRight/></a>
              </div>
            </div>
          </div>

          
        </div>
      </footer>
    );
  }

export default Footer;