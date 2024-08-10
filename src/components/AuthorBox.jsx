const AuthorBox = () => {
  return (
    <>
      <div className="md:flex hidden fixed bottom-0 right-0 px-16 py-2 rounded-l-full text-content my-6 bg-primary">
        Made with ♥️ by&#160;
        <a
          className="underline text-stone-900"
          href="https://github.com/dadcuy"
        >
          Ubaid
        </a>
      </div>
      <div className="md:hidden block top-0 absolute text-center w-full py-2 bg-primary">
        Made with ♥️ by&#160;
        <a
          className="underline text-stone-900"
          href="https://github.com/dadcuy"
        >
          Ubaid
        </a>
      </div>
    </>
  );
};

export default AuthorBox;
