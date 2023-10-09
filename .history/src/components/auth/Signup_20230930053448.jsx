import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    
              </div>
              <button className="border-2 px-10 py-2 rounded-full text-white font-bold mt-4 bg-green-500">
                <a href="#"> Sign In</a>
              </button>
            </div>
          </div>
        </div>

        {/* signUp */}
        <div className="w-2/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
          <h2 className="text-white text-3xl font-bold mb-2">Hello,Friend!</h2>
          <span className="border-2 w-10 inline-block mb-3"></span>
          <p className="text-white mb-2">
            full up your personality information and start journey with us
          </p>
          <button className="border-2 px-10 py-2 rounded-full text-white font-bold mt-4 hover:bg-white hover:text-green-500">
            <a href="#"> Sign Up</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
