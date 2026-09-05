function Sponsors() {
  return (
    <div className="flex items-center flex-col mt-12">
      <h1 className="text-2xl font-bold">Sponsors</h1>
      <p>...</p>
      <div className="mt-4 flex gap-4">
        <div className="size-18 rounded-full bg-black" />
        <div className="size-18 rounded-full bg-black" />
        <div className="size-18 rounded-full bg-black" />
      </div>
      <p className="mt-12 max-w-136 text-center italic">
        Want to sponsor CamWall? Feel free to{" "}
        <span className="font-bold">donate</span>, use{" "}
        <span className="font-bold">GitHub Sponsors</span>, or reach out
        directly to <span className="font-bold">yassinehaimouch@proton.me</span>
      </p>
    </div>
  );
}

export default Sponsors;
