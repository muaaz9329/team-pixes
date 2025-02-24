type Prop = {
  children: React.ReactNode;
};

const Bg = ({ children }: Prop) => {
  return (
    <div className="w-full min-h-screen bg-white px-12 pt-6">{children}</div>
  );
};

export default Bg;
