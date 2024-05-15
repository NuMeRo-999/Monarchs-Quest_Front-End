import { BASE_URL } from "../api/apiRequest"

const Heroe = ({heroe, weapons}) => {
  return (
    <div
              className={`w-[305px] h-[192px] bg-no-repeat heroe-idle z-10 flex justify-evenly items-center absolute left-[10%] top-[30%]`}
              style={{
                backgroundImage: `url('${BASE_URL}/img/${heroe?.imageFilename}')`,
              }}
            >
              {weapons.map((weapon, index) => (
                <div key={index}>
                  <img
                    src={`${BASE_URL}/img/${weapon?.image}`}
                    alt=""
                    className={`item-animation ${
                      weapon.image.includes("shield") ||
                      weapon.image.includes("dagger")
                        ? "pt-16"
                        : "pb-12"
                    }`}
                  />
                </div>
              ))}
            </div>
  )
}

export default Heroe