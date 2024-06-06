import BackButton from "../components/BackButton";

const ErrorPage = () => {
  return (
    <div className="bg-auto font-pixelify size-screen bg-gradient ">
      <BackButton link={'/'}/>
      <div className=" bg-[url('/images/background.png')] bg-[length:150px_150px] bg-animation h-screen w-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-2"></div>
        <div className="bg-[url('/images/home.png')] bg-cover h-4/5 w-1/2 flex flex-col justify-center z-10">
          <div className="flex flex-col justify-evenly h-full items-center">
            
            <div className="flex flex-col gap-5 justify-center items-center">
            <img
              className="w-96"
              src="/images/404.png"
              alt=""
            />
              <h2 className="text-3xl font-bold">Página no encontrada</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
