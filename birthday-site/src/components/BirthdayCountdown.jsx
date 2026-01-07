import Countdown from "react-countdown";

const BirthdayCountdown = () => {
  // Updated to Jan 8, 2026 so the countdown works from today
  const birthday = new Date("2026-01-08T00:00:00"); 

  // Component to show once the countdown finishes
  const Completionist = () => (
    <span className="text-2xl md:text-4xl font-serif text-rose-600 animate-bounce">
      ✨ It's Your Special Day! Happy Birthday! 🎂✨
    </span>
  );

  return (
    <div className="flex justify-center my-10 px-4">
      <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-3xl shadow-xl max-w-lg w-full text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-rose-800">
          Counting down to Jan 8th... 🌹
        </h2>
        
        <Countdown
          date={birthday}
          renderer={({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <Completionist />;
            } else {
              // Render the countdown
              return (
                <div className="flex justify-center gap-4 text-rose-600 font-mono text-3xl md:text-4xl">
                  <div className="flex flex-col bg-white/50 p-2 rounded-xl min-w-[70px]">
                    <span>{days}</span>
                    <span className="text-[10px] uppercase font-sans text-rose-400 font-bold tracking-widest">Days</span>
                  </div>
                  <div className="flex flex-col bg-white/50 p-2 rounded-xl min-w-[70px]">
                    <span>{hours}</span>
                    <span className="text-[10px] uppercase font-sans text-rose-400 font-bold tracking-widest">Hrs</span>
                  </div>
                  <div className="flex flex-col bg-white/50 p-2 rounded-xl min-w-[70px]">
                    <span>{minutes}</span>
                    <span className="text-[10px] uppercase font-sans text-rose-400 font-bold tracking-widest">Min</span>
                  </div>
                  <div className="flex flex-col bg-white/50 p-2 rounded-xl min-w-[70px]">
                    <span>{seconds}</span>
                    <span className="text-[10px] uppercase font-sans text-rose-400 font-bold tracking-widest">Sec</span>
                  </div>
                </div>
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default BirthdayCountdown;