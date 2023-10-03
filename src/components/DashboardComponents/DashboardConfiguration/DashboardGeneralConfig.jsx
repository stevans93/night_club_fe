import { useRef, useState, useEffect } from "react";
import ClubsService from "../../../services/clubsService";
import { showToast } from "../../../helpers/toast";

function DashboardGeneralConfig() {
  const logoInputRef = useRef();
  const imageInputRef = useRef();
  const locationInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const [club, setClub] = useState();

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  const handleConfigurationForm = async () => {
    await saveConfiguration(clubId);
  };

  const saveConfiguration = async (clubId) => {
    try {
      const club = {
        _id: clubId,
        clubLogo: logoInputRef.current.value,
        profileImage: imageInputRef.current.value,
        location: locationInputRef.current.value,
        email: emailInputRef.current.value,
        mobile: phoneInputRef.current.value,
      };
      await ClubsService.updateClub(clubId, club);
      showToast("Club updated successfully", "success");
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

    fetchClubById();
  }, [clubId]);

  return (
    <>
      {club && (
        <form className="flex flex-col gap-5 px-4 w-10/12 border-t-2 py-5">
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
            <label htmlFor="image">Image</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your image url"
              id="image"
              ref={imageInputRef}
              defaultValue={club.profileImage}
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
          <button
            onClick={handleConfigurationForm}
            className="flex border-2 w-fit px-10 py-2 rounded-lg bg-gray-400"
          >
            Confirm
          </button>
        </form>
      )}
    </>
  );
}

export default DashboardGeneralConfig;
