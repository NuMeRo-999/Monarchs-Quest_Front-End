
const Footer = () => {
  return (
    <div className="flex items-center justify-center space-x-4 bg-black p-2 text-white">
      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Habilidades</div>
        <div className="grid grid-cols-8 gap-2 border border-white p-2">
          <div className="border border-white p-4">🖋️</div>
          <div className="border border-white p-4"></div>
          <div className="border border-white p-4"></div>
          <div className="border border-white p-4"></div>
          <div className="border border-white p-4"></div>
          <div className="border border-white p-4"></div>
          <div className="border border-white p-4">👀</div>
          <div className="border border-white p-4"></div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Armas</div>
        <div className="grid h-36 w-32 grid-cols-2 gap-2 border border-white p-2">
          <div className="border border-white p-4"></div>
          <div className="border border-white p-4"></div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Objetos</div>
        <div className="border border-white p-2">
          <div className="h-32 border border-white p-4"></div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="text-center font-bold uppercase">Personaje</div>
        <div className="flex gap-4 border border-white p-2">
          <div className="">
            <div className="text-center font-bold uppercase">⬆️ Lvl 3</div>
            <div className="border border-white p-4">
              <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 4.354l2.122 2.122a4 4 0 11-5.656 0L12 4.354zM12 12a2 2 0 100-4 2 2 0 000 4zm0 0v8"></path></svg>
            </div>
          </div>
          <div className="space-y-1">
            <div>❤️ 50/100 HP</div>
            <div>🛡️ 20 DEF</div>
            <div>⚔️ 10 ATK</div>
            <div>🎯 20% CRIT</div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Footer