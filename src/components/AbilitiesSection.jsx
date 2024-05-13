import { BASE_URL } from "../api/apiRequest";

const AbilitiesSection = ({abilities}) => {
  return (
    <div className="grid grid-cols-4 gap-3 bg-[url('/src/assets/images/abilities-border.png')] bg-cover p-[1.4rem]">
          {[...Array(8)].map((_, index) => {
            return (
              <div
                key={index}
                className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center"
              >
                {abilities[index] ? (
                  <img src={`${BASE_URL}/img/${abilities[index]?.imageFilename}`} alt="" className="size-10 image-cursor rounded" />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
  )
}

export default AbilitiesSection