function LanguageIcons() {
  return (
    <div className="bg-[#091427] opacity-60 w-full h-[150px] mt-30 flex justify-between items-center">
      <img
        src="/icons/JS.png"
        alt="javascript"
        className="w-1/15 h-[140px] object-cover opacity-40 ml-20"
      />
      <img
        src="/icons/ts.png"
        alt="typescript"
        className="w-1/15 h-[140px] object-cover opacity-40"
      />
      <img
        src="/icons/react.png"
        alt="React"
        className="w-1/15 h-[120px] object-cover opacity-40"
      />
      <img
        src="/icons/nextjs.png"
        alt="Nextjs"
        className="w-1/15 h-[100px] object-cover opacity-40 mr-20"
      />
    </div>
  );
}

export default LanguageIcons