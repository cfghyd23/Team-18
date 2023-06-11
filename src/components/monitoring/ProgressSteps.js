
import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class ProgressSteps extends React.Component {
  render() {
    return (
      <div>
        <ProgressBar
          percent={75}
          filledBackground="linear-gradient(to center, #fefb72, #f0bb31)"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-green-checkmark-error-png-image_4402412.jpg"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div>
                <div style={{ position: "relative" }}>
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="30"
                    src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-green-checkmark-error-png-image_4402412.jpg"
                  />
                  {accomplished && (
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginTop: '10px'
                      }}
                    >
                    <button>Certificate</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div>
                <img
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                   src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-green-checkmark-error-png-image_4402412.jpg"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: '10px'
                  }}
                >
                  <button>LoR</button>
                </div>
                {accomplished && (
                  <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    marginTop: '10px'
                  }}
                >
                  <button>LoR</button>
                </div>
                )}
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    );
  }
}

export default ProgressSteps;
