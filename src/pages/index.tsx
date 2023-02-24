import Image from 'next/image';

export default function Home() {

  return (
    <main className='bg-salmon'>
      <nav className="lg:flex justify-center bg-salmon">
        <div className="flex justify-between items-center border-b md:border w-full lg:w-4/5 lg:mt-10">
          <div className="bg-black text-white p-5 uppercase font-bold text-lg">
            Binary Sails
          </div>
          <div className="hidden md:flex justify-evenly gap-10 px-7">
            <a href="#" className="py-5 hover:text-orange">Home</a>
            <a href="#" className="py-5 hover:text-orange">Services</a>
            <a href="#" className="py-5 hover:text-orange">Tools</a>
            <a href="#" className="py-5 hover:text-orange">Contact</a>
          </div>
          <div className="md:hidden flex flex-col gap-1 mr-2">
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
          </div>
        </div>
      </nav>

      <section className="w-full">
        <div className="w-full bg-salmon flex flex-col gap-16 justify-center items-center h-screen pt-16 lg:py-16">
          <h1 className="text-6xl uppercase font-bold text-center">
            Lead.<br />
            <b className="text-orange">Achieve.</b><br />
            Succeed.
          </h1>
          <div className="relative w-[550px] h-[1000px] bg-black max-w-full">
            <Image
              src="/middle-3.jpg"
              alt="image"
              className='object-cover h-fit w-fit'
              fill={true}
            />
          </div>
        </div>
      </section>

      <section className="w-full border-y border-black flex justify-center">
        <div className="w-10/12 lg:w-2/5 py-16 lg:p-16 flex flex-col gap-5">
          <h1 className="text-6xl">About</h1>
          <p>
            I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>
      </section>

      <footer className="bg-black text-white p-10 flex justify-between">
        <div className="w-full flex flex-col justify-between gap-24">
          <h2 className="text-2xl uppercase font-bold">Behind a good office<br />there is always a good <span className="text-[#ffa500]">software</span>.</h2>
          <span className="text-sm">&copy; 2023 Binary Sails</span>
        </div>
        <div className="flex flex-col gap-1 w-52">
          <a className="hover:text-orange" href="#">Terms & Conditions</a>
          <a className="hover:text-orange" href="#">Privacy Policy</a>
          <a className="hover:text-orange" href="#">FAQ</a>
        </div>
      </footer>

    </main>
  );
}
