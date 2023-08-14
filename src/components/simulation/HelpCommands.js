import React from "react";

export const HelpCommands = [
  {
    content: (
      <div>
        <p>Here, you'll practice evaluating emails for security.</p>
        <br />
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            lineHeight: "1.8",
          }}
        >
          <li>
            <strong>1. </strong>Assess each email's content and sender
            information.
          </li>
          <li>
            <strong>2. </strong>Determine if they're safe or potentially
            harmful.
          </li>
          <li>
            <strong>3. </strong>
            If harmful, click and drag actions like contacting IT or following
            company protocol.
          </li>
          <li>
            <strong>4. </strong>Then navigate back and finish the exercise!
          </li>
        </ul>
        <br />

        <p>This safe practice space will enhance your email security skills.</p>
        <br />

        <p>Ready to begin?</p>
      </div>
    ),
    placement: "center",
    target: "body",
    title: "Welcome to the Email Simulation Challenge!",
  },

  {
    content: (
      <div>
        <p>
          Here, you'll delve into the details of an email's content and sender.
        </p>
        <p>You can follow these steps to evaluate an email:</p>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: "1.8",
          }}
        >
          <li>
            <strong>Examine:</strong> the email's content and sender
            information.
          </li>
          <li>
            <strong>Judge:</strong> if the email is safe or potentially harmful.
          </li>
          <li>
            <strong>Action:</strong> if suspicious, mark with a cross or
            checkmark to indicate maliciousness or safety.
          </li>
          <li>
            <strong>Finish:</strong> Click the back symbol to conclude the
            exercise.
          </li>
        </ul>
      </div>
    ),
    placement: "right",
    placementSmallScreen: "bottom",
    target: ".simulation-panel",
    title: "The Email Assessment Panel",
    disableScrolling: true,
  },

  {
    content: (
      <>
        <div>Wow</div>
      </>
    ),
    placement: "bottom",
    target: ".email-topbar",
    title: "Second step",
  },

  {
    content: (
      <>
        <div>Wow</div>
      </>
    ),
    placement: "right",
    target: ".mail-options",
    title: "Third step",
  },
  {
    content: (
      <>
        <div>POPPAPSDAD</div>
      </>
    ),
    placement: "left",
    target: ".todo-panel",
    title: "Fourth step",
  },
];
