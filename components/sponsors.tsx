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
      <p className="mt-12 max-w-md sm:max-w-136 text-center italic">
        Want to sponsor CamWall? Feel free to{" "}
        <a
          href="https://github.com/sponsors/letyassine/"
          className="font-bold hover:underline"
        >
          donate
        </a>
        , use{" "}
        <a
          href="https://github.com/sponsors/letyassine/"
          className="font-bold hover:underline"
        >
          GitHub Sponsors
        </a>
        , or reach out directly to{" "}
        <a
          href="mailto:yassinehaimouch@proton.me"
          className="font-bold hover:underline"
        >
          yassinehaimouch@proton.me
        </a>
      </p>
    </div>
  );
}

export default Sponsors;
