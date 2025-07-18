// imports
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/app/_components/Navigation";
import Footer from "@/app/_components/Footer";

export default function LandingPage() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      {/* Background image of hero section */}
      <div className="absolute inset-0 w-full h-[98dvh] -z-[1000]">
        <Image
          src="/landing_bg.jpg"
          alt="User Photos 1"
          layout="fill"
          objectFit="fill"
          className="absolute"
        />
      </div>

      {/* Black cover up on the hero section background image */}
      <div className="absolute inset-0 w-full h-[98dvh] bg-black/10 -z-[50]"></div>

      <main>
        <section className="h-[80dvh] mt-[92px] z-[100]">
          <h2 className="text-white text-[92px] font-bold text-center ">
            <span className="block leading-tight">Capture Your Thoughts,</span>
            <span className="block leading-tight">Anytime, Anywhere</span>
          </h2>
          <Link
            href="#"
            className="rounded-full bg-btn px-12 py-2.5 text-lg text-white cursor-pointer block mx-auto w-fit mt-16"
          >
            Get Started
          </Link>
        </section>
        <section className="mx-auto w-full max-w-[1400px] mt-20">
          <h3 className="text-6xl font-bold text-center">Insights_</h3>
          <div className="flex items-center justify-between mt-16">
            <div className="border-l-2 border-dashed border-l-black pl-4 pt-2">
              <p className="text-2xl font-medium">Satisfied Rate</p>
              <p className="text-[76px] font-semibold leading-tight">99%</p>
            </div>
            <div className="border-l-2 border-dashed border-l-black pl-4 pt-2">
              <p className="text-2xl font-medium">Happy Users</p>
              <p className="text-[76px] font-semibold leading-tight">160k+</p>
            </div>
            <div className="border-l-2 border-dashed border-l-black pl-4 pt-2">
              <p className="text-2xl font-medium">Monthly Active Users</p>
              <p className="text-[76px] font-semibold leading-tight">10k+</p>
            </div>
            <div className="border-l-2 border-dashed border-l-black pl-4 pt-2">
              <p className="text-2xl font-medium">Response Time</p>
              <p className="text-[76px] font-semibold leading-tight">50ms</p>
            </div>
          </div>
        </section>
        <section className="bg-sky-50 mt-32 py-14">
          <div className="mx-auto w-full max-w-[1400px]">
            <h3 className="text-4xl font-bold text-center">
              A Sneak Peek at Your Future Memos
            </h3>
            <p className="text-lg text-center">
              Writing memos has never been this simple. Take a look at how it
              works!
            </p>
            <div className="grid grid-cols-4 grid-rows-[260px] gap-6 mt-14">
              <div className=" p-4 relative bg-cyan-200">
                <h2 className="font-bold text-2xl">Innovative Memo Tool</h2>
                <p className="mt-4">
                  A stylish journaling application that allows users to record
                  track their moods. Start creating memos to note down important
                  things, that you don&apos;t want to forget!
                </p>
                <div className="absolute bottom-[10px] right-[10px]">
                  <span className="block font-medium text-sm">
                    Shishir Sabbir
                  </span>
                  <span className="block text-xs">13 Mar 2025</span>
                </div>
              </div>
              <div className=" p-4 relative bg-cyan-200">
                <h2 className="font-bold text-2xl">Creative Note Keeper</h2>
                <p className="mt-4">
                  An elegant journaling app that empowers users to capture audio
                  notes, monitor their emotional states, and receive insightful
                  AI-generated summaries.
                </p>
                <div className="absolute bottom-[10px] right-[10px]">
                  <span className="block font-medium text-sm">
                    Shishir Sabbir
                  </span>
                  <span className="block text-xs">13 Mar 2025</span>
                </div>
              </div>
              <div className=" p-4 relative bg-cyan-200">
                <h2 className="font-bold text-2xl">Dynamic Memo Organizer</h2>
                <p className="mt-4">
                  A modern journaling platform that enables users to save voice
                  memos, analyze their moods, and access AI-crafted summaries.
                  Monetization.
                </p>
                <div className="absolute bottom-[10px] right-[10px]">
                  <span className="block font-medium text-sm">
                    Shishir Sabbir
                  </span>
                  <span className="block text-xs">13 Mar 2025</span>
                </div>
              </div>
              <div className=" p-4 relative bg-cyan-200">
                <h2 className="font-bold text-2xl">Smart Memo Manager</h2>
                <p className="mt-4">
                  A chic journaling solution that allows users to document audio
                  notes, track their feelings, and benefit from AI-generated
                  insights. Revenue opportunities could encompass.
                </p>
                <div className="absolute bottom-[10px] right-[10px]">
                  <span className="block font-medium text-sm">
                    Shishir Sabbir
                  </span>
                  <span className="block text-xs">13 Mar 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-full max-w-[1400px] mt-28">
          <h3 className="text-4xl font-bold text-center">
            What people think about us_
          </h3>
          <div className="grid grid-cols-2 grid-rows-[_240px_240px] gap-6 mt-16">
            <div className="row-span-2 flex bg-white shadow-2xl">
              <div className="flex-1/2 relative">
                <Image
                  src="/landing_user1.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="User Photos 1"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="flex-1/2 mt-4 px-4">
                <p className="text-2xl font-bold leading-tight">Emma Janes</p>
                <p className="mt-0.5">Web Designer</p>
                <p className="text-lg mt-4">
                  As a web designer, I appreciate the clean UI and customizable
                  templates. It&apos;s rare to find tools that balance power and
                  simplicity this well. 10/10.
                </p>
              </div>
            </div>
            <div className="flex bg-white shadow-2xl">
              <div className="flex-1/2 relative">
                <Image
                  src="/landing_user2.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="User Photos 2"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="flex-1/2 mt-4 px-4">
                <p className="text-2xl font-bold leading-tight">Emil Sorense</p>
                <p className="mt-0.5">CEO, GreenGrowth Apps</p>
                <p className="text-lg mt-4">
                  As a designer, I appreciate the clean UI and customizable
                  templates. It&apos;s rare to find tools that balance power and
                  simplicity this well. 10/10!
                </p>
              </div>
            </div>
            <div className="flex bg-white shadow-2xl">
              <div className="flex-1/2 relative">
                <Image
                  src="/landing_user3.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="User Photos 3"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="flex-1/2 mt-4 px-4">
                <p className="text-2xl font-bold leading-tight">
                  Anders Nielsen
                </p>
                <p className="mt-0.5">HR Manager (Remote/Hybrid)</p>
                <p className="text-lg mt-4">
                  Finally, a memo app that syncs instantly between my Copenhagen
                  office and home. The shared team memos eliminated 90% of our
                  miscommunications.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto w-full max-w-[1400px] flex mt-28">
          <div className="flex-1/2">
            <p className="text-3xl w-[60%]">
              We are here for you today, tomorrow, and always.
            </p>
          </div>
          <div className="flex-1/2">
            <p className="">
              At N_memo, we&apos;re committed to providing exceptional support
              whenever you need it. Our friendly, knowledgeable team is
              available around the clock to answer questions, troubleshoot
              issues, and ensure you get the most out of our platform. Whether
              you prefer live chat, email, or our comprehensive help center, we
              make it easy to find solutions—so you can focus on what matters
              most. Your success is our success, and we&apos;re always just a
              click away.
            </p>
            <Link
              href="#"
              className="rounded-full bg-black px-12 py-2.5 text-lg text-white cursor-pointer block w-fit mt-6"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
