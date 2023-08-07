import styles from "@/app";

interface NewFeaturesProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const NewFeatures = ({ imgUrl, title, subtitle }: NewFeaturesProps) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323F5D]`}>
        <img src={imgUrl} alt='icon' className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-[26px] font-bold text-2xl text-white">{title}</h1>
      <p className="flex-1 mt-4 font-normal text-lg text-[#B0B0B0]">{subtitle}</p>
    </div>
  )
}

export default NewFeatures;
