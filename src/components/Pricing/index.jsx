import React from "react";
import check from "../../assets/images/icon-check.svg";
import '../../index.css'

export default class Pricing extends React.Component {
  state = {
    range: 0,
  };

  rangeHandle = (event) => {
    this.setState({
      range: event.target.value,
    });
  };
  billingHandle = () => {
    document.getElementById("billing").classList.toggle("justify-end");
  };

  render() {
    return (
      <div className="sm:w-100 w-80 h-100">
        <div className="background w-full h-1/3 bg-circles bg-no-repeat bg-center text-center flex flex-col justify-center gap-3">
          <h1 className="sm:text-3xl text-lg text-Dark-Desaturated-Blue font-bold">
            Simple, traffic-based pricing
          </h1>
          <p className="text-Grayish-Blue max-sm:px-12">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>
        <div className="flex flex-col bg-white drop-shadow-lg rounded-xl">
          <div className="w-full h-3/4 rounded-xl px-14 py-8 max-sm:px-7 flex flex-col gap-5">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:grid-rows-3">
              <p className="h-16 font-medium text-Grayish-Blue uppercase flex items-center justify-start max-sm:justify-center">
                100k pageviews
              </p>
              <h2 className="h-16 text-4xl flex items-center justify-end max-sm:row-span-1 max-sm:flex max-sm:justify-center max-sm:row-start-3">
                ${this.state.range}
                <span className="text-lg text-Grayish-Blue">/month</span>
              </h2>
              <input
                onChange={(event) => this.rangeHandle(event)}
                className="h-4 col-span-2 bg-Soft-Cyan hover:bg-Strong-Cyan text-Light-Grayish-Blue-slider border-0 appearance-none rounded-full shadow-lg cursor-col-resize"
                type="range"
                value={this.state.range}
                min={0}
                max={30}
                step={1}
              />
            </div>
            <div className="flex justify-center items-center gap-4 max-sm:gap-2 max-sm:text-xs">
              <p className="text-Grayish-Blue text-md">Monthly Billing</p>
              <div
                id="billing"
                onClick={() => this.billingHandle()}
                className="w-12 h-6 bg-Light-Grayish-Blue rounded-full p-1 cursor-pointer hover:bg-Soft-Cyan flex"
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <p className="text-Grayish-Blue text-md">
                Yearly Billing{" "}
                <span className="bg-Light-Grayish-Red text-Light-Red rounded-full px-1">
                  <span className="hidden">-</span>25%{" "}
                  <span className="max-sm:hidden">discount</span>
                </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="w-full flex items-center justify-between p-12 max-sm:py-10 max-sm:flex-col max-sm:gap-5">
            <div className="font-normal text-slate-400 flex flex-col gap-3">
              <span className="flex items-center gap-3">
                <img src={check} alt="icon-check" /> <p>Unlimited websites</p>
              </span>
              <span className="flex items-center gap-3">
                <img src={check} alt="icon-check" /> <p>100% data ownership</p>
              </span>
              <span className="flex items-center gap-3">
                <img src={check} alt="icon-check" /> <p>Email reports</p>
              </span>
            </div>
            <button className="bg-Dark-Desaturated-Blue text-Pure-Blue py-4 px-10 rounded-full hover:bg-blue-950">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    );
  }
}
