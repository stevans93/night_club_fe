import { useRef } from "react";

const DashboardAddClub = () => {
  const bannerImageInputRef = useRef();
  const typeInputRef = useRef();
  const nameInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const mobilePhoneInputRef = useRef();
  const birthDateInputRef = useRef();

  return (
    <form className="flex flex-col">
      <div className="flex justify-around">
        <div className="flex flex-col w-3/12">
          <span className="text-2xl text-center border-b-2 py-2">
            Club Info
          </span>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="name">
              name
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Set name"
              id="name"
              type="text"
              ref={nameInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="bannerImage">
              Banner Image
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Enter banner Image"
              id="bannerImage"
              type="text"
              ref={bannerImageInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="type">
              type
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Enter type"
              id="type"
              type="text"
              ref={typeInputRef}
            />
          </div>
        </div>
        <div className="flex flex-col w-3/12">
          <span className="text-2xl text-center border-b-2 py-2">
            Manager Info
          </span>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="firstName">
              firstName
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Set firstName"
              id="firstName"
              type="text"
              ref={firstNameInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="lastName">
              lastName
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Enter lastName"
              id="lastName"
              type="text"
              ref={lastNameInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="email">
              email
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Enter email"
              id="email"
              type="text"
              ref={emailInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="password">
              password
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Set password"
              id="password"
              type="text"
              ref={passwordInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="mobilePhone">
              Mobile Phone
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Enter mobilePhone"
              id="mobilePhone"
              type="text"
              ref={mobilePhoneInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="birthDate">
              Birth Date
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Enter birthDate"
              id="type"
              type="date"
              ref={birthDateInputRef}
            />
          </div>
        </div>
      </div>

      <button className="flex mt-10 self-center bg-primary w-fit text-white py-2 px-20 rounded-lg">
        Confirm
      </button>
    </form>
  );
};

export default DashboardAddClub;
