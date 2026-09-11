const FEATURES = [
  {
    title: "Free",
    desc: "Accessibility tooling belongs in everyone's hands, not behind a paywall.",
  },
  {
    title: "Open Source",
    desc: "Together we can build further. Extend CamWall for yourself and contribute to something bigger.",
  },
  {
    title: "Private",
    desc: "Your video stays local. Set your camera as your wallpaper without any footage touching the cloud.",
  },
  {
    title: "Simple",
    desc: "One tool, one job. Turn your camera into your wallpaper.",
  },
];

function Features() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-8 sm:gap-y-5">
      {FEATURES.map((el, index) => (
        <div key={`${el.title + index}`}>
          <h2 className="text-2xl font-bold">{el.title}</h2>
          <p className="text-lg mt-1">{el.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
