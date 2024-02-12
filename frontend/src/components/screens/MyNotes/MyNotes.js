import { Button } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap"; // Import Card from react-bootstrap
import MainScreen from "../../MainScreen";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back">
      {/* Apply inline styles to the "Create New Note" Button */}
      <Button
        style={{
          backgroundColor: "#1976d2", // Background color
          color: "white", // Text color
          borderRadius: "4px", // Border radius
          padding: "10px 20px", // Padding
          fontSize: "13px", // Font size
          margin: "10px",
        }}
      >
        Create New Note
      </Button>
      <Card>
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Title</span>
          <div className="buttons">
            {/* Apply inline styles to the "Edit" Button */}
            <Button
              style={{
                backgroundColor: "green", // Background color
                color: "white", // Text color
                borderRadius: "4px", // Border radius
                padding: "8px 16px", // Padding
                fontSize: "13px", // Font size
                margin: "0 5px", // Margin
              }}
              variant="contained"
            >
              Edit
            </Button>
            {/* Apply inline styles to the "Delete" Button */}
            <Button
              style={{
                backgroundColor: "red", // Background color
                color: "white", // Text color
                borderRadius: "4px", // Border radius
                padding: "8px 16px", // Padding
                fontSize: "13px", // Font size
                margin: "0 5px", // Margin
              }}
              variant="contained"
            >
              Delete
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>Quote</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </Card.Text>
          <Card.Footer>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </Card.Footer>
        </Card.Body>
      </Card>
    </MainScreen>
  );
};

export default MyNotes;
