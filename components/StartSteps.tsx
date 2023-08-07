import styles from "@/app";

interface StartStepProps {
  number: number;
  text: string;
}

const StartSteps = ({ number, text }: StartStepProps) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323F5D]`}>
        <p className="font-bold text-xl text-white">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-lg text-[#B0B0B0]">{text}</p>
    </div>
  )
};

export default StartSteps;
