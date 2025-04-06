import {useState} from "react";
import {useSelector} from "react-redux";
import usePortfolioUpdate from "../../utils/usePortfolioUpdate";
import useFetchPortfolioData from "../../utils/useFetchPortfolioData";

const Portfolio=()=>{
    const {reFetch}=useFetchPortfolioData();
    const {name,profileImage,profession,socials,resumeLink,about}=useSelector(store=>store.portfolio.data)
    const updatePortfolio=usePortfolioUpdate();

    const [isEdit, setIsEdit] = useState(false);
    const [nameValue,setNameValue] = useState(name)
    const [proffesionValue,setProffesionValue] = useState(profession)
    const[resume,setResume] = useState(resumeLink)
    const [aboutDesc,setAboutDesc] = useState(about.description)
    const [techStack,setTechStack] = useState(about.techStack)
    const [githubLink,setGithubLink] = useState(socials.github)
    const [linkedinLink,setLinkedinLink]=useState(socials.linkedin)
    const [twitterLink,setTwitterLink] = useState(socials.twitter)
    const [profileImageUrl, setProfileImageUrl] = useState(profileImage);
    const [aboutImageUrl, setAboutImageUrl] = useState(about.aboutImage);



    const handleProfileImageChange = (e) => {
        setProfileImageUrl(e.target.value)
    };

    const handleAboutImageChange = (e) => {
        setAboutImageUrl(e.target.value)
    };

    const handleUpdate=()=>{

        const updatedData = {
            name: nameValue,
            profileImage: profileImageUrl,
            profession: proffesionValue,
            socials: {
                github: githubLink,
                linkedin: linkedinLink,
                twitter: twitterLink,
            },
            resumeLink: resume,
            about: {
                description: aboutDesc,
                techStack: techStack,
                aboutImage: aboutImageUrl,
            }
        };
        // console.log(updatedData);
        updatePortfolio(updatedData)
        reFetch();
    }

    return (
        <div
            className={'min-h-screen w-full text-white  pt-20 flex flex-col items-center justify-center'}>

            <div className={'bg-gradient-to-br from-zinc-950/30 via-zinc-900/30 to-zinc-800/30 backdrop-blur-xl rounded-xl min-h-[90%] w-[90%] border border-gray-700 p-8 flex flex-col '}>
                <div
                    className={'flex items-center justify-between mb-8'}>

                    <h1 className={'text-4xl font-bold '}>
                        Portfolio
                    </h1>
                    {!isEdit ?<button
                            className={'bg-blue-700 rounded py-2.5 px-5 font-bold '}
                            onClick={() => setIsEdit(true)}
                        >Edit</button> :
                        <button
                            className={'bg-zinc-800 rounded py-2.5 px-5 font-bold '}
                            onClick={() => {
                                handleUpdate()
                                setIsEdit(false)
                            }
                        }
                        >Update</button>}

                </div>

                <input
                    value={nameValue}
                    type="text"
                    className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'}
                    placeholder={'Name'}
                    onChange={(e)=>setNameValue(e.target.value)}
                    readOnly={!isEdit}

                />
                <div className={'flex items-center w-full'}>
                    <label className={'text-xl mx-4'}>
                        Image
                    </label>
                    <div className={'flex flex-col w-full'}>
                        <input
                            type="text"
                            className={'rounded p-3 bg-gray-700/20 mx-2 my-4 focus:outline-none w-full'}
                            placeholder={'Image Link'}
                            value={profileImageUrl}
                            onChange={handleProfileImageChange}
                            readOnly={!isEdit}

                        />
                        {profileImageUrl && (
                            <div className={'mx-2 mb-4 h-40 w-40 overflow-hidden rounded'}>
                                <img
                                    src={profileImageUrl}
                                    alt="Profile preview"
                                    className={'w-full h-full object-cover'}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <h2
                    className={'text-xl mx-4'}
                >Bio</h2>
                <input
                    value={proffesionValue}
                    type="text"
                    className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full'}
                    placeholder={'Bio seperated by "," '}
                    readOnly={!isEdit}
                    onChange={(e)=>setProffesionValue(e.target.value.split(','))}
                />
                <h2
                    className={'text-xl mx-4'}
                >Socials
                </h2>
                <div className={'flex items-center justify-center'}>
                    <input
                        value={githubLink}
                        type="text"
                        className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'}
                        placeholder={'Github'}
                        readOnly={!isEdit}
                        onChange={(e)=>setGithubLink(e.target.value)}
                    />
                    <input
                        value={linkedinLink}
                        type="text"
                        className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'}
                        placeholder={'LinkedIn'}
                        readOnly={!isEdit}
                        onChange={(e)=>setLinkedinLink(e.target.value)}
                    />
                    <input
                        value={twitterLink}
                        type="text"
                        className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'}
                        placeholder={'Twitter'}
                        readOnly={!isEdit}
                        onChange={(e)=>setTwitterLink(e.target.value)}
                    />
                </div>
                <div className={'flex items-center w-full'}>
                    <label className={'text-xl mx-4'}>
                        Resume
                    </label>
                    <input
                        value={resume}
                        type="text"
                        className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full'}
                        placeholder={'Resume Link'}
                        readOnly={!isEdit}
                        onChange={(e)=>setResume(e.target.value)}
                    />
                </div>

                <div
                    className={'w-full h-1 bg-gray-700 rounded my-6'}
                ></div>
                <h1 className={'text-4xl font-bold '}>
                    About
                </h1>
                <textarea
                    className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full h-40'}
                    placeholder={'About Description'}
                    value={aboutDesc}
                    readOnly={!isEdit}
                    onChange={(e)=>setAboutDesc(e.target.value)}
                >
                </textarea>
                <div className={'flex items-center w-full'}>
                    <label className={'text-xl mx-4'}>
                        Image
                    </label>
                    <div className={'flex flex-col w-full'}>
                        <input
                            type="text"
                            className={'rounded p-3 bg-gray-700/20 mx-2 my-4 focus:outline-none w-full'}
                            placeholder={'Image Link'}
                            value={aboutImageUrl}
                            onChange={handleAboutImageChange}
                            readOnly={!isEdit}
                        />
                        {aboutImageUrl && (
                            <div className={'mx-2 mb-4 h-40 w-40 overflow-hidden rounded'}>
                                <img
                                    src={aboutImageUrl}
                                    alt="About preview"
                                    className={'w-full h-full object-cover'}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className={'flex items-center  w-full'}>
                    <label className={'text-xl mx-4'}>
                        Tech
                    </label>
                    <input
                        value={techStack}
                        type="text"
                        className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full'}
                        placeholder={'Tech stack seperated by "," '}
                        readOnly={!isEdit}
                        onChange={(e)=>setTechStack(e.target.value.split(','))}
                    />
                </div>
            </div>
        </div>
    )
}
export default Portfolio