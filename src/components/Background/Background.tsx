function Background() {
  return (
    <div className="relative w-screen h-auto">
      <img
        src="/background/back1.svg"
        alt="Background"
        className="w-7/12 absolute right-0 object-cover "
      />

      <img
        src="/background/back2.svg"
        alt="Background"
        className="w-5/12 absolute left-[-100px] top-110 "
      />

      <img
        src="/background/back3.svg"
        alt="Background"
        className="w-5/12 absolute right-0 top-400 "
      />

      <img
        src="/background/back4.svg"
        alt="Background"
        className="w-5/12 absolute left-0 top-600 "
        />
    </div>
  );
}

export default Background;
