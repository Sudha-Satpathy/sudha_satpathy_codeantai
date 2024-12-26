import { IoMdAdd } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";

const RepoList = () => {
  const repoData = [
    {
      title: "design-system",
      status: "public",
      language: "React",
      database: "7320 KB",
      update: "Updated 1 day ago",
    },
    {
      title: "codeant-ci-app",
      status: "private",
      language: "Javascript",
      database: "5871 KB",
      update: "Updated 2 days ago",
    },
    {
      title: "analytics-dashboard",
      status: "private",
      language: "Python",
      database: "4521 KB",
      update: "Updated 5 days ago",
    },
    {
      title: "mobile-app",
      status: "public",
      language: "Swift",
      database: "3096 KB",
      update: "Updated 6 days ago",
    },
  ];
  return (
    <div className="m-4 bg-base-100 rounded-md w-screen">
      <div className="md:flex justify-between px-7 py-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Repositories</h1>
          <p>32 total repositories</p>
          <div className="form-control w-72">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex justify-center gap-2 hover:bg-blue-400 hover:text-white text-lg btn  ">
            <div>
            <LuRefreshCw /> 
            </div>
            <span>Refresh All</span>
          </div>

          <div className="flex justify-center gap-2 bg-blue-400 text-white hover:text-black text-lg btn  ">
            <div>
            <IoMdAdd className="text-xl " />
            </div>
            <span>Add Repository</span>
          </div>
         
        </div>
      </div>
      {repoData.map((item, index) => (
        <div className="card bg-base-100 rounded-none">
          <div className="card-body hover:bg-gray-300">
           <h2 className="card-title">
              {item.title}
              <span className="outline outline-1 outline-offset-1 font-thin text-blue-600 rounded-xl px-2 text-sm bg-sky-100">
                {item.status}
              </span>
            </h2>
            <div className="card-actions flex gap-10">
              <div>{item.language}</div>
              <div>{item.database}</div>
              <div>{item.update}</div>
            </div>
           </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
