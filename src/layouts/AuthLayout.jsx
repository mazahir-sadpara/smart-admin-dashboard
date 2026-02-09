const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-end px-6
      md:bg-[url('/background_img.png')] md:bg-left md:bg-no-repeat md:bg-size-[35%_auto]"
    >
      {/* Auth Card */}
      <div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
