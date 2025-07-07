function Background() {
  return (
    <div className="relative w-screen h-auto">
      <img
        src="/background/back1.svg"
        alt="Background"
        className="w-1/1 sm:w-7/12 absolute right-0 sm:right-0 top-20 sm:top-30 object-cover "
      />

      <img
        src="/background/back2.svg"
        alt="Background"
        className="w-1/1 sm:w-5/12 absolute right-100px top-90 sm:top-110 "
      />

      <img
        src="/background/back3.svg"
        alt="Background"
        className="w-1/1 sm:w-5/12 absolute right-0 top-300 sm:top-400 "
      />

      <img
        src="/background/back4.svg"
        alt="Background"
        className="w-2/3 sm:w-5/12 absolute left-0 top-480 sm:top-600 "
      />
    </div>
  );
}

export default Background;
