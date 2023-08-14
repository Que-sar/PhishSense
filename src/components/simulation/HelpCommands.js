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
    disableScrolling: false,
  },

  {
    content: (
      <div>
        <p>
          Here, you'll delve into the details of an email's content and sender.
        </p>
        <p style={{ marginBottom: "12px" }}>
          You can follow these steps to evaluate an email:
        </p>
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
      <div>
        <p>This bar hosts a range of functions to manage the email:</p>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: "1.8",
            marginTop: "12px",
          }}
        >
          <li>
            <strong>Back Button:</strong> After marking the email, use this
            button to evaluate to the assessment.
          </li>
          <li>
            <strong>Marking Buttons:</strong> use them to mark the email as
            legitimate or malicious.
          </li>
          <li>
            <strong>Spam Button:</strong> Flag the email as spam.
          </li>
          <li>
            <strong>Delete Button:</strong> Permanently remove the email.
          </li>
        </ul>
      </div>
    ),
    placement: "top",
    target: ".email-topbar",
    title: "Email Panel's top bar",
  },

  {
    content: (
      <div>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: "1.8",
            marginTop: "12px",
          }}
        >
          <li>
            <strong>Flag:</strong> Use this button to flag the email if wanted.
          </li>
          <li>
            <strong>More Information:</strong> Click here to access additional
            metadata about the email, helping you make an informed decision.
          </li>
        </ul>
        <p>
          <br />
          These options empower you to interact with and evaluate the email
          thoroughly.
        </p>
      </div>
    ),
    placement: "right",
    target: ".mail-options",
    title: "Flag and More information",
    disableScrolling: true,
  },
  {
    content: (
      <div>
        <p>
          Let's explore the Action Panel, where you can choose how to respond to
          suspicious emails.
        </p>
        <p>Within this panel, you'll find:</p>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: "1.8",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <li>
            <strong>What to Do Options:</strong> Choose and Click from a set of
            predefined actions, such as contacting IT, following company
            protocol, or taking no action.
          </li>
          <li>
            <strong>When to Do List:</strong> After selecting actions, drag and
            arrange them in order of importance.
          </li>
          <li>
            <strong>When Done</strong> Navigate to the back button in the email
            top bar and have your choices evaluated.
          </li>
        </ul>
        <p>
          These tools assist you in responding effectively to potentially
          harmful emails.
        </p>
        <p>
          <br />
          <strong>Ready to go?</strong>
        </p>
      </div>
    ),
    placement: "left-start",
    target: ".todo-panel",
    title: "The Action Panel",
    disableScrolling: true,
  },
];
