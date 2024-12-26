import { FaBitbucket, FaGithub, FaGitlab } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";

const SignUp = () => {
    const menu = [
        {
            icon:<FaGithub />,
            text:"Sign in with Github"
        },
        {
            icon:<FaBitbucket className="text-blue-400" />,
            text:"Sign in with Bitbucket"
        },
        {
            icon:<VscAzureDevops className="text-blue-500" />,
            text:"Sign in with Azure Devops"
        },
        {
            icon:<FaGitlab className="text-orange-500"/>,
            text:"Sign in with GitLab"
        },
    ]
  return (
    <div className="bg-gray-100 lg:w-1/2">
        <div className="bg-white md:mx-3 lg:mx-4 md:my-16 rounded-lg ">
      <div className=" w-full flex flex-col gap-4 p-4 items-center">
        <div className="flex p-4 gap-3 justify-center">
          <img src="/images/codeAntAI.png" />
          <div className="text-xl font-semibold">CodeAnt AI</div>
        </div>
        <div className="text-xl font-semibold text-center">Welcome to CodeAnt AI</div>
        <div className="join w-full lg:join-horizontal">
          <button className="btn w-1/2 join-item sm:text-sm lg:text-lg text-white hover:bg-slate-50 bg-blue-700 hover:text-black">SAAS</button>
          <button className="btn w-1/2 join-item sm:text-sm lg:text-lg bg-slate-50 hover:bg-blue-700 hover:text-white">Self Hosted</button>
        </div>
        <div className="flex flex-col gap-2 mt-3">
        {
            menu.map((item, index)=>
                <button key={index} className="btn bg-white md:btn-md lg:btn-lg">
                    {item.icon}
                    {item.text}
                </button>
            )
        }
        
        </div>
      </div>
      <div className="text-center md:bg-gray-100 p-2">
      By signing up you agree to the <span className="font-bold">Privacy Policy</span>.
      </div>
    </div>
    </div>
  );
};

export default SignUp;
