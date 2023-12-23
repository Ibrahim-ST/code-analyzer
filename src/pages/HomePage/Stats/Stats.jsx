import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by creators worldwide
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                We can help you grow your audience and your business, no matter
                the size.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-2 justify-center items-center bg-white/5 px-8 py-14">
                <dt className="text-2xl font-semibold leading-6 text-white">
                  Clients Served
                </dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-white">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <span>
                        <CountUp start={0} end={14} duration={2} delay={0} /> +
                      </span>
                    )}
                  </ScrollTrigger>
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 py-14">
                <dt className="text-2xl font-semibold leading-6 text-white">
                  Projects Completed
                </dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-white">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <span>
                        <CountUp start={0} end={20} duration={3} delay={0} /> +
                      </span>
                    )}
                  </ScrollTrigger>
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 py-14">
                <dt className="text-2xl font-semibold leading-6 text-white">
                  Team Members
                </dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-white">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <span>
                        <CountUp start={0} end={3} duration={3} delay={0} />
                      </span>
                    )}
                  </ScrollTrigger>
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 px-8 py-14">
                <dt className="text-2xl font-semibold leading-6 text-white">
                  Customer Support
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && (
                      <span>
                        <CountUp start={0} end={24} duration={2} delay={0} /> /
                        <CountUp start={0} end={7} duration={2} delay={0} /> 
                      </span>
                    )}
                  </ScrollTrigger>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
