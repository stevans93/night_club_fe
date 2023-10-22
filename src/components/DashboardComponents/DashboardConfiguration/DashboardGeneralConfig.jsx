import { useRef, useState, useEffect } from "react";
import ClubsService from "../../../services/clubsService";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function DashboardGeneralConfig() {
  const logoInputRef = useRef();
  const locationInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const aboutInputRef = useRef();
  const facebookInputRef = useRef();
  const instagramInputRef = useRef();
  const whatsAppInputRef = useRef();

  const [club, setClub] = useState();

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;
  const userRole = ncUser ? ncUser.role : null;

  const handleConfigurationForm = async () => {
    await saveConfiguration(clubId);
  };

  const saveConfiguration = async (clubId) => {
    try {
      const club = {
        _id: clubId,
        clubLogo: logoInputRef.current.value,
        location: locationInputRef.current.value,
        email: emailInputRef.current.value,
        mobile: phoneInputRef.current.value,
        about: aboutInputRef.current.value,
        socialMedia: [
          { name: "Facebook", link: facebookInputRef.current.value },
          { name: "Instagram", link: instagramInputRef.current.value },
          { name: "WhatsApp", link: whatsAppInputRef.current.value },
        ],
      };

      await ClubsService.updateClub(clubId, club);
    } catch (error) {
      // Handle any errors here (e.g., show an error toast)
      console.error(
        "An error occurred while saving club configuration:",
        error
      );
    }
  };

  useEffect(() => {
    const fetchClubById = async () => {
      try {
        const clubInfo = await ClubsService.getSingleClub(clubId);

        setClub(clubInfo);
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching club info:", error);
      }
    };
    if (userRole !== "admin") {
      fetchClubById();
    }
  }, [clubId]);

  return (
    <div className="flex w-9/12 h-fit">
      {club && (
        <form className="flex flex-col gap-5 px-4 w-6/12 py-5 shadow-lg ml-10 mt-4 bg-white">
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="logo">Logo</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your logo url"
              id="logo"
              ref={logoInputRef}
              defaultValue={club.clubLogo}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="location">Location</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your location"
              id="location"
              ref={locationInputRef}
              defaultValue={club.location}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your email"
              id="email"
              ref={emailInputRef}
              defaultValue={club.email}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="phone">Mobile</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your phone"
              id="phone"
              ref={phoneInputRef}
              defaultValue={club.mobile}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="about">Footer About</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your text"
              id="about"
              ref={aboutInputRef}
              defaultValue={club.about}
            />
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="facebook">Facebook</label>
            <div className="flex w-full items-center rounded-lg border-2 px-3">
              <FaFacebookF size="1.2rem" />
              <input
                className="h-10 w-full ml-3 px-2 border-l-2"
                type="text"
                placeholder="Enter your facebook link"
                id="facebook"
                ref={facebookInputRef}
                defaultValue={
                  club.socialMedia.find((x) => x.name === "Facebook")
                    ? club.socialMedia.find((x) => x.name === "Facebook").link
                    : ""
                }
              />
            </div>
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="instagram">Instagram</label>
            <div className="flex w-full items-center rounded-lg border-2 px-3">
              <BsInstagram size="1.2rem" />
              <input
                className="h-10 w-full ml-3 px-2 border-l-2"
                type="text"
                placeholder="Enter your instagram link"
                id="instagram"
                ref={instagramInputRef}
                defaultValue={
                  club.socialMedia.find((x) => x.name === "Instagram")
                    ? club.socialMedia.find((x) => x.name === "Instagram").link
                    : ""
                }
              />
            </div>
          </div>
          <div className="flex flex-col w-3/5 gap-2">
            <label htmlFor="whatsApp">Whats App</label>
            <div className="flex w-full items-center rounded-lg border-2 px-3">
              <BsWhatsapp size="1.2rem" />
              <input
                className="h-10 w-full ml-3 px-2 border-l-2"
                type="text"
                placeholder="Enter your whatsApp link"
                id="whatsApp"
                ref={whatsAppInputRef}
                defaultValue={
                  club.socialMedia.find((x) => x.name === "WhatsApp")
                    ? club.socialMedia.find((x) => x.name === "WhatsApp").link
                    : ""
                }
              />
            </div>
          </div>
          <button
            onClick={handleConfigurationForm}
            className="flex border-2 w-fit px-10 py-2 rounded-lg bg-primary text-white"
          >
            Confirm
          </button>
        </form>
      )}
      <div className="flex flex-col w-4/12 ml-10">
        <div className="flex flex-col gap-2 mt-4 h-fit bg-white shadow-lg">
          <span className="border-b-2 py-2 px-3">Logo</span>
          <div className="flex flex-col px-2 py-2">
            <div className="flex items-center justify-center w-2/5 m-auto">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm dark:text-gray-400">
                    <span>upload logo image</span>
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <button className="bg-[#475DDB] text-white py-2 px-8 rounded-md mt-3 w-fit self-end">
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 shadow-lg bg-white mt-8 h-fit">
          <span className="border-b-2 py-2 px-3">Thumbnail Photo</span>
          <div className="flex flex-col px-2 py-2">
            <div className="flex items-center justify-center w-full m-auto">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <svg
                    className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm dark:text-gray-400">
                    <span>upload Thumbnail image</span>
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <button className="bg-[#475DDB] text-white py-2 px-8 rounded-md mt-5 w-fit self-end">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardGeneralConfig;
