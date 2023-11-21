import { useRef } from "react";
import ClubsService from "../../../../services/clubsService";

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

  const handleSaveForm = async (event) => {
    event.preventDefault();
    await saveClub();
    window.location.reload();
  };

  const saveClub = async () => {
    const club = {
      name: nameInputRef.current.value,
      bannerImage: bannerImageInputRef.current.value,
      type: typeInputRef.current.value,
    };

    const user = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      mobilePhone: mobilePhoneInputRef.current.value,
      birthDate: birthDateInputRef.current.value,
    };

    const clubAndUserData = { club: club, user: user };
    try {
      await ClubsService.addClub(clubAndUserData);
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("An error occurred while saving the club:", error);
    }
  };

  return (
    <form className="flex flex-col mt-5">
      <div className="flex justify-around">
        <div className="flex flex-col w-3/12">
          <span className="text-2xl text-center border-b-2 py-2">
            Informacije Kluba
          </span>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="name">
              Ime
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Unesite Ime..."
              id="name"
              type="text"
              ref={nameInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="bannerImage">
              Tag Objekta
            </label>
            <select
              name="tag"
              id="tag"
              className="py-3 px-2 border-2 border-black rounded-lg"
              ref={bannerImageInputRef}
            >
              <option value="Regularno Mesto">Regularno Mesto</option>
              <option value="Premijum Mesto">Premijum Mesto</option>
            </select>
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="type">
              Tip Objekta
            </label>
            <select
              name="type"
              id="type"
              className="py-3 px-2 border-2 border-black rounded-lg"
              ref={typeInputRef}
            >
              <option value="splav">Splav</option>
              <option value="diskoteka">Diskoteka</option>
              <option value="kafana">Kafana</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-3/12">
          <span className="text-2xl text-center border-b-2 py-2">
            Informacije Menadzera
          </span>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="firstName">
              Ime
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Unesite Ime..."
              id="firstName"
              type="text"
              ref={firstNameInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="lastName">
              Prezime
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Unesite Prezime..."
              id="lastName"
              type="text"
              ref={lastNameInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="email">
              E-mail Adresa
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Unesite E-mail Adresu..."
              id="email"
              type="text"
              ref={emailInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="password">
              Lozinka
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Unesite Lozinku..."
              id="password"
              type="text"
              ref={passwordInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="mobilePhone">
              Mobilni Telefon
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Unesite Mobilni Telefon..."
              id="mobilePhone"
              type="text"
              ref={mobilePhoneInputRef}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="mb-2 mt-2" htmlFor="birthDate">
              Datum Rođenja
            </label>
            <input
              className="py-3 px-2 border-2 border-black rounded-lg"
              placeholder="Unesite Datum"
              id="type"
              type="date"
              ref={birthDateInputRef}
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSaveForm}
        className="flex mt-10 self-center bg-primary w-fit text-white py-2 px-20 rounded-lg"
      >
        Potvrdi
      </button>
    </form>
  );
};

export default DashboardAddClub;
