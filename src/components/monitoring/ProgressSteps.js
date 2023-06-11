import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
 
class ProgressSteps extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
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
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-green-checkmark-error-png-image_4402412.jpg"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://png.pngtree.com/png-clipart/20190902/original/pngtree-green-checkmark-error-png-image_4402412.jpg"
            />
          )}
        </Step>
      </ProgressBar>
    );
  }
}
export default ProgressSteps;