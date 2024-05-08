const Footer = () => {
  
  return (
    <div className="flex justify-center gap-10 items-center font-pixelify bg-[url('/src/assets/images/footer-border.png')] bg-cover p-2 pt-7 text-white">
      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Habilidades</div>
        <div className="grid grid-cols-4 gap-3 bg-[url('/src/assets/images/abilities-border.png')] bg-cover p-[1.4rem]">
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center">
            🖋️
          </div>
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center p-7">
            <img src="/src/assets/icons/sword_02b.png" alt="" className="size-2"/>
          </div>
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center p-7"></div>
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center p-7"></div>
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center p-7"></div>
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center p-7"></div>
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center p-7">
            👀
          </div>
          <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover size-14 flex justify-center items-center p-7"></div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Armas</div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-[url('/src/assets/images/weapon-inner-border.png')] bg-cover w-[4.4rem] h-36 flex justify-center items-center p-[1.35rem]">
            <img src="/src/assets/images/wood-sword1.png" alt="" className=""/>
          </div>
          <div className="bg-[url('/src/assets/images/weapon-inner-border.png')] bg-cover w-[4.4rem] h-36 flex justify-center items-center p-8"></div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Objeto</div>
        <div className="bg-[url('/src/assets/images/inventory-slot-10.png')] size-20 bg-cover p-6"></div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Personaje</div>
        <div className="flex justify-center items-center gap-4 bg-[url('/src/assets/images/abilities-border.png')] bg-cover h-44 w-80 p-8">
          <div className="">
            <div className="flex items-center gap-2 text-center font-bold uppercase"><img src="/src/assets/icons/level-icon.png" alt="" /> Lvl 3</div>
            <div className="bg-[url('/src/assets/images/inventory-slot-1.png')] bg-cover p-2">
              <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M12 4.354l2.122 2.122a4 4 0 11-5.656 0L12 4.354zM12 12a2 2 0 100-4 2 2 0 000 4zm0 0v8"></path>
              </svg>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2"><img src="/src/assets/icons/heart-icon.png" alt="" /> <p className="text-lg">50/100 HP</p></div>
            <div className="flex items-center gap-2"><img src="/src/assets/icons/shield-icon.png" alt="" /> <p className="text-lg">20 DEF</p></div>
            <div className="flex items-center gap-2"><img src="/src/assets/icons/attack-icon.png" alt="" /> <p className="text-lg">10 ATK</p></div>
            <div className="flex items-center gap-2"><img src="/src/assets/icons/critick-icon-2.png" alt="" /> <p className="text-lg">20% CRIT</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


