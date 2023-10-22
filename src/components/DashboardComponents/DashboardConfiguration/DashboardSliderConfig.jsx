import { useRef, useState, useEffect } from "react";
import ClubsService from "../../../services/clubsService";
import SiteService from "../../../services/siteService";

const DashboardSliderConfig = (props) => {
  const image1InputRef = useRef();
  const image2InputRef = useRef();
  const image3InputRef = useRef();
  const image4InputRef = useRef();
  const image5InputRef = useRef();
  const image6InputRef = useRef();

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;
  const userRole = ncUser ? ncUser.role : null;

  // const [club, setClub] = useState();

  const handleImagesForm = async (event) => {
    event.preventDefault();
    await saveImages(clubId);
    window.location.reload();
  };

  const saveImages = async (clubId) => {
    const club = {
      _id: clubId,
      sliderImages: [
        { name: "image1", link: image1InputRef.current.value },
        { name: "image2", link: image2InputRef.current.value },
        { name: "image3", link: image3InputRef.current.value },
        { name: "image4", link: image4InputRef.current.value },
        { name: "image5", link: image5InputRef.current.value },
        { name: "image6", link: image6InputRef.current.value },
      ],
    };
    try {
      if (userRole !== "admin") {
        await ClubsService.updateClub(clubId, club);
      } else {
        await SiteService.editSingleSite(club);
      }
      // Handle the response as needed
      if (response) {
        // Handle success
        console.log("images updated successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to update images");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while updating the images:", error);
    }
  };

  // useEffect(() => {
  //   const fetchClubById = async () => {
  //     try {
  //       const clubInfo = await ClubsService.getSingleClub(clubId);

  //       setClub(clubInfo);
  //     } catch (error) {
  //       // Handle any errors here
  //       console.error("An error occurred while fetching club info:", error);
  //     }
  //   };

  //   fetchClubById();
  // }, [clubId]);

  return (
    <>
      {/* {club && ( */}
      <form className="flex flex-col items-center w-4/12 ml-10 mt-4 bg-white shadow-lg px-4 py-4 gap-4 h-fit">
        <span className="flex">Slider images</span>
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-9/12 gap-2">
            <label htmlFor="image1">image1</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your image"
              id="image1"
              ref={image1InputRef}
              defaultValue={
                props.dashboardSliderImages[0] &&
                props.dashboardSliderImages[0].link
                  ? props.dashboardSliderImages[0].link
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-center w-2/12">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-10 self-end border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
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
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-9/12 gap-2">
            <label htmlFor="image2">image2</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your image"
              id="image2"
              ref={image2InputRef}
              defaultValue={
                props.dashboardSliderImages[1] &&
                props.dashboardSliderImages[1].link
                  ? props.dashboardSliderImages[1].link
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-center w-2/12">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-10 self-end border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
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
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-9/12 gap-2">
            <label htmlFor="image3">image3</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your image"
              id="image3"
              ref={image3InputRef}
              defaultValue={
                props.dashboardSliderImages[2] &&
                props.dashboardSliderImages[2].link
                  ? props.dashboardSliderImages[2].link
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-center w-2/12">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-10 self-end border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
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
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-9/12 gap-2">
            <label htmlFor="image4">image4</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your image"
              id="image4"
              ref={image4InputRef}
              defaultValue={
                props.dashboardSliderImages[3] &&
                props.dashboardSliderImages[3].link
                  ? props.dashboardSliderImages[3].link
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-center w-2/12">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-10 self-end border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
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
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-9/12 gap-2">
            <label htmlFor="image5">image5</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your image"
              id="image5"
              ref={image5InputRef}
              defaultValue={
                props.dashboardSliderImages[4] &&
                props.dashboardSliderImages[4].link
                  ? props.dashboardSliderImages[4].link
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-center w-2/12">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-10 self-end border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
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
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-9/12 gap-2">
            <label htmlFor="image6">image6</label>
            <input
              className="border-2 rounded-lg px-2 h-10"
              type="text"
              placeholder="Enter your image"
              id="image6"
              ref={image6InputRef}
              defaultValue={
                props.dashboardSliderImages[5] &&
                props.dashboardSliderImages[5].link
                  ? props.dashboardSliderImages[5].link
                  : ""
              }
            />
          </div>
          <div className="flex items-center justify-center w-2/12">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-10 self-end border-2 border-gray-400 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
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
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <button
          onClick={handleImagesForm}
          className="flex bg-primary text-white py-3 px-12 rounded-lg"
        >
          Confirm
        </button>
      </form>
      {/* )} */}
    </>
  );
};

export default DashboardSliderConfig;
