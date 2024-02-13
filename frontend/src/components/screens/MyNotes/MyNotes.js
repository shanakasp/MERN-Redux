import { Button } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import MainScreen from "../../MainScreen";
import notes from "./notes";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back">
      <Button
        style={{
          backgroundColor: "#1976d2",
          color: "white",
          borderRadius: "4px",
          padding: "10px 20px",
          fontSize: "13px",
          margin: "10px",
        }}
      >
        Create New Note
      </Button>

      <div className="Cardcomponents">
        {notes.map((note, index) => (
          <Card
            key={note._id}
            style={{ marginBottom: index !== notes.length - 1 ? "20px" : 0 }}
          >
            <Card.Header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{note.title}</span>
              <div className="buttons">
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    margin: "0 5px",
                  }}
                  variant="contained"
                >
                  Edit
                </Button>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    fontSize: "13px",
                    margin: "0 5px",
                  }}
                  variant="contained"
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.content}</Card.Text>
              <Card.Footer>Category: {note.category}</Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
    </MainScreen>
  );
};

export default MyNotes;
